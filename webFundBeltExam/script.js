// Change image
function changeImg(element){
    console.log("success", element);
    element.src = "./images2/assets/succulents-2.jpg";
}
// Change image
function changeImgBack(element){
    console.log("success", element);
    element.src = "./images2/assets/succulents-1.jpg";
}
// Removing an element and using query selector (selecting changing html/css)
function cookieMonster(){
    console.log("cookie monsta!");
    var element = document.querySelector("#cookie-box");
    element.remove();
}