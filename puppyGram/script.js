// Change text
function uploadPup(element){
    console.log("wazzaaaa", element);
    element.innerText = "Uploaded! Thank you.";
}

// Remove something
function removeElement(element){
    console.log("trying to remove something ....wazaaaa");
    element.remove();
}

// On mouse over event (play)
function playVideo(element){
    console.log("wazaaa playing video");
    element.play();
}

// On mouse out event (pause)
function pawsVideo(element){
    element.pause();
}
// Change image
function changeImg(element){
    console.log("wazaaaa", element);
    element.src = "./resources/anothaPuppy.jpeg";
}

// Removing an element and using query selector (selecting changing html/css)
function cookieMonster(){
    console.log("cookie monsta!");
    var element = document.querySelector("#cookie-box");
    element.remove();
}


function incrementLike(id){
    console.log("liking!", id);
    var element = document.querySelector(id); //this line grabs the element from the html whose id is equal to the variable id
    // console.log("element looks like this", element);
    let likeCount = Number(element.innerText); //element.innerText is the like count inside the span element. We will convert that to a number and store it in a variable
    // console.log(likeCount);
    likeCount++; //increment the like count
    element.innerText = likeCount; //update teh element so that its innerText is the new like count
}
function alertMessageFromInput(){
    console.log("connected!!!");
    let searchInput = document.querySelector("#search");
    alert("You searched for " +  searchInput.value);
}