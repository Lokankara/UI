var slider = document.querySelector(".items"),
  isDown = false,
  startX,
  scrollLeft;

const friends = 10;  
let currentSize = 0;
let currentItem = 0;
let distance = 0;
const imageUrl = "https://source.unsplash.com/random/600x600/?";
const itemsMap = {
  1920: 8,
  1680: 7,
  1440: 6,
  1280: 5,
  1024: 4,
  768: 3,
  576: 2,
  320: 1,
};

for (let i = 1; i <= friends; i++) {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  slider.appendChild(listItem);
}

slider.querySelectorAll('.item').forEach(function (item, index) {
    const img = document.createElement('img');
  img.src = `${imageUrl}face,${index + 1}.jpg`;
  img.alt = index + 1;
  img.id = index + 1;
  item.appendChild(img);
});


slider.onmouseup = function () {
  isDown = false;
  slider.classList.remove("active");
};

slider.onmouseleave = function () {
  isDown = false;
  slider.classList.remove("active");
};

slider.onmousedown = function (e) {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    currentItem = Math.floor((scrollLeft + startX) / 200); 
};

slider.onmousemove = function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * (currentItem + 1);
    slider.scrollLeft = scrollLeft - walk;
};

$(document).ready(() => {
  const container = $(".items");
  const liItem = $("li.item");
  const itemWidth = liItem.outerWidth();
  const totalItems = liItem.size();

  const updateSliderWidth = () => {
    const liWidth = container.find(".item").outerWidth(true);
    currentSize = calculateItems(window.outerWidth);
    const totalWidth = liWidth * friends - 200;
    $("items").css("width", totalWidth + "px");
    $("#slider").css("width", currentSize * liWidth + "px");
  };

  $(window).resize(function () {
    updateSliderWidth();
  });

  updateSliderWidth();

  $("#next").click(function () {
    if (currentItem + currentSize < totalItems) {
      currentItem++;
      $(".items").animate({ scrollLeft: itemWidth * currentItem }, 500);
    }
    checkButtonStatus(currentItem, totalItems);
  });

  $("#prev").click(function () {
    if (currentItem > 0 && !(currentItem - totalItems) <= 0) {
      currentItem--;
      $(".items").animate({ scrollLeft: itemWidth * currentItem }, 500);
    }
    checkButtonStatus(currentItem, totalItems);
  });

  checkButtonStatus(currentItem, totalItems);
});

function checkButtonStatus(currentItem, totalItems) {
  const screenWidth = window.outerWidth;
  currentSize = calculateItems(screenWidth);
  switchClass("#prev", currentItem === 0);
  switchClass("#next", currentItem + currentSize > totalItems - 1);
}

function switchClass(id, flag) {
  if (flag) {
    $(id).addClass("disabled");
  } else {
    $(id).removeClass("disabled");
  }
}

function calculateItems(screenWidth) {
  for (const threshold of Object.keys(itemsMap)
    .map(Number)
    .sort((a, b) => b - a)) {
    if (screenWidth >= threshold) {
      return itemsMap[threshold];
    }
  }
}
