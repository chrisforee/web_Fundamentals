// console.log("wazaaa")
function uploadPup(element){
    console.log("wazaaa", element);
    element.innerText = "Uploaded! Thank you:";
}
function removeElement(element){
    console.log("Trying to remove something");
    element.remove();
}
function playVideo(element){
    console.log("wazaaa");
    element.play();
}
function pauseVideo(element){
    element.pause();
}
function changeImg(element){
    console.log("wazaaa", element);
    element.src = "./resources/anothaPuppy.jpeg";

}
function cookieMonster(){
    console.log("cookie moster", element);
    var element = document.querySelector("#cookie-box")
    element.remove();
}