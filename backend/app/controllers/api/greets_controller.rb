class Api::GreetsController < ApplicationController
  def index
    @greet = Greet.order('RANDOM()').limit(1).first
    render json: { msg: @greet.msg }
  end
end
