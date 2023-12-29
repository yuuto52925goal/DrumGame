for(let i = 0; i< document.querySelectorAll(".drum").length;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var whichSound = this.innerHTML;
        pressKeySound(whichSound);
        animationFun(whichSound);
    })
}
 document.addEventListener("keypress",function(event){
        pressKeySound(event.key);
        animationFun(event.key);
 })

 const pressKeySound = function(key){
    switch(key){
        case "a":
            let audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case "w":
            let audio2 = new Audio("sounds/tom-1.mp3");
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio("sounds/tom-4.mp3")
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio("sounds/kick-bass.mp3");
            audio7.play();
            break;
        default:
            console.log(key)
}}
const animationFun = function(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100)
}