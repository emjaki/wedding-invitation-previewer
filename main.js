

//change thumbnail images on button click

function option(prm) {
    let optionOne = document.getElementById("option-1");
    let optionTwo = document.getElementById("option-2");
    let optionThree = document.getElementById("option-3");
    let optionFour = document.getElementById("option-4");
    let optionFive = document.getElementById("option-5");
    let optionSix = document.getElementById("option-6");

    if (prm == 'option-1') {
        optionOne.style.display = "block";
        optionOne.style.marginLeft = "auto";
        optionOne.style.marginRight = "auto";
        optionTwo.style.display = "none";
    }

    if (prm == 'option-2') {
        optionOne.style.display = "none";
        optionTwo.style.display = "block";
        optionTwo.style.marginLeft = "auto";
        optionTwo.style.marginRight = "auto";
    }

    if (prm == 'option-3') {
        optionThree.style.display = "block";
        optionThree.style.marginLeft = "auto";
        optionThree.style.marginRight = "auto";
        optionFour.style.display = "none";
    }

    if (prm == 'option-4') {
        optionThree.style.display = "none";
        optionFour.style.display = "block";
        optionFour.style.marginLeft = "auto";
        optionFour.style.marginRight = "auto";
    }

    if (prm == 'option-5') {
        optionFive.style.display = "block";
        optionFive.style.marginLeft = "auto";
        optionFive.style.marginRight = "auto";
        optionSix.style.display = "none";
    }

    if (prm == 'option-6') {
        optionFive.style.display = "none";
        optionSix.style.display = "block";
        optionSix.style.marginLeft = "auto";
        optionSix.style.marginRight = "auto";
    }
}

//change preview image when thumbnail image clicked

function showPreview(prm) {

    let previewWrapper = document.getElementById('preview-wrapper');

    if (prm == 'option-1') {
        previewWrapper.classList.add('invite-option-1');

        previewWrapper.classList.remove('invite-option-2');
        previewWrapper.classList.remove('invite-option-3');
        previewWrapper.classList.remove('invite-option-4');
        previewWrapper.classList.remove('invite-option-5');
        previewWrapper.classList.remove('invite-option-6');
    } 

    if (prm == 'option-2') {
        previewWrapper.classList.add('invite-option-2');

        previewWrapper.classList.remove('invite-option-1');
        previewWrapper.classList.remove('invite-option-3');
        previewWrapper.classList.remove('invite-option-4');
        previewWrapper.classList.remove('invite-option-5');
        previewWrapper.classList.remove('invite-option-6');
    } 

    if (prm == 'option-3') {
        previewWrapper.classList.add('invite-option-3');

        previewWrapper.classList.remove('invite-option-1');
        previewWrapper.classList.remove('invite-option-2');
        previewWrapper.classList.remove('invite-option-4');
        previewWrapper.classList.remove('invite-option-5');
        previewWrapper.classList.remove('invite-option-6');  
    } 

    if (prm == 'option-4') {
        previewWrapper.classList.add('invite-option-4');

        previewWrapper.classList.remove('invite-option-1');
        previewWrapper.classList.remove('invite-option-2');
        previewWrapper.classList.remove('invite-option-3');
        previewWrapper.classList.remove('invite-option-5');
        previewWrapper.classList.remove('invite-option-6');
    } 

    if (prm == 'option-5') {
        previewWrapper.classList.add('invite-option-5');

        previewWrapper.classList.remove('invite-option-1');
        previewWrapper.classList.remove('invite-option-2');
        previewWrapper.classList.remove('invite-option-3');
        previewWrapper.classList.remove('invite-option-4');
        previewWrapper.classList.remove('invite-option-6');
    } 

    if (prm == 'option-6') {
        previewWrapper.classList.add('invite-option-6');

        previewWrapper.classList.remove('invite-option-1');
        previewWrapper.classList.remove('invite-option-2');
        previewWrapper.classList.remove('invite-option-3');
        previewWrapper.classList.remove('invite-option-4');
        previewWrapper.classList.remove('invite-option-5');
    }
}

//change font and text layout for simple heart design (option 1 and 2)

const designOneFonts = document.querySelector('#design-1');

designOneFonts.addEventListener('click', simpleHeart, false);

function simpleHeart(e) {
if (e.target !== e.currentTarget) {
    clickedItem = e.target.id;
} if (clickedItem == 'option-1' || 'option-2') {

    let textBlock1 = document.getElementById('text-block-1');
    let textBlock2 = document.getElementById('text-block-2');
    let textBlock3 = document.getElementById('text-block-3');
    let textBlock4 = document.getElementById('text-block-4');
    let textBlock5 = document.getElementById('text-block-5');
    let textBlock6 = document.getElementById('text-block-6');
/*
    textBlock1.classList.add('design-1-text');
    textBlock2.classList.add('design-1-text');
    textBlock3.classList.add('design-1-text');
    textBlock4.classList.add('design-1-text');
    textBlock5.classList.add('design-1-text');
    textBlock6.classList.add('design-1-text');

    textBlock1.classList.remove('design-2-text');
    textBlock2.classList.remove('design-2-text');
    textBlock3.classList.remove('design-2-text');
    textBlock4.classList.remove('design-2-text');
    textBlock5.classList.remove('design-2-text');
    textBlock6.classList.remove('design-2-text');

    textBlock1.style.display = 'block';
    textBlock2.style.display = 'block';
    textBlock3.style.display = 'block';
    textBlock4.style.display = 'block';
    textBlock5.style.display = 'block';
    textBlock6.style.display = 'block';

*/
        textBlock1.style.margin = '3.1rem 7.5rem 0 5.6rem';
        textBlock1.style.fontSize = '1.5rem';
        textBlock1.style.textAlign = 'left';

        textBlock2.style.margin = '.1rem 8.43rem 0 5.6rem';
        textBlock2.style.fontSize = '.9rem';

        textBlock3.style.margin = '.1rem 8.43rem 0 5.6rem';
        textBlock3.style.textAlign = 'left';

        textBlock4.style.margin = '.1rem 8.43rem 0 5.6rem';
        textBlock4.style.textAlign = 'left';

        textBlock5.style.margin = '.1rem 8.43rem 0 5.6rem';
        textBlock5.style.fontSize = '.9rem';
        textBlock5.style.textAlign = 'left';
        

        textBlock6.style.margin = '0 0 0 9.3rem';
        textBlock6.style.textAlign = 'right';
        textBlock6.style.position = 'absolute';
        textBlock6.style.right = '5.6rem';
        textBlock6.style.bottom = '3.5rem'
        textBlock6.style.fontSize = '.9rem';
    }
    e.stopPropagation();
}


