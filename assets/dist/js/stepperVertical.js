const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const prev = document.getElementById('linkOne');
const next = document.getElementById('linkTwo');
const progressStepper = document.getElementById('progressStepper');
const shapeStepperVertical = document.querySelectorAll('.shapeStepperVertical');

var type = undefined;
var selectedStep = 1;

prev.addEventListener("click", (e) => {
    e.preventDefault();
    selectedStep -= 1;
    if (selectedStep == 1) {
        selectedStep = 1;
    }
    type = false;
    gettingMoving(selectedStep, type)
})
next.addEventListener("click", (e) => {
    e.preventDefault();
    selectedStep += 1;
    if (selectedStep > 5) {
        selectedStep = 5;
    }
    type = true;
    gettingMoving(selectedStep, type)
})

function gettingMoving(number, bool) {
    scrollId(bool, number)

    for (var [index, cricles] of shapeStepperVertical.entries()) {
        if (index < number && bool) {
            if (index == number) {
                continue;
            }
            cricles.classList.add('activeSteppes')
        } else if (index > number && !bool) {
            cricles.classList.remove('activeSteppes')
        }
    }

    var allActives = document.querySelectorAll('.activeSteppes');
    progressStepper.style.height = ((allActives.length - 1) / (shapeStepperVertical.length - 1) * 62 + "%")

    if (number == 0) {
        prevButton.disabled = true;
    } else if (number == shapeStepperVertical.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}

function scrollId(bool, number) {
    console.log(number)
    const ID = ['Introduction', 'Windows', 'Linux', 'MacOs', 'Android'];
    if (bool) {
        window.location.href = '#' + ID[number - 1]
    } else if (!bool) {
        window.location.href = '#' + ID[number - 2]
    }
}