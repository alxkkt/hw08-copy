import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on(
  "timeupdate",
  throttle(({ seconds }) => console.log(seconds), 1000)
);
