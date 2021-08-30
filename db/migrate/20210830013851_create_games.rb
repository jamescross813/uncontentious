class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :min_players
      t.integer :max_players
      t.text :description
      t.string :game_type
      t.string :category
      t.string :play_style
      

      t.timestamps
    end
  end
end
