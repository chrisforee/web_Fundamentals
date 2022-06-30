console.log("page loaded...");
// Remove something
function removeElement(element){
    console.log("remove success");
    element.remove();
}
// Removing an element and using query selector (selecting changing html/css)
function cookieMonster(){
    console.log("cookie monsta!");
    var element = document.querySelector(".card-list-item");
    element.remove();
}
// Change text
function changeName(element){
    console.log("change success", element);
    element.innerText = "Seymour Butts";
}