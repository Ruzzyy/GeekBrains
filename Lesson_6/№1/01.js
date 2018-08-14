let bigImage = document.createElement("img")
imgBig.appendChild(bigImage);
bigImage.setAttribute("src", "img/4.jpg");
bigImage.style.height = "500px";
bigImage.style.display = "block";
bigImage.style.margin = "auto";
bigImage.style.marginTop = "100px";
let imgName = {
    img1: "img/1.jpg",
    img2: "img/2.jpg",
    img3: "img/3.jpg"
};
function checkForError(scr) {
    let answer;
    for (let i in imgName) {
        if (imgName[i] == scr) {
            return true;
            break;
        } else {
            answer = false;
        }
    }
    return answer;
}

function sliderImgBig(src) {
    if (checkForError(src)) {
        document.getElementById("imgBig").children[0].removeAttribute("scr");
        bigImage.setAttribute("src", src);
    } else {
        document.getElementById("imgBig").children[0].removeAttribute("scr")
        bigImage.setAttribute("src", "img/5.png");
    }
}