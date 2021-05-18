
var canvas = new fabric.Canvas("myCanvas");
var player_X = 10;
var player_Y = 10;
var playerObj = "";
var blockImgObj = "";
var blockWidth = 30;
var blockHeight = 30;

function plr_update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObj = Img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(140);
        playerObj.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(playerObj);
    })
}
plr_update();

function newImg(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockImgObj = Img;
        blockImgObj.scaleToWidth(blockWidth);
        blockImgObj.scaleToHeight(blockHeight);
        blockImgObj.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(blockImgObj);
    })
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == 80){
        console.log("keypress = p+shift");
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if(e.shiftKey == true && keypressed == 77){
        console.log("keypress = m+shift");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if(keypressed == 37){
        left();
        console.log("left");
    }
    if(keypressed == 38){
        up();
        console.log("up");
    }
    if(keypressed == 39){
        right();
        console.log("right");
    }
    if(keypressed == 40){
        down();
        console.log("down");
    }
    if(keypressed == 70){
        newImg("ironman_face.png");
        console.log("f");
    }
    if(keypressed == 66){
        newImg("spiderman_body.png");
        console.log("b");
    }
    if(keypressed == 76){
        newImg("hulk_legs.png");
        console.log("l");
    }
    if(keypressed == 72){
        newImg("captain_america_left_hand.png");
        console.log("h")
    }
    if(keypressed == 82){
        newImg("thor_right_hand.png");
        console.log("r");
    }
}