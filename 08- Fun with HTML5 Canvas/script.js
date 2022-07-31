const canvas = document.querySelector("#draw");
/*



actually when we draw, we don't draw directaly on the html
however we draw on a context so let's create one !*/
const context = canvas.getContext("2d");

/*



to set the width and height of the canva to 
cover all of the webpage window*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*





*/
context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 0;
//context.lineWidth = 100;

/*




variables needed*/
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

/*






*/ function Draw(eventSelected) {
  if (!isDrawing) {
    return;
  } else {
    //the color
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    //the stroke of the line
    if (context.lineWidth >= 90 || context.lineWidth <= 1) {
      direction = !direction;
    }
    if (direction) {
      context.lineWidth++;
    } else {
      context.lineWidth--;
    }

    //start the action
    context.beginPath();

    //start from
    context.moveTo(lastX, lastY);

    //go to
    context.lineTo(eventSelected.offsetX, eventSelected.offsetY);

    //the stroke of the drawing
    context.stroke();

    lastX = eventSelected.offsetX;
    lastY = eventSelected.offsetY;
    hue++;
    //in hsl hue can go until 360 so let's settle it up
    if (hue >= 360) {
      hue = 0;
    }
  }
}

/*




EVENT LISTENERS*/
window.addEventListener("mousedown", (eventSelected) => {
  isDrawing = true;
  lastX = eventSelected.offsetX;
  lastY = eventSelected.offsetXY;
});
window.addEventListener("mousemove", Draw);
window.addEventListener("mouseup", () => (isDrawing = false));
window.addEventListener("mouseout", () => (isDrawing = false));
