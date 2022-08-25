import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const myPlayer = new player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

myPlayer.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  }, 1000)
);

const number = JSON.parse(localStorage.getItem(STORAGE_KEY));

myPlayer.setCurrentTime(number);
