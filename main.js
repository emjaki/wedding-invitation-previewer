

//

function option(prm) {
    let optionOne = document.getElementById("option-1");
    let optionTwo = document.getElementById("option-2");
    let optionThree = document.getElementById("option-3");
    let optionFour = document.getElementById("option-4");
    let optionFive = document.getElementById("option-5");
    let optionSix = document.getElementById("option-6");

    if (prm == 'option-1') {
        optionOne.style.display = "block";
        optionTwo.style.display = "none";
    }

    if (prm == 'option-2') {
        optionOne.style.display = "none";
        optionTwo.style.display = "block";
    }

    if (prm == 'option-3') {
        optionThree.style.display = "block";
        optionFour.style.display = "none";
    }

    if (prm == 'option-4') {
        optionThree.style.display = "none";
        optionFour.style.display = "block";
    }

    if (prm == 'option-5') {
        optionFive.style.display = "block";
        optionSix.style.display = "none";
    }

    if (prm == 'option-6') {
        optionFive.style.display = "none";
        optionSix.style.display = "block";
    }
}

/*function option1() {
    let optionOne = document.getElementById("option-1");
    optionOne.src = "images-thumbnail/image 4fullHeart.png";
}

function option2() {
    let optionOne = document.getElementById("option-1");
    optionOne.src = "images-thumbnail/Group 13outlineHeart.png";
}


//option 2
function option3() {
    let bauhausHeart = document.getElementById("option-3");
    bauhausHeart.src = 'images-thumbnail/Frame 10frameWithHeart.png';
}

function option4() {
    let bauhausHeart = document.getElementById("option-3");
    bauhausHeart.src = 'images-thumbnail/Group 14redFrameHeart.png';
}

//option 3

function option5() {
    let rainbowHeart = document.getElementById("option-5");
    rainbowHeart.src = 'images-thumbnail/rainbowHeart-thumbnail-1.png';
}

function option6() {
    let rainbowHeart = document.getElementById("option-5");
    rainbowHeart.src = "images-thumbnail/Frame 9pinkStripesHeart.png";
}

//change background of preview image

/*
document.getElementsByTagName('a').addEventListener('click', function() { 

        for (let elem of document.body.children) {
            if (elem.matches('a[id="option-1"]')) {
                document.getElementById('preview-wrapper').style.backgroundImage = 'url ("images-main/Frame 1fullHeart.png")';
            } else if (elem.matches('a[id="option-2"]')) {
                document.getElementById('preview-wrapper').style.backgroundImage = 'url ("images-main/Group 12outlineHeart.png")'};
}
});
*/

function showPreview(prm) {
    if (prm == 'option-1') 
    {
        document.getElementById('preview-wrapper').classList.add('invite-option-1');

        document.getElementById('preview-wrapper').classList.remove('invite-option-2');
        document.getElementById('preview-wrapper').classList.remove('invite-option-3');
        document.getElementById('preview-wrapper').classList.remove('invite-option-4');
        document.getElementById('preview-wrapper').classList.remove('invite-option-5');
        document.getElementById('preview-wrapper').classList.remove('invite-option-6');
    } 

    if (prm == 'option-2') {
        document.getElementById('preview-wrapper').classList.add('invite-option-2');

        document.getElementById('preview-wrapper').classList.remove('invite-option-1');
        document.getElementById('preview-wrapper').classList.remove('invite-option-3');
        document.getElementById('preview-wrapper').classList.remove('invite-option-4');
        document.getElementById('preview-wrapper').classList.remove('invite-option-5');
        document.getElementById('preview-wrapper').classList.remove('invite-option-6');
    } 

    if (prm == 'option-3') {
        document.getElementById('preview-wrapper').classList.add('invite-option-3');

        document.getElementById('preview-wrapper').classList.remove('invite-option-1');
        document.getElementById('preview-wrapper').classList.remove('invite-option-2');
        document.getElementById('preview-wrapper').classList.remove('invite-option-4');
        document.getElementById('preview-wrapper').classList.remove('invite-option-5');
        document.getElementById('preview-wrapper').classList.remove('invite-option-6');
    } 

    if (prm == 'option-4') {
        document.getElementById('preview-wrapper').classList.add('invite-option-4');

        document.getElementById('preview-wrapper').classList.remove('invite-option-1');
        document.getElementById('preview-wrapper').classList.remove('invite-option-2');
        document.getElementById('preview-wrapper').classList.remove('invite-option-3');
        document.getElementById('preview-wrapper').classList.remove('invite-option-5');
        document.getElementById('preview-wrapper').classList.remove('invite-option-6');
    } 

    if (prm == 'option-5') {
        document.getElementById('preview-wrapper').classList.add('invite-option-5');

        document.getElementById('preview-wrapper').classList.remove('invite-option-1');
        document.getElementById('preview-wrapper').classList.remove('invite-option-2');
        document.getElementById('preview-wrapper').classList.remove('invite-option-3');
        document.getElementById('preview-wrapper').classList.remove('invite-option-4');
        document.getElementById('preview-wrapper').classList.remove('invite-option-6');
    } 

    if (prm == 'option-6') {
        document.getElementById('preview-wrapper').classList.add('invite-option-6');

        document.getElementById('preview-wrapper').classList.remove('invite-option-1');
        document.getElementById('preview-wrapper').classList.remove('invite-option-2');
        document.getElementById('preview-wrapper').classList.remove('invite-option-3');
        document.getElementById('preview-wrapper').classList.remove('invite-option-4');
        document.getElementById('preview-wrapper').classList.remove('invite-option-5');
    }
}

