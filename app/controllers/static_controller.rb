class StaticController < ApplicationController
  def main
    render :main
  end
  
  def not_found
    respond_to do |format|
      format.html { redirect_to('/404.html') }
      format.json { head :not_found }
    end
  end
end
