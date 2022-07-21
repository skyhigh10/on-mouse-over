let letterAlphabet = document.getElementsByClassName("letter");
for(let i = 0; i < letterAlphabet.length; i++){
    document.getElementsByClassName("letter")[i].addEventListener("mouseenter", function(){
        document.getElementsByClassName("letter")[i].classList.add("color");
    });

    document.getElementsByClassName("letter")[i].addEventListener("mouseout", function(){
        document.getElementsByClassName("letter")[i].classList.remove("color");
    })
}