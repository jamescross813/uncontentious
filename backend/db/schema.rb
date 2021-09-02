# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_01_235046) do

  create_table "categories", force: :cascade do |t|
    t.string "category_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "game_categories", force: :cascade do |t|
    t.integer "category_id", null: false
    t.integer "game_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_game_categories_on_category_id"
    t.index ["game_id"], name: "index_game_categories_on_game_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "title"
    t.integer "min_players"
    t.integer "max_players"
    t.text "description"
    t.string "play_style"
    t.integer "play_time"
    t.integer "mode_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["mode_id"], name: "index_games_on_mode_id"
  end

  create_table "modes", force: :cascade do |t|
    t.string "mode_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "notes", force: :cascade do |t|
    t.text "content"
    t.integer "game_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_notes_on_game_id"
    t.index ["user_id"], name: "index_notes_on_user_id"
  end

  create_table "user_games", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "game_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_user_games_on_game_id"
    t.index ["user_id"], name: "index_user_games_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "game_categories", "categories"
  add_foreign_key "game_categories", "games"
  add_foreign_key "games", "modes"
  add_foreign_key "notes", "games"
  add_foreign_key "notes", "users"
  add_foreign_key "user_games", "games"
  add_foreign_key "user_games", "users"
end
