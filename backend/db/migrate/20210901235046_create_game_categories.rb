class CreateGameCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :game_categories do |t|
      t.references :category, null: false, foreign_key: true
      t.references :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
