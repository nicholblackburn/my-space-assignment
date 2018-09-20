class Api::PostsController < ApplicationController

  def index
    render json: User.random_post(current_user.liked_posts)
  end

  def create
    post = Post.new(post_params)
    if post.save 
      render json: post 
    else  
      render json: { errors: post.errors }, status: 422
    end
  end

  def update
    current_user.liked_posts << params[:id].to_i
    current_user.save
    render json: post 
  end

  def destroy
    Post.find(params[:id]).destroy 
    rener json: { message: 'Post deleted' }
end

private

def post_params
  params.require(:post).permit(:body)
end
