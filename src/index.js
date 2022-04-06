var elements = document.getElementsByClassName("js-photo-gallery");
var shape;
var i;

new SmartPhoto(".js-smartPhoto");
/*
const $ = (el) => document.querySelector(el);
$("#slider").addEventListener("input", (e) => {
  $(":root").style.setProperty("--margin-size", `${e.target.value}px`);
});
*/
function marginSize(size) {
  const $ = (el) => document.querySelector(el);
  $(":root").style.setProperty("--margin-size", size);
}
marginSize("2px");

elements = Array.from(elements);
elements.forEach((elem) => {
  var count = elem.childElementCount;
  if (count >= 6) {
    var li = elem.getElementsByTagName("li");
    li[4].classList.add("position");

    var newElement = document.createElement("div"); // div要素作成
    newElement.classList.add("overlay");
    //親要素の参照
    var parentLi = li[4];
    // 追加
    parentLi.insertBefore(newElement, parentLi.firstChild);

    var textElement = document.createElement("p"); // p要素作成
    var newContent = document.createTextNode("+" + (li.length - 4)); // テキストノードを作成
    textElement.appendChild(newContent); // p要素にテキストノードを追加
    textElement.classList.add("more");

    var parentDiv = elem.getElementsByClassName("overlay");
    parentDiv[0].appendChild(textElement);

    for (i = 5; i < li.length; i++) {
      li[i].classList.add("hide");
    }

    count = "more";
  }

  const imgs = elem.getElementsByTagName("img");
  if (imgs[0].width > imgs[0].height) {
    shape = "horizontal";
  } else if (imgs[0].width < imgs[0].height) {
    shape = "vertical";
  } else {
    shape = "square";
  }

  elem.classList.add(`layout-${count}-${shape}`);
  //console.log(elem);
});