//change font and text for bauhaus heart design (options 3 and 4)

const designTwoFonts = document.querySelector('#design-2');

designTwoFonts.addEventListener('click', bauhausHeart, false);

function bauhausHeart(e) {
if (e.target !== e.currentTarget) {
    clickedItem = e.target.id;
} if (clickedItem == 'option-3' || 'option-4') {

    let textBlock1 = document.getElementById('text-block-1');
    let textBlock2 = document.getElementById('text-block-2');
    let textBlock3 = document.getElementById('text-block-3');
    let textBlock4 = document.getElementById('text-block-4');
    let textBlock5 = document.getElementById('text-block-5');
    let textBlock6 = document.getElementById('text-block-6');

    /*

    textBlock1.classList.add('design-2-text');
    textBlock2.classList.add('design-2-text');
    textBlock3.classList.add('design-2-text');
    textBlock4.classList.add('design-2-text');
    textBlock5.classList.add('design-2-text');
    textBlock6.classList.add('design-2-text');

    textBlock1.classList.remove('design-1-text');
    textBlock2.classList.remove('design-1-text');
    textBlock3.classList.remove('design-1-text');
    textBlock4.classList.remove('design-1-text');
    textBlock5.classList.remove('design-1-text');
    textBlock6.classList.remove('design-1-text');
    
    textBlock1.style.display = 'block';
    textBlock2.style.display = 'block';
    textBlock3.style.display = 'block';
    textBlock4.style.display = 'block';
    textBlock5.style.display = 'block';
    textBlock6.style.display = 'block';

    */

        textBlock1.style.margin = '5.4rem 7.5rem 0 8.43rem';
        textBlock1.style.fontSize = '1.25rem';

        textBlock2.style.margin = '.4rem 7.5rem 0 8.43rem';
        textBlock2.style.fontSize = '.7rem';
        textBlock2.style.fontStyle = 'italic';

        textBlock3.style.margin = '.4rem 7.5rem 0 8.43rem';
        textBlock3.style.textAlign = 'left';

        textBlock4.style.margin = '.4rem 7.5rem 0 8.43rem';
        textBlock4.style.textAlign = 'left';

        textBlock5.style.margin = '.4rem 7.5rem 0 8.43rem';
        textBlock5.style.fontSize = '.7rem';
        textBlock5.style.fontStyle = 'italic';
        textBlock4.style.textAlign = 'left';
        

        textBlock6.style.margin = '.4rem 7.5rem 0 8.43rem';
        textBlock6.style.textAlign = 'left';
        textBlock6.style.position = 'initial';
        textBlock6.style.fontSize = '.6rem';
        textBlock6.style.fontStyle = 'italic';
    }
    e.stopPropagation();
}

//change font and text for rainbow heart design (options 5 and 6)

const designThreeFonts = document.querySelector('#design-3');

designThreeFonts.addEventListener('click', rainbowHeart, false);

function rainbowHeart(e) {
if (e.target !== e.currentTarget) {
    clickedItem = e.target.id;
} if (clickedItem == 'option-5' || 'option-6') {

    let textBlock1 = document.getElementById('text-block-1');
    let textBlock2 = document.getElementById('text-block-2');
    let textBlock3 = document.getElementById('text-block-3');
    let textBlock4 = document.getElementById('text-block-4');
    let textBlock5 = document.getElementById('text-block-5');
    let textBlock6 = document.getElementById('text-block-6');

        textBlock1.style.margin = '2.3rem 5.5rem 0 5.5rem';
        textBlock1.style.fontSize = '1.2rem';

        textBlock2.style.margin = '0 5.5rem 0 5.5rem';
        textBlock2.style.fontSize = '.9rem';
        textBlock2.style.fontStyle = 'normal';
        textBlock2.style.textAlign = 'left';
        textBlock2.style.lineHeight = '1.35rem';

        textBlock3.style.margin = '7.8rem 9rem 0 9rem';
        textBlock3.style.fontSize = '1rem';
        textBlock3.style.textAlign = 'center';

        textBlock4.style.margin = '0.2rem 7.5rem 0 7.5rem';
        textBlock4.style.fontSize = '1rem';
        textBlock4.style.textAlign = 'center';

        textBlock5.style.margin = '0 8rem 0 8rem';
        textBlock5.style.fontSize = '.8rem';
        textBlock5.style.fontStyle = 'regular';
        textBlock5.style.textAlign = 'center';

        textBlock6.style.margin = '0.2rem 8rem 0 8rem';
        textBlock6.style.textAlign = 'center';
        textBlock6.style.position = 'initial';
        textBlock6.style.fontSize = '.6rem';
    }
    e.stopPropagation();
}

//form

/*
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
