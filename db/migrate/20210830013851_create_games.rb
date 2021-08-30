class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :min_players
      t.integer :max_player
      t.text :description
      t.string :game_type
      t.string :category
      t.string :play_style
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
