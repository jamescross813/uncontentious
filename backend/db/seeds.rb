# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_one = User.create(username: "James", password_digest: "1234")
user_two = User.create(username: "Jason", password_digest: "1234")

category_worker = Category.create(category_name: "worker placement")
category_chance = Category.create(category_name: "chance")
category_horror = Category.create(category_name: "horror")
category_escape = Category.create(category_name: "escape")
category_puzzle = Category.create(category_name: "puzzle")
category_family = Category.create(category_name: "family")
category_humor = Category.create(category_name: "humor")
category_language = Category.create(category_name: "language")
category_mystery = Category.create(category_name: "mystery")
category_rpg = Category.create(category_name: "rpg")
category_strategy = Category.create(category_name: "strategy")


game_phase_10 = Game.create(
    game_title: "Phase 10", 
    min_players: 2,
    max_players: 600, 
    description: "Phase 10 is a card game created in 1982 by Kenneth Johnson and sold by Mattel, which purchased the rights from Fundex Games in 2010. Originally conceptualized in 1953 by the Ross family. Phase 10 is based on a variant of rummy known as Liverpool rummy, and is a member of the contract rummy family.", 
    play_style: "competitive",
    game_type: "card",
    max_time: 90)
game_farkle = Game.create(
    game_title: "Farkle",
    min_players: 2, 
    max_players: 10, 
    description: "Farkle, or Farkel, is a dice game has also been called or is similar to 1000/5000/10000, Cosmic Wimpout, Greed, Hot Dice,[1] Squelch,[2] Zilch,[3] or Zonk.", 
    play_style: "competitive",
    game_type: "dice",
    max_time: 30)
game_bananagrams = Game.create(
    game_title: "Bananagrams", 
    min_players: 1, 
    max_players: 8, 
    description: "The anagram game that will drive you bananas! BANANAGRAMS is the award-winning word game that needs no pencil, paper, or board. Players race against each other to build crossword grids and use all their letter tiles first. BANANAGRAMS comes in a small portable banana-shaped pouch so is great for travel, and is perfect for everyone 7 & up.",  
    play_style: "competitive",
    game_type: "tile",
    max_time: 10)
game_arkham_horror = Game.create(
    game_title: "Arkham Horror", 
    min_players: 1, 
    max_players: 6, 
    description: "Arkham Horror: The Card Game is a cooperative Living Card Game® set amid a backdrop of Lovecraftian horror. As the Ancient Ones seek entry to our world, one to two investigators (or up to four with two Core Sets) work to unravel arcane mysteries and conspiracies.", 
    play_style: "cooperative",
    game_type: "card",
    max_time: 90)
game_love_letter = Game.create(
    game_title: "Love Letter", 
    min_players: 2,
    max_players: 4, 
    description: "All of the eligible young men (and many of the not-so-young) seek to woo the princess of Tempest. Unfortunately, she has locked herself in the palace, and you must rely on others to take your romantic letters to her. Will yours reach her first?",  
    play_style: "competitive",
    game_type: "card",
    max_time: 20)
game_wingspan = Game.create(
    game_title: "Wingspan",
    min_players: 1, 
    max_players: 5, 
    description: "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. It's designed by Elizabeth Hargrave and features over 170 birds illustrated by Beth Sobel, Natalia Rojas, and Ana Maria Martinez.",  
    play_style: "competitive",
    game_type: "board",
    max_time: 70)
game_ticket_to_ride = Game.create(
    game_title: "Ticket To Ride", 
    min_players: 2, 
    max_players: 5, 
    description: "Build your tracks across the United States in this fast-paced and strategic board game. Connect iconic North American cities across a map of the 20th-century USA and build your train routes to earn points", 
    play_style: "competitive",
    game_type: "board",
    max_time: 60)
game_exit = Game.create(
    game_title: "Exit: The Secret Lab", 
    min_players: 1, 
    max_players: 4, 
    description: "EXIT: The Game is a series of escape room games for the home. Players must solve riddles and puzzles and crack codes to escape from an imaginary room or environment. But the clock is ticking! Can you escape?", 
    play_style: "cooperative",
    game_type: "card",
    max_time: 120)
game_unlock = Game.create(
    game_title: "Unlock: The Island of Cr Goorse", 
    min_players: 1, 
    max_players: 6, 
    description: "You and your team have crash-landed on the Island of an eccentric antiques collector in unlock! the Island of Doctor goorse. Two to six players will be split into teams, separated in the crash, and forced to escape from two separate starting points. The twists and turns of this challenging adventure will test even the most talented escape artists.  With your lines of communication cut, can you and your teammates find a way off the Island? unlocks a series of escape adventures for up to six players. With one hour on the clock, players work through a deck of sixty cards as a team, searching for clues, combining objects, and solving puzzles. The free unlock!  companion app runs the timer while also providing clues, offering hints, and confirming successes. Once the team has reached a solution and entered the correct code into the app, they will escape and win the game!", 
    play_style: "cooperative",
    game_type: "card",
    max_time: 120)
