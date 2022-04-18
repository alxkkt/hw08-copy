import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTimeInterval, 1000));
player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

function saveTimeInterval({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}
