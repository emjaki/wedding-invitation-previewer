//change colourway for each design

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
    let insertBr = document.getElementById('date-output');
    let textBlock4 = document.getElementById('text-block-4');
    let textBlock5 = document.getElementById('text-block-5');
    let textBlock6 = document.getElementById('text-block-6');

        textBlock1.style.margin = '3.1rem 7.5rem 0 5.6rem';
        textBlock1.style.fontSize = '1.5rem';
        textBlock1.style.textAlign = 'left';

        textBlock2.style.margin = '.1rem 8.43rem 0 5.6rem';
        textBlock2.style.fontSize = '.9rem';
        textBlock2.style.lineHeight = '1.1rem'

        textBlock3.style.margin = '.1rem 8.43rem 0 5.6rem';
        textBlock3.style.textAlign = 'left';

        insertBr.style.display = 'inline';

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
    let insertBr = document.getElementById('date-output');
    let textBlock4 = document.getElementById('text-block-4');
    let textBlock5 = document.getElementById('text-block-5');
    let textBlock6 = document.getElementById('text-block-6');

        textBlock1.style.margin = '5.5rem 7.5rem 0 8.43rem';
        textBlock1.style.fontSize = '1.25rem';

        textBlock2.style.margin = '.5rem 7.5rem 0 8.43rem';
        textBlock2.style.fontSize = '.7rem';
        textBlock2.style.fontStyle = 'normal';
        textBlock2.style.lineHeight = '.85rem';

        textBlock3.style.margin = '.4rem 8.5rem 0 8.43rem';
        textBlock3.style.textAlign = 'left';

        insertBr.style.display = 'block';

        textBlock4.style.margin = '.4rem 7.5rem 0 8.43rem';
        textBlock4.style.textAlign = 'left';

        textBlock5.style.margin = '.4rem 7.5rem 0 8.43rem';
        textBlock5.style.fontSize = '.7rem';
        textBlock5.style.fontStyle = 'normal';
        textBlock5.style.textAlign = 'left';

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
    let insertBr = document.getElementById('date-output');
    let textBlock4 = document.getElementById('text-block-4');
    let textBlock5 = document.getElementById('text-block-5');
    let textBlock6 = document.getElementById('text-block-6');

        textBlock1.style.margin = '2.25rem 5.5rem 0 5.5rem';
        textBlock1.style.fontSize = '1.2rem';

        textBlock2.style.margin = '.05rem 5.5rem 0 5.5rem';
        textBlock2.style.fontSize = '.9rem';
        textBlock2.style.fontStyle = 'normal';
        textBlock2.style.textAlign = 'left';
        textBlock2.style.lineHeight = '1.35rem';

        textBlock3.style.margin = '7.8rem 7rem 0 7rem';
        textBlock3.style.fontSize = '1rem';
        textBlock3.style.textAlign = 'center';

        insertBr.style.display = 'inline';

        textBlock4.style.margin = '0.2rem 7.5rem 0 7.5rem';
        textBlock4.style.fontSize = '1rem';
        textBlock4.style.textAlign = 'center';

        textBlock5.style.margin = '0 8rem 0 8rem';
        textBlock5.style.fontSize = '.8rem';
        textBlock5.style.fontStyle = 'regular';
        textBlock5.style.textAlign = 'center';

        textBlock6.style.margin = '0.2rem 8.2rem 0 8.2rem';
        textBlock6.style.textAlign = 'center';
        textBlock6.style.position = 'initial';
        textBlock6.style.fontSize = '.6rem';
    }
    e.stopPropagation();
}

//live print

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

//form notifications

const exportDesign = document.getElementById('export-btn');
const nameP1 = document.getElementById('nameP1');
const nameP2 = document.getElementById('nameP2');
const date = document.getElementById('date');
const time = document.getElementById('time');
const location = document.getElementById('location');
const reception = document.getElementById('reception');
const rsvp = document.getElementById('rsvp');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nameP1Value = nameP1.value.trim();
    const nameP2Value = nameP2.value.trim();
    const dateValue = date.value.trim();
    const timeValue = time.value.trim();
    const locationValue = location.value.trim();
    const receptionValue = reception.value.trim();
    const rsvpValue = rsvp.value.trim();

    if (nameP1Value == "" /*|| nameP1Value.length > 22*/) {
        //show error
        //add error class
        setErrorFor(nameP1, 'Please fill in this field (1-22 characters)');
    } else {
        setSuccessFor(nameP1);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelecter('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
      