const btn =  document.querySelector(".search-btn");

btn.addEventListener("click", ()=>{
    alert("hello");
})


var faq = document.getElementsByClassName("question");

for(var i=0; i<faq.length ; i++){
    var button = faq[i];
    button.lastElementChild.addEventListener("click", e => {
        var plusButton = e.target;
        console.log(plusButton);
        showDescription = plusButton.parentElement.parentElement.lastElementChild;
        showDescription.style.visibility = "visible";
        showDescription.style.height = "60%";
        showDescription.style.padding = "2rem 1.5rem";
        plusButton.innerText = "x";
        plusButton.addEventListener("click", e => {
            var crossButton = e.target;
            closeDescription = crossButton.parentElement.parentElement.lastElementChild;
            closeDescription.style.visibility = "collapse";
            closeDescription.style.height = "0px";
            closeDescription.style.padding = "0rem 1.5rem";
            crossButton.innerText = "+";
        })
    })
}


var lang = document.getElementById("lang");
var dropButton = document.getElementById("language-btn");

var displayLangs = false;
const showLangs = ()=>{
    if(displayLangs == false) {

        lang.style.display = "block";
        displayLangs = true

    }
    else{
        lang.style.display = "none";
        displayLangs = false
    }
}

dropButton.addEventListener("click", showLangs)


// var closeDropdown = document.querySelector(".main");
// console.log(closeDropdown);
// closeDropdown.addEventListener("click", e => {
//     var expanded = document.getElementById("language-btn");
//     expanded.addEventListener("click", e => {
//         lang.style.visibility = "collapse";
//         lang.style.height = "0";
//     })
// })


