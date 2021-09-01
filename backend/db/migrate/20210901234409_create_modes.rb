class CreateModes < ActiveRecord::Migration[6.1]
  def change
    create_table :modes do |t|
      t.string :mode_name
      t.references :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
