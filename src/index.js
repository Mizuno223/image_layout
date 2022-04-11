function run () {
  const elements = document.getElementsByClassName("js-photo-gallery");
  const elementsArray = Array.from(elements);
  elementsArray.forEach((elem) => {
    const shape = getImageShape(elem);
    var numberOfImages = elem.childElementCount;

    if (numberOfImages >= 6) {
      const li = elem.getElementsByTagName("li");
      setOverlayPosition(li);
      displayOverflowNumbers(elem, li);
      setHideClass(li);
      numberOfImages = "more";
    }

    elem.classList.add(`layout-${numberOfImages}-${shape}`);
    gridGapSize("5px");
  });
}

function displayOverflowNumbers(elem, li) {
    const numberTextElement = document.createElement("p");
    const numberContent = document.createTextNode("+" + (li.length - 4));
    numberTextElement.appendChild(numberContent);
    numberTextElement.classList.add("more");

    const parentDiv = elem.getElementsByClassName("overlay");
    parentDiv[0].appendChild(numberTextElement);
}

function setOverlayPosition(li) {
    li[4].classList.add("position");
    const newElement = document.createElement("div");
    newElement.classList.add("overlay");
    const parentLi = li[4];
    parentLi.insertBefore(newElement, parentLi.firstChild);
}

function getImageShape(elem) {
    const imgs = elem.getElementsByTagName("img");
    if (imgs[0].width > imgs[0].height) {
      return shape = "horizontal";
    } else if (imgs[0].width < imgs[0].height) {
      return shape = "vertical";
    } else {
      return shape = "square";
    }
}

function setHideClass(li) {
    liArray = Array.from(li);
    liArray.forEach((v, i) => {
        if (i >= 5) {
            v.classList.add("hide");
        }
    });
}

function gridGapSize(size) {
    const $ = (el) => document.querySelector(el);
    $(":root").style.setProperty("--gridgap-size", size);
}

run();