class CommentsController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  respond_to :html, :json

  def index
     @comment = Comment.where(todo_id: params[:todo_id])
     respond_with @comment
  end

  def create
    # data = comment_params
    # puts "Hello"
    # @comment = Comment.new(comment_params)
    # if @comment.save
    #   render json: @comment.as_json, status: :ok
    # else
    #   render json: {comment: @comment.errors, status: :no_content}
    # end
    puts "Hey"
    @todo = Todo.find(params[:todo_id])
    @comment = @todo.comments.create(comment_params)
    render json: @todo.as_json, status: :ok
  end

  # def update
  #     @todo = Todo.find(params[:id])
  #   if @todo.update_attributes(todo_params)
  #     render json: @todo.as_json, status: :ok
  #   else
  #     render json: {todo: @todo.errors, status: :unprocessable_entity}
  #   end
  # end
  #
  # def destroy
  #   @todo = Todo.find(params[:id])
  #   @todo.destroy
  #   render json: {status: :ok}
  # end

  private


  def comment_params
    puts "India"
    params.fetch(:comment).permit(:text, :todo_id)
  end
end
