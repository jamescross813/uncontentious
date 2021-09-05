class Game{
static all = []

    constructor(title, minPlayer, maxPlayer, description, gameType, gameStyle, time){
        this.title = title;
        this.minPlayer = minPlayer;
        this.maxPlayer = maxPlayer;
        this.description = description;
        this.gameType = gameType;
        this.gameStyle = gameStyle;
        this.time = time;
        Game.all.push(this)
    }
}