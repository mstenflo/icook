class Api::CommentsController < ApplicationController

  before_action :require_logged_in
  # before_action :set_product
  
  def create
    @comment = @recipe.comments.build(comment_params)
    @comment.user = current_user

    if @comment.save
      flash[:notice] = "Comment has been created"
      redirect_to @recipe
    else
      @comments = @recipe.comments
      flash.now[:alert] = "Comment has not been created"
      render 'recipes/show'
    end
  end

  private

  # def set_product
  #   @recipe = Product.where(id: params[:product_id]).first
  # end
  
  def comment_params
    params.require(:comment).permit(:body)
  end
  
end
