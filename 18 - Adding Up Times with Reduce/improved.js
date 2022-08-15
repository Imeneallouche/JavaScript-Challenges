//GLOBAL VARIABLES
const videos = Array.from(document.querySelectorAll(".videos li"));
let videoTimings = videos
  .map((video) => video.dataset.time.split(":").map(parseFloat))
  .map((timeArray) =>
    timeArray.reduce((previous, next) => previous * 60 + next)
  )
  .reduce((previous, next) => previous + next);
/*




*/

const unitsWithSeconds = [60, 60, 24, 7];
let counter = 0;
const time = [];
let quotien = " ";

while (quotien && counter < unitsWithSeconds.length) {
  quotien = Math.floor(videoTimings / unitsWithSeconds[counter]);
  let rest = videoTimings - quotien * unitsWithSeconds[counter];
  time.unshift(rest);
  counter += 1;
  videoTimings = quotien;
}
console.log(...time);
