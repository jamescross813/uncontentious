class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :game_title
      t.integer :min_players
      t.integer :max_players
      t.text :description
      t.string :play_style
      t.integer :max_time
      t.string :game_type
      t.text :game_categories
      t.timestamps
    end
  end
end
