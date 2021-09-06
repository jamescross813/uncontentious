class GameSerializerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :game_title, :min_players, :max_players, :description, :play_style, :game_type, :max_time
  belongs_to :game_categories
end