game_carcasonne = Game.create(
    game_title: "Carcasonne",
    min_players: 2, 
    max_players: 5, 
    description: "Develop the landscape of a medieval fortress city one tile at a time. Whether blocking a city's growth or connecting with your opponent’s road to share the points, Carcassonne provides plenty of ways to use your cunning and outsmart your opponents.",  
    play_style: "competitive",
    game_type: "tile",
    max_time: 45)
game_monopoly = Game.create(
    game_title: "Monopoly",
    min_players: 2, 
    max_players: 8, 
    description: "It's the fast-dealing property trading game where players buy, sell, dream and scheme their way to riches. This version of the Monopoly game welcomes the Rubber Ducky, Tyrannosaurus Rex, and Penguin into its family of tokens. Choose your token, place it on GO! and roll the dice to own it all!", 
    play_style: "competitive",
    game_type: "board",
    max_time: 180)
game_oregon_trail = Game.create(
    game_title: "Oregon Trail", 
    min_players: 2, 
    max_players: 6, 
    description: "All sorts of gruesome deaths await you and the rest of your wagon party in this official multi-player card game version of the classic computer game. To win, you'll need to keep one player alive all the way from Independence, MO to the Willamette Valley. But between rattlesnakes, starvation, dead oxen, broken bones, dysentery, and a host of other calamities, the odds are long...almost as long as the Oregon Trail itself. Players work together to move along the trail, fording rivers and playing Supply Cards to overcome calamities. Be warned - there will be times when it makes sense to let one of your wagon mates succumb to a calamity rather than expend precious supplies. Every time players go the way of all flesh, you'll flip over the roster card and write their names on tombstones (don't forget to include a quick epitaph). It's a great way to relive your fond memories of one of the world's most beloved computer games and to kill off your family and friends at the same time", 
    play_style: "cooperative",
    game_type: "card",
    max_time: 30)
game_cards_against_humanity = Game.create(
    game_title: "Cards Against Humanity", 
    min_players: 4,
    max_players: 20, 
    description: "Cards Against Humanity is a party game for horrible people.", 
    play_style: "competitive",
    game_type: "card",
    max_time: 90)
game_splendor = Game.create(
    game_title: "Splendor",
    min_players: 2, 
    max_players: 4, 
    description: "Compete to build Renaissance Europe’s most lucrative and prestigious jewelry business. As a wealthy merchant, acquire mines and transportation, hire artisans and woo the nobility. Create the most fantastic jewelry to become the best-known merchant of them all!", 
    play_style: "competitive",
    game_type: "baord",
    max_time: 30)
game_five_crowns = Game.create(
    game_title: "Five Crowns", 
    min_players: 1, 
    max_players: 7, 
    description: "Introducing the Five Crowns special Anniversary Edition! The award-winning, best-selling card game is celebrating 25 years of success with sleek, new packaging but the same family fun! Play the game with 5 suits and a special custom score card and find out if you have what it takes to come out on top. In this rummy-style card game with rotating wild cards, 'The game isn’t over ’til the Kings go wild!'",  
    play_style: "competitive",
    game_type: "card",
    max_time: 60)
game_quiddler = Game.create(
    game_title: "Quiddler", 
    min_players: 1, 
    max_players: 8, 
    description: "Quiddler is easy to learn and fun for everyone! Because it’s The SHORT Word Game, it attracts non-word-game players as well as people who love word games! The goal is to arrange all the cards in your hand into one or more words. The number of cards dealt increases each round – starting with three cards and ending with 10 cards.",  
    play_style: "competitive",
    game_type: "card",
    max_time: 30)
game_shady_pets = Game.create(
    game_title: "Shady Pets", 
    min_players: 2, 
    max_players: 5, 
    description: "Shady Pets is a new card game that’s a little like Clue and Uno except you get to throw octopuses, deal with naked turtles and avoid hangry hamsters! This creative, fun and strategic game delivers hilarious laughs for all!", 
    play_style: "competitive",
    game_type: "card",
    max_time: 20)
game_dracula = Game.create(
    game_title: "Fury of Dracula", 
    min_players: 2, 
    max_players: 5, 
    description: "Rounds are broken into day and night, with hunters taking actions during both, while Dracula can act only at night. Combat is streamlined and decisive, and rumor tokens allow Dracula to mislead hunters and extend the terrible reach of his influence. Count Dracula triumphs if he advances his influence track to thirteen; if the hunters can defeat him before then, they save the continent of Europe and win the game.",  
    play_style: "competitive",
    game_type: "board",
    max_time: 180)
