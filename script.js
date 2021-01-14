//Changing variables
let selectedImg = "";
let imgArray = [];
//__________________
//DOM variables
var modal = document.getElementById("myModal");
var img = document.getElementById("img0");
var span = document.getElementsByClassName("close")[0];
let imgs = document.querySelectorAll('.smallImg');
let arrowBack = document.getElementById("arrowBack");
//__________________
//create img array from smallImg div Ids
for (i of imgs){
    let imgId = i.id;
    imgArray.push(imgId);
}
console.log(imgArray);


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Modal selector
for (i of imgs) {
  i.addEventListener('click', function() {
    modal.style.display = "block";
    let imgId = this.id;
    selectedImg = imgId;
    document.getElementById("modalImg").style.backgroundImage = "url('assets/"+imgId+".jpg')";
    console.log(selectedImg);
  });
}

//Modal arrows back
document.getElementById("arrowBack").addEventListener("click", function() {
    let prevImg = "";
    let arrLen = imgArray.length;
    let arrIdx = imgArray.indexOf(selectedImg);

    if (arrIdx != 0){
        prevImg = imgArray[arrIdx-1];
    }
    else{
        prevImg = selectedImg
    }
    selectedImg = prevImg;
    document.getElementById("modalImg").style.backgroundImage = "url('assets/"+prevImg+".jpg')";

  }); 
  
//Modal arrows next
document.getElementById("arrowNext").addEventListener("click", function() {
    let nextImg = "";
    let arrLen = imgArray.length;
    let arrIdx = imgArray.indexOf(selectedImg);

    if (arrIdx != arrLen-1){
        nextImg = imgArray[arrIdx+1];
    }
    else{
        nextImg = selectedImg
    }
    selectedImg = nextImg;
    document.getElementById("modalImg").style.backgroundImage = "url('assets/"+nextImg+".jpg')";

  }); 