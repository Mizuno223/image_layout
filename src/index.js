document.addEventListener('DOMContentLoaded',function(){
    new SmartPhoto(".js-smartphoto");
});

const elements = document.getElementsByClassName("js-photo-gallery");
const elementsArray = Array.from(elements);
// NOTE: index とれる
elementsArray.forEach((elem) => {
  var numberOfImages = elem.childElementCount;

  if (numberOfImages >= 6) {
    var li = elem.getElementsByTagName("li");
    setOverlayPosition (elem, li);
    displayOverflowNumbers (elem, li);
    numberOfImages = "more";

    liArray = Array.from(li);
    liArray.forEach((v, i) => {
        if (i >= 5) {
            v.classList.add("hide");
        }
    });
  }

  var shape = getElementByImgTag(elem);
  elem.classList.add(`layout-${numberOfImages}-${shape}`);
  console.log(elem);
});

function displayOverflowNumbers (elem, li) {
    var numberTextElement = document.createElement("p");
    var numberContent = document.createTextNode("+" + (li.length - 4));
    numberTextElement.appendChild(numberContent);
    numberTextElement.classList.add("more");

    var parentDiv = elem.getElementsByClassName("overlay");
    parentDiv[0].appendChild(numberTextElement);
}

function setOverlayPosition (elem, li) {
    li[4].classList.add("position");
    var newElement = document.createElement("div");
    newElement.classList.add("overlay");
    var parentLi = li[4];
    parentLi.insertBefore(newElement, parentLi.firstChild);
}

function getElementByImgTag (elem) {
    const imgs = elem.getElementsByTagName("img");
    if (imgs[0].width > imgs[0].height) {
      return shape = "horizontal";
    } else if (imgs[0].width < imgs[0].height) {
      return shape = "vertical";
    } else {
      return shape = "square";
    }
}

function marginSize(size) {
    const $ = (el) => document.querySelector(el);
    $(":root").style.setProperty("--margin-size", size);
}
marginSize("2px");