/*let button = document.querySelectorAll("button");
let redHeart = document.getElementById("red-heart");
document.body.addEventListener("click", event => {
    if (event == button[0]) {
        redHeart.src="images-thumbnail/image 4fullHeart.png";
    } else if (event == button[1]) {
        redHeart.src="images-thumbnail/Group 13outlineHeart.png";
    }
}) 
*/

//buttons to change thumbnail images
//option 1

let redHeart = document.getElementById("red-heart")

function option1() {
    redHeart.src ='images-thumbnail/image 4fullHeart.png';
}

function option2() {
    redHeart.src = 'images-thumbnail/Group 13outlineHeart.png';
}


//option 2

let bauhausHeart = document.getElementById("bauhaus-heart");

function option3() {
    bauhausHeart.src = 'images-thumbnail/Frame 10frameWithHeart.png';
}

function option4() {
    bauhausHeart.src = 'images-thumbnail/Group 14redFrameHeart.png';
}

//option 3

let rainbowHeart = document.getElementById("rainbow-heart");

function option5() {
    rainbowHeart.src = 'images-thumbnail/image 4rainbowHeart.png';
}

function option6() {
    rainbowHeart.src = "images-thumbnail/Frame 9pinkStripesHeart.png";
}
