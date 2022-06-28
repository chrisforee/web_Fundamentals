function incrementLike(id){
    console.log("liking!", id);
    var element = document.querySelector(id); //this line grabs the element from the html whose id is equal to the variable id
    // console.log("element looks like this", element);
    let likeCount = Number(element.innerText); //element.innerText is the like count inside the span element. We will convert that to a number and store it in a variable
    // console.log(likeCount);
    likeCount++; //increment the like count
    element.innerText = likeCount; //update teh element so that its innerText is the new like count
}
