document.addEventListener('DOMContentLoaded', () =>{


const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phraseUL = phrase.querySelector('ul');
let overlay = document.getElementById('overlay');
let startButton = overlay.querySelector('.btn__reset');
let classShow = document.getElementsByClassName('letter show');
let classLetter = document.getElementsByClassName('letter');
let winLose = overlay.querySelector('.winLose');


let missed = [0];





const phrases = [
    'tacos are from mexico',
    'do not give up',
    'life is complicated',
    'avocado toast',
    'the crazy cow',
    'we are the champions'
];


// **************************Event listener to hide the overlay after clicking start buttn 


startButton.addEventListener('click', () => {

    overlay.style.display = 'none';

});


///////// **********************function to get random phrase from array 

function getRandomPhraseAsArray(arr){

    let returnArr = arr[Math.floor(Math.random() * arr.length)];
    let splitArr = returnArr.split("");
    return splitArr;
}

let returnPhrases = getRandomPhraseAsArray(phrases);


///////////////// ******* adds phrase to display

function addPhraseToDisplay(arr){

    for (let i = 0; i < arr.length; i ++){

        let displayLetters = document.createElement('li');
        displayLetters.textContent = arr[i];
        phraseUL.appendChild(displayLetters);

                if ( displayLetters.innerText !== '' ) {
                      displayLetters.classList.add('letter');
                } else {
                      displayLetters.classList.add('space');
                }
    }
  };

  let displayPhrases = addPhraseToDisplay(returnPhrases);


//////////////////////// checkletter function

function checkletter (buttonClick){
    let match = null;

        for (let i=0; i < classLetter.length; i+=1){

            if( buttonClick === classLetter[i].textContent){
                classLetter[i].classList.add('show');
                match = true;
                classLetter[i].style.transition = "ease 0.5s";
                classLetter[i].style.transform = "rotate(360deg)";
            }
        }
        return match;
}

////////////////event listener to keyboard on screen

qwerty.addEventListener('click', (event) =>{

        if( event.target.nodeName === 'BUTTON'){
            event.target.classList.add('chosen');
            event.target.setAttribute('disabled', true);

            letterButtonOnClick = event.target.textContent;
            let callFunction = checkletter(letterButtonOnClick);
            let letterFound = callFunction;

              
                if ( letterFound === null ){

                    let oldHeart = document.querySelector("img[src='images/liveHeart.png']");
                    let newHeart= document.createElement('img');
                    newHeart.setAttribute('src','images/lostHeart.png');
                    newHeart.setAttribute('height','35px');
                    newHeart.setAttribute('width','35px');
                    oldHeart.replaceWith(newHeart);
            
                    missed ++;
                }
    }
   checkwin();

});


/// checkwin function 

function checkwin(){

    let lettersLength = classLetter.length;
    let classShowLength = classShow.length;
  
    
    if (lettersLength === classShowLength){

        overlay.className = "win";
        overlay.style.display = 'flex';
        winLose.style.display = "flex";
        winLose.textContent = "you won";
        overlay.style.zIndex = "2";

        

     } else if(missed === 5){
         overlay.className = "lose";
         overlay.style.zIndex = "2";
         overlay.style.display = 'flex';
         winLose.style.display = "flex";
         winLose.textContent = "Sorry, you lose!";
         tryAgain();
        }   
 }





















}); // closing add event listener global scope