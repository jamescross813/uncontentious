class CategoriesController < ApplicationController
    def index
        categories = Category.all
        render json: categories, 
            except: [:created_at, :updated_at]
    end
    
    def show
        category = Category.find_by(id: params[:id])
        if category 
            render json: category,
            except: [:created_at, :updated_at]
        else
            render json: {message: "Category not found"}
        end
    end
end
