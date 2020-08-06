class Api::CommentsController < ApplicationController

  before_action :require_logged_in
  # before_action :set_product

  def index
    @comments = @recipe.comments if @recipe
  end
  
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render '/api/comments/show', status: 200
    else
      render json: ["error"], status: 422
    end
  end

  private

  # def set_product
  #   @recipe = Product.where(id: params[:product_id]).first
  # end
  
  def comment_params
    params.require(:comment).permit(:body, :user_id, :recipe_id)
  end
  
end
