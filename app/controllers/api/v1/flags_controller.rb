class Api::V1::FlagsController < ApplicationController

  def index
    @flags = Flag.order(:created_at)
    render json: @flags
  end

  def show
    @flag = Flag.find(params[:id])
    render json: @flag
  end

  def create
    @flag = Flag.new(permitted_params)

    if @flag.save
      render json: @flag
    else
      render status: :unprocessable_entity
    end
  end

  def update
    @flag = Flag.find(params[:id]) 
    if @flag.update(permitted_params)
      render json: @flag
    else
      render status: :unprocessable_entity
    end
  end

  def destroy
    Flag.destroy(params[:id]) 
    head :no_content
  end

  private
  def permitted_params
    params.permit(:title, :state, :reason, :promotable, :can_promote, :mergeable, :merge_status, :investigating, :personInvestigating)
  end
end
