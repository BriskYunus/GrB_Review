import Team from './modules/DataObject.js';
// this is an IIFE => Immediately invoked function expression
// this is the JavaScript Module Pattern
(() => {
    console.log('fired!');
    
    let bioData = document.querySelector('.bio-wrapper').children;

    // populate the children with the data object values
    //bioData[0].textContent = Person.name;
    //bioData[1].textContent = Person.role;
    //bioData[2].textContent = Person.bio;

    //bioData[0].textContent = Person["name"];
    //bioData[1].textContent = Person["role"];
    //bioData[2].textContent = Person["bio"];

    function parsePersonData() {
        // this = this element you clicked on the (the button)
        let person = this.textContent;

        //populate the children with the data object values
        bioData[0].src = `images/${Team[person].avatar}`;
        bioData[1].textContent = Team[person].name;
        bioData[2].textContent = Team[person].role;
        bioData[3].textContent = Team[person].bio;
    }

    for (let person in Team) {
        console.log(person);

        let currentButton = document.createElement('button');
        
        currentButton.textContent = person;

        currentButton.addEventListener("click", parsePersonData);

        document.querySelector('.team').appendChild(currentButton);
    }

        //bioData.nextElementSibling.appendChild(currentButton);
        
})();