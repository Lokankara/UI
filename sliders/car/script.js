document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};

document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

function createItem(data) {
  let itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  let imageDiv = document.createElement("div");
  imageDiv.classList.add("image");
  let img = document.createElement("img");
  img.src = data.imageSrc;
  imageDiv.appendChild(img);

  let contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  let leftDiv = document.createElement("div");
  leftDiv.classList.add("left");

  let h1 = document.createElement("h1");
  h1.textContent = data.title;

  let desDiv = document.createElement("div");
  desDiv.classList.add("des");
  desDiv.innerHTML = data.description;

  let button = document.createElement("button");
  button.textContent = "See more";
  for (let i = 0; i < 3; i++) {
    let angleRightIcon = document.createElement("i");
    angleRightIcon.classList.add("fa-solid", "fa-angle-right");
    button.appendChild(angleRightIcon);
  }

  leftDiv.appendChild(h1);
  leftDiv.appendChild(desDiv);
  leftDiv.appendChild(button);

  let rightDiv = document.createElement("div");
  rightDiv.classList.add("right");

  let h2 = document.createElement("h2");
  h2.textContent = "Luxury Car";

  let ul = document.createElement("ul");
  data.details.forEach(function (detail) {
    let li = document.createElement("li");
    let labelP = document.createElement("p");
    labelP.textContent = detail.label;
    let valueP = document.createElement("p");
    valueP.textContent = detail.value;
    li.appendChild(labelP);
    li.appendChild(valueP);
    ul.appendChild(li);
  });

  rightDiv.appendChild(h2);
  rightDiv.appendChild(ul);

  contentDiv.appendChild(leftDiv);
  contentDiv.appendChild(rightDiv);

  itemDiv.appendChild(imageDiv);
  itemDiv.appendChild(contentDiv);

  return itemDiv;
}

function appendItems() {
  let slide = document.getElementById("slide");

  jsonData.forEach(function (itemData) {
    let itemElement = createItem(itemData);
    slide.appendChild(itemElement.cloneNode(true));
  });
}

appendItems();