game_betrayal = Game.create(
    game_title: "Betrayal at the House on the Hill", 
    min_players: 3, 
    max_players: 6, 
    description: "etrayal at House on the Hill quickly builds suspense and excitement as players explore a haunted mansion of their own design, encountering spirits and frightening omens that foretell their fate. With an estimated one hour playing time, Betrayal at House on the Hill is ideal for parties, family gatherings or casual fun with friends.",  
    play_style: "cooperative",
    game_type: "card",
    max_time: 90)
game_gloom = Game.create(
    game_title: "Gloom", 
    min_players: 2, 
    max_players: 4, 
    description: "Gloom is a game of inauspicious incidents and grave consequences created by Keith Baker. A new tragedy lies around every corner and it is the kids' job to make their characters suffer the most tragedies to win. Transparent cards reveal or obscure the effects of cards below. In the end, the total showing through determines each player's score.",  
    play_style: "competitive",
    game_type: "card",
    max_time: 30)
game_mysterium = Game.create(
    game_title: "Mysterium", 
    min_players: 2, 
    max_players: 7, 
    description: "In the 1920s, Mr. MacDowell, a gifted astrologer, immediately detected a supernatural being upon entering his new house in Scotland. He gathered eminent mediums of his time for an extraordinary séance, and they have seven hours to make contact with the ghost and investigate any clues that it can provide to unlock an old mystery.", 
    play_style: "competitive",
    game_type: "board",
    max_time: 45)
game_pandemic = Game.create(
    game_title: "Pandemic", 
    min_players: 2, 
    max_players: 4, 
    description: "Players must work together playing to their characters' strengths as they plan their strategy of eradicating the diseases before they overwhelm the world with ever-increasing outbreaks. A truly cooperative game where you win or lose together.", 
    play_style: "cooperative",
    game_type: "board",
    max_time: 45)
game_azul = Game.create(
    game_title: "Azul", 
    min_players: 2, 
    max_players: 4, 
    description: "Azul is a tile-placement game in which players compete for the highest score by claiming tiles and arranging them on their board to score points.", 
    play_style: "competitive",
    game_type: "tile",
    max_time: 45)

    game_category_phase_10 = GameCategory.create(game: game_phase_10, category: category_family)
    game_category_farkle = GameCategory.create(game: game_farkle, category: category_chance)
    game_category_bananagrams = GameCategory.create(game: game_bananagrams, category: category_language)
    game_category_arkham_horror = GameCategory.create(game: game_arkham_horror, category: category_rpg)
    game_category_love_letter = GameCategory.create(game: game_love_letter, category: category_strategy)
    game_category_wingspan = GameCategory.create(game: game_wingspan, category: category_rpg)
    game_category_ticket_to_ride = GameCategory.create(game: game_ticket_to_ride, category: category_strategy)
    game_category_exit = GameCategory.create(game: game_exit, category: category_puzzle)
    game_category_exit_two = GameCategory.create(game: game_exit, category: category_mystery)
    game_category_exit_three = GameCategory.create(game: game_exit, category: category_escape)
    game_category_unlock = GameCategory.create(game: game_unlock, category: category_puzzle)
    game_category_unlock_two = GameCategory.create(game: game_unlock, category: category_mystery)
    game_category_unlock_three = GameCategory.create(game: game_unlock, category: category_escape)
    game_category_carcasonne = GameCategory.create(game: game_carcasonne, category: category_strategy)
    game_category_monopoly = GameCategory.create(game: game_monopoly, category: category_family)
    game_category_oregon_trail = GameCategory.create(game: game_oregon_trail, category: category_chance)
    game_category_cards_against_humanity = GameCategory.create(game: game_cards_against_humanity, category: category_humor)
    game_category_splendor = GameCategory.create(game: game_splendor, category: category_strategy)
    game_category_five_crowns = GameCategory.create(game: game_five_crowns, category: category_family)  
    game_category_quiddler = GameCategory.create(game: game_quiddler, category: category_language)
    game_category_shady_pets = GameCategory.create(game: game_shady_pets, category: category_humor)
    game_category_dracula = GameCategory.create(game: game_dracula, category: category_horror)
    game_category_betrayal = GameCategory.create(game: game_betrayal, category: category_horror)
    game_category_gloom = GameCategory.create(game: game_gloom, category: category_family)
    game_category_mysterium = GameCategory.create(game: game_mysterium, category: category_puzzle)
    game_category_mysterium_two = GameCategory.create(game: game_mysterium, category: category_mystery)
    game_category_pandemic = GameCategory.create(game: game_pandemic, category: category_strategy)
    game_category_azul = GameCategory.create(game: game_azul, category: category_puzzle)

    