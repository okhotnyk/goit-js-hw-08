import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const myPlayer = new player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  console.log('timeupdate');
  localStorage.setItem(STORAGE_KEY, JSON.stringify(timeupdate));
};

myPlayer.on('timeupdate', function (data) {
  localStorage.setItem(STORAGE_KEY, data.percent);
});

// myPlayer.off('click', () => {
//   console.log(localStorage.getItem(timeupdate));
// });

// player.setCurrentTime(videoplayer - current - time);