/*
function showPreview1and2(prm) {
    if (prm == 'option-1') {
    document.getElementById('preview-wrapper').classList.add('invite-option-1');

    document.getElementById('preview-wrapper').classList.remove('invite-option-2');
    document.getElementById('preview-wrapper').classList.remove('invite-option-3');
    document.getElementById('preview-wrapper').classList.remove('invite-option-4');
    document.getElementById('preview-wrapper').classList.remove('invite-option-5');
    document.getElementById('preview-wrapper').classList.remove('invite-option-6');
} 
    else {
    document.getElementById('preview-wrapper').classList.add('invite-option-2');
    document.getElementById('preview-wrapper').classList.remove('invite-option-1');
    }
}


function showPreview3and4(prm) {
    if (prm == 'option-3') {
        document.getElementById('preview-wrapper').classList.add('invite-option-3');

        document.getElementById('preview-wrapper').classList.remove('invite-option-1');
        document.getElementById('preview-wrapper').classList.remove('invite-option-2');
        document.getElementById('preview-wrapper').classList.remove('invite-option-4');
        document.getElementById('preview-wrapper').classList.remove('invite-option-5');
        document.getElementById('preview-wrapper').classList.remove('invite-option-6');
    } 
        else {
        document.getElementById('preview-wrapper').classList.add('invite-option-4');
        }
    }

function showPreview5and6(prm) {
    if (prm == 'option-5') {
        document.getElementById('preview-wrapper').classList.add('invite-option-5');

        document.getElementById('preview-wrapper').classList.remove('invite-option-1');
        document.getElementById('preview-wrapper').classList.remove('invite-option-2');
        document.getElementById('preview-wrapper').classList.remove('invite-option-3');
        document.getElementById('preview-wrapper').classList.remove('invite-option-4');
        document.getElementById('preview-wrapper').classList.remove('invite-option-6');
    } 
        else {
        document.getElementById('preview-wrapper').classList.add('invite-option-6');
        }
    }*/

/*
function showPreviewOp3() {
    document.getElementById('preview-wrapper').classList.add('invite-option-3');
    document.getElementById('preview-wrapper').classList.remove('invite-option-1');
    document.getElementById('preview-wrapper').classList.remove('invite-option-5');
}

function showPreviewOp5() {
    document.getElementById('preview-wrapper').classList.add('invite-option-5');
    document.getElementById('preview-wrapper').classList.remove('invite-option-1');
    document.getElementById('preview-wrapper').classList.remove('invite-option-3');
}
*/

    /*
    else if (prm == 'option-3') {
        document.getElementById('preview-wrapper').classList.add('invite-option-3');
        document.getElementById('preview-wrapper').classList.remove('invite-option-1');
        document.getElementById('preview-wrapper').classList.remove('invite-option-5');
    }
    
    else if (prm == 'option-5') {
        document.getElementById('preview-wrapper').classList.add('invite-option-5');
        document.getElementById('preview-wrapper').classList.remove('invite-option-1');
        document.getElementById('preview-wrapper').classList.remove('invite-option-3');
    }
}

anchor[0].addEventListener('click', showPreview('option-1'));
anchor[1].addEventListener('click', showPreview('option-3'));
anchor[2].addEventListener('click', showPreview('option-5'));
/*
//form

function livePrintForm(input, output) {
    document.getElementById(input).onkeyup = function() {
        document.getElementById(output).textContent = this.value;
    };
}

        livePrintForm('namep1', 'name-1-output');
        livePrintForm('namep2', 'name-2-output');
        livePrintForm('date-time', 'event-time-output');
        livePrintForm('location', 'location-output');
        livePrintForm('reception', 'reception-output');
        livePrintForm('rsvp', 'rsvp-output');
*/
function livePrintP1() {
    let nameP1 = document.getElementById('nameP1').value;
    let name1Output = document.getElementById('name-1-output');
    return name1Output.textContent = `${nameP1}`;
}

function livePrintP2() {
    let nameP2 = document.getElementById('nameP2').value;

    let name2Output = document.getElementById('name-2-output');
    return name2Output.textContent = `${nameP2}`;
}

function livePrintTime() {
    let time = document.getElementById('time').value;
    let timeOutput = document.getElementById('time-output');
    return timeOutput.textContent = `${time}`;
}

function livePrintDate() {
    let date = document.getElementById('date').value;
    let dateOutput = document.getElementById('date-output');
    return dateOutput.textContent = `${date}`;
}

function livePrintLocation() {
    let location = document.getElementById('location').value;

    let locationOutput = document.getElementById('location-output');
    return locationOutput.textContent = `${location}`;
}

function livePrintReception() {
    let reception = document.getElementById('reception').value;

    let receptionOutput = document.getElementById('reception-output');
    return receptionOutput.textContent = `${reception}`;
}

function livePrintRsvp() {
    let rsvp = document.getElementById('rsvp').value;

    let rsvpOutput = document.getElementById('rsvp-output');
    return rsvpOutput.textContent = `${rsvp}`;
}


