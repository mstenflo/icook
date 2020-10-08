import React, { useState, useEffect } from 'react';

import { updateObject } from '../../../shared/utility';
import EditStepListItem from '../../steps/edit_step_list_item';


const EditRecipe = props => {

    const [photo_url, setPhoto_url] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [recipe, setRecipe] = useState('');
    const [stepList, setStepList] = useState([]);

    useEffect(() => {
        props.requestRecipe(props.match.params.recipeId)
            .then(res => {
                setRecipe(res.recipe)
                setStepList(Object.values(res.recipe.steps));
            });
    }, [props]);

    const handleSubmit = (e) => {
        e.preventDefault();

        handleUpload();
        const updatedRecipe = updateObject(recipe, { photo_url });
        setRecipe(updatedRecipe);
        props.history.push(`/recipes/${recipe.id}`)
    }

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('recipe[id]', recipe.id);
        if (imageFile) {
            formData.append('recipe[photo]', imageFile);
        }
        $.ajax({
            url: `/api/recipes/${recipe.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        })
    }

    const handleDelete = (e, stepId) => {
        e.preventDefault();
        props.destroyStep(stepId)
    }

    const handleImage = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            setPhoto_url(reader.result);
            setImageFile(file);
        };
        if (file) {
            reader.readAsDataURL(file);
            handleUpload();
            setTimeout(() => handleUpload(), 100)
        }
    }
    
    const handleStep = (e) => {
        e.preventDefault();
        const emptyStep = {
            title: "",
            body: "",
            recipe_id: recipe.id
        }
        props.createStep(emptyStep)
            .then(res => {
                const recipeId = res.step.recipe_id
                props.requestRecipe(recipeId)
                    .then(res => setRecipe(res.recipe));
            });
    }

    const handleTitle = (e, id) => {
        e.preventDefault();
        props.history.push(`/recipe_title/${id}/edit`);
    }

    if (!recipe.ingredients) return null;

    return (
        <div className="new-edit-container">
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                <div className="stepDetailBox">
                    <div className="inline">
                        <div onClick={e => handleTitle(e, recipe.id)} className="recipe-title-box">
                            <div className="new-recipe-title">
                                <h1>{recipe.title}</h1>
                            </div>
                            <p>{recipe.body}</p>
                        </div>
                        <div className="image-container">
                            {
                                !photo_url &&
                                <label className="upload-image" htmlFor="newImage">upload an image:</label>
                            }
                            {   
                                !photo_url &&
                                    <input
                                        type="file"
                                        id="newImage"
                                        title="image"
                                        name="newImage"
                                        onChange={e => handleImage(e)}
                                        placeholder="add an image"
                                    />
                            }
                            {
                                photo_url && 
                                    <div className="thumbnail">
                                        <img src={photo_url} />
                                    </div>
                            }
                        </div>
                    </div>

                    
                    {
                        recipe.ingredients.length === 0 ? null :
                            <div className="ingredient-container">
                                {recipe.ingredients.map((ingredient, idx) => (
                                    <div className="ingredient-list" key={idx}>
                                        <li>{ingredient}</li>
                                    </div>
                                ))}
                            </div>
                    }

                    <ul>
                        { stepList.map((step, idx) => (
                            <div key={step.id} className="step-edit-container">
                                <EditStepListItem 
                                    history={props.history} 
                                    deleteStep={props.destroyStep} 
                                    step={step} 
                                    number={idx + 1} 
                                />
                                <div className="delete-step" onClick={e => handleDelete(e, step.id)}>x</div>
                            </div>
                        ))}
                    </ul>
                    
                    <div className="bottom-buttons">
                        <div className="submit-button" onClick={handleStep}>
                            Add Step
                        </div>
                        <div className="submit-button" onClick={handleSubmit}>Submit</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditRecipe;