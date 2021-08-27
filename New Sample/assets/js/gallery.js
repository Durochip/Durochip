var imageTiles = document.getElementsByClassName("image-tiles");

for (var i = 0; i < imageTiles.length; i++) {
  var child = imageTiles[i].children[0];
  child.setAttribute("onclick", `handleChange(${i})`);
}

// var tiles = document.getElementsByClassName("tile-image");
var active = document.getElementsByClassName("active-image");

var i = 0;

const startInterval = () => clearInterval(intervalId);
setInterval(() => {
  active[0].classList.remove("active-animation");
  imageTiles[i].classList.remove("active-tile");
  i++;
  if (i === imageTiles.length) i = 0;
  active[0].setAttribute("src", imageTiles[i].children[0].src);
  imageTiles[i].classList.add("active-tile");
  active[0].classList.add("active-animation");
}, 3000);

var intervalId = startInterval();

function handleChange(index) {
  clearInterval(intervalId);

  imageTiles[i].classList.remove("active-tile");
  i = index;
  active[0].setAttribute("src", imageTiles[i].children[0].src);
  imageTiles[i].classList.add("active-tile");

  setTimeout(() => {
    intervalId = startInterval()
  }, 3000);
}
