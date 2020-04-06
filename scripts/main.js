let image1 = 'images/card-game-167051_960_720.jpg';
let image2 = 'images/allCards.png'

const helloCon = 'Hello';
const nameCon = 'name';

let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem(nameCon, myName);
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `${helloCon} ${myName}`;
      }
}

if(!localStorage.getItem(nameCon)) {
    setUserName();
} else {
    let storedName = localStorage.getItem(nameCon);
    myHeading.textContent = `${helloCon} ${storedName}`;
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
}

let myImage = document.querySelector('img');
myImage.setAttribute ('src',image1);

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === image1) {
      myImage.setAttribute ('src',image2);
    } else {
      myImage.setAttribute ('src',image1);
    }
}
