const newArray = [];
function get(){
    // Fetch a new user multiple times and store them in an array.
    fetch('https://randomuser.me/api/')
      .then( response => response.json())
        .then(data => {
            newArray.push(data.results["0"])
            console.log(newArray);
        })
        // Used this to stop the array from repeating itself on the page
        document.getElementById("contacts").innerHTML = " ";

        // Then list out all the user in your address book array by name and picture.
        newArray.map(person => {
            console.log(person);
            let createLi = document.createElement("li");
            let contactList = document.getElementById("contacts");
            let image = document.createElement("img");
            image.src = person.picture.thumbnail;
            createLi.appendChild(image);
            createLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
            contactList.append(createLi);
        });
}

let multipleArray = [];
function allUsers() {
    fetch('https://randomuser.me/api/?results=5000')
    .then (response => response.json())
        console.log()
}



// Figure out how to fetch multiple users in one fetch requests
// Fetch multiple users on window load.
// Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth.