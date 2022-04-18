import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_INDICATOR = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTimeInterval, 1000));
player.setCurrentTime(localStorage.getItem(TIME_INDICATOR));

function saveTimeInterval({ seconds }) {
  localStorage.setItem(TIME_INDICATOR, seconds);
}
