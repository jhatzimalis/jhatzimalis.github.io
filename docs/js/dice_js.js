function roll_dices(){
    // get two random integers between 1-6
    var r1 = Math.floor(Math.random() * 6)
    var r2 = Math.floor(Math.random() * 6)
    // list of possibilities using class names
    var classes = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"]

    // update dice div HTML tags to set a randomly selected class
    document.getElementById("dice1").classList = classes[r1]
    document.getElementById("dice2").classList = classes[r2]
}
roll_dices();