//we should play with the transform and opacity of the images to make it

//this is to not run the eventlistener on each scroll we await for 20msto run it
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/*




SELECT ALL THE IMAGEES*/
const allImages = Array.from(document.querySelectorAll(".slide-in"));

//LISTEN TO WINDOW SCROLLING
window.addEventListener("scroll", debounce(CheckSlide, 10));
/*








ADD ACTIVE CLASS WHEN REACHING THE SLIDEPOINT*/
function CheckSlide(eventListenedTo) {
  allImages.forEach((image) => {
    //the break point
    const slidePoint = image.height / 2 + image.offsetTop;

    //interval [windowY , windowY+windeow height]
    const min = window.scrollY;
    const max = min + window.innerHeight;

    //all classes of each image
    const allImageClasses = image.className.split(" ");

    if (max >= slidePoint && !allImageClasses.includes("active")) {
      image.classList.add("active");
    }
  });
}
