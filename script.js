// var btn = document.getElementById("evntBtn");
// var hideTxt,showTxt;
// hideTxt = function(){
//     inp.style.display= "none";
    

// }
// btn.addEventListener("click",hideTxt);
// showTxt = function(){
//     inp.style.display ="" ;
    

// }

// btn.addEventListener("click",showTxt);
var btn = document.getElementById("evntBtn");
function hideTxt() {
    var inp = document.getElementById("txt");
    if (inp.style.display === "none") {
      inp.style.display = "block";
    } else {
        btn.innerText="show"
      inp.style.display = "none";
    }
}
    btn.addEventListener("click",hideTxt);