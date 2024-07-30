

var player = {
    "points": 0
}

function rock(random) {
    if (random == 1) {
        alert("paper");
        player.points = player.points - 1;
        console.log(player.points)
        alert("loss")
        if (player.points < 0) {
            player.points = 0
        }
        alert("you have " + player.points + " points")
    } else if (random == 2) {
        alert("rock");
        player.points = player.points;
        console.log(player.points)
        alert("tied")
        if (player.points < 0) {
            player.points = 0
        }
        alert("you have " + player.points + " points")
    } else if (random == 3) {
        alert("scissors");
        player.points = player.points + 1;
        console.log(player.points)
        alert("win")
        if (player.points < 0) {
            player.points = 0
        }
        alert("you have " + player.points + " points")
    }
    
        }

        function paper(random) {
            if (random == 1) {
                alert("paper");
                player.points = player.points;
                console.log(player.points)
                alert("tied")
                if (player.points < 0) {
                    player.points = 0
                }
                alert("you have " + player.points + " points")
            } else if (random == 2) {
                alert("rock");
                player.points = player.points + 1;
                console.log(player.points)
                alert("won")
                if (player.points < 0) {
                    player.points = 0
                }
                alert("you have " + player.points + " points")
            } else if (random == 3) {
                alert("scissors");
                player.points = player.points - 1;
                console.log(player.points)
                alert("loss")
                if (player.points < 0) {
                    player.points = 0
                }
                alert("you have " + player.points + " points")
            }
            
                }
        

                function scissors(random) {
                    if (random == 1) {
                        alert("paper");
                        player.points = player.points + 1;
                        console.log(player.points)
                        alert("won")
                        if (player.points < 0) {
                            player.points = 0
                        }
                        alert("you have " + player.points + " points")
                    } else if (random == 2) {
                        alert("rock");
                        player.points = player.points - 1;
                        console.log(player.points)
                        alert("loss")
                        if (player.points < 0) {
                            player.points = 0
                        }
                        alert("you have " + player.points + " points")
                    } else if (random == 3) {
                        alert("scissors");
                        player.points = player.points;
                        console.log(player.points)
                        alert("tied")
                        if (player.points < 0) {
                            player.points = 0
                        }
                        alert("you have " + player.points + " points")
                    }
                    
                        }

                        function money() {
                            player.points = player.points + 1;
                            console.log(player.points);
                            alert("you now have " + player.points + " points")
                        }

                        function cashin() {
                            alert("you now have 0 points")
                            alert("you won " + player.points + " moohla")
                            player.points = 0
                        }