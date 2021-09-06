class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :game_title, :min_players, :max_players, :description, :play_style, :game_type, :max_time
  belongs_to :game_categories

  # def initialize(game_object)
  #   @game = game_object
  # end

  # def to_serialized_json
  #   @game.to_json(:include =>{
  #     :game_catergories => {:except => [:updated_at, :created_at]
  #   }, :except => [:updated_at, :created_at])
  # end

end
