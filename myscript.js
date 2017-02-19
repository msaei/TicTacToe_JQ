var current_player = "X";
var rooms = [0,0,0,0,0,0,0,0,0];
var game_countinue = true;

// this function change players turn between X and O
function flip_player() {
	if (current_player == "X") {
		current_player = "O";
		//document.getElementById('game_table').innerHTML = "Current Player is O";
	} else {
		current_player = "X";
		//document.getElementById('game_table').innerHTML = "Current Player is X";
	}
}

// this function handle game when user click on any cell
function room_clicked(room) {

	if (game_countinue) {
		if (rooms[room.id] != 0){
			alert("this room is fool !");
		}else{
			//alert(((current_player == "X") ? "images/x.png" : "images/o.png"));
			
			//alert(imgsrc);
			//$(this).attr("src", imgsrc )
			rooms[room.id] = ((current_player == "X") ? 1 : -1);

			if (check_board()) {
				//document.getElementById('game_table').innerHTML = "Player " + current_player + " won!";
			} else {
			flip_player();
			}
		}		
	}
}


// this function checks the games status and display winer or tie situation
function check_board() {
	// wining combination array
	var combs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	// check for wining game
	for (i = 0; i < combs.length; i++) {
		if (Math.abs(rooms[combs[i][0]] +  rooms[combs[i][1]] + rooms[combs[i][2]]) == 3) {	
			alert("You won !");
			game_countinue = false ;
			return true;
		} 
	}
	
	// check for tie situation
	var check = 1;
	for (i = 0; i < 9; i++) {
		check = rooms[i] * check
	}
	if (check != 0) {
		// tie happened
		alert("Tie!");
		game_countinue = false ;
		return true;
	}
		
	return false;
}

$(document).ready(function(){
    $("img").mouseenter(function(){
    	if ($(this).attr("src") == ""){
        	$(this).css("opacity", 1);
        }
        
    });
    $("img").mouseleave(function(){
        $(this).css("opacity", 0.5);
    });
    $("img").click(function(){
        if ($(this).attr("src") == ""){
        	$(this).attr("src", ((current_player == "X") ? "images/x.png" : "images/o.png"));
        	room_clicked(this);
        	//var imgsrc = ((current_player == "X") ? "images/x.png" : "images/o.png");
        	
        }
    });
});