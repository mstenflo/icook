class Api::RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        render :index
    end

    def new
        render :new
    end

    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
            render :show
        else
            render json: @recipe.errors.full_messages, status: 422
        end
    end

    def update
        @recipe = current_user.recipes.find(params[:id])
        if @recipe
            if @recipe.update(recipe_params)
                render :show
            else
                render json: @recipe.errors.full_messages, status: 422
            end
        else
            render json: { message: 'Recipe not found', status: 404 }
        end
    end

    def edit
        @recipe = current_user.recipes.find(params[:id])
        render :edit
    end

    def show
        @recipe = Recipe.find(params[:id])
        render :show
    end

    def destroy
        @recipe = Recipe.find(params[:id])
        @recipe.destroy
        render :index
    end

    private

    def recipe_params
        params.require(:recipe).permit(:title, :body, :category, :author_id)
    end
end
