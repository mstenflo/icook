class Api::RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        @steps = Step.all
        @comments = Comment.all
        render :index
    end

    def new
        render :new
    end

    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
            render '/api/recipes/newrecipe', status: 200
            # render :show
        else
            render json: @recipe.errors.full_messages, status: 422
        end
    end

    def update
        @recipe = Recipe.find(params[:id])
        if @recipe
            if @recipe.update_attributes!(recipe_params)
                render '/api/recipes/show', status: 200
            else
                render json: @recipe.errors.full_messages, status: 422
            end
        else
            render json: { message: 'Recipe not found', status: 404 }
        end
    end

    def edit
        @recipe = current_user.recipes.find(params[:id])
        @steps = @recipe.steps
        render :edit
    end

    def show
        @recipe = Recipe.find(params[:id])
        # steps = Step.all
        # @steps = Step.where(params[:id] === steps.recipe_id)
    end

    def destroy
        @recipe = Recipe.find(params[:id])
        comments = Comment.where(recipe_id: params[:id])
        comments.each do |comment| 
            comment.destroy 
        end
        @recipe.destroy
        # render :index
    end

    private

    def recipe_params
        params.require(:recipe).permit(:id, :title, :body, {:ingredients => []}, :category, :author_id, :photo_url)
    end
end
