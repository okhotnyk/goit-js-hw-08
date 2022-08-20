import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const myPlayer = new player(iframe);

const onPlay = function () {
  console.log(timeupdate);
};

myPlayer.on(
  'play',
  _.throttle(1000, () => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(timeupdate)
    );
    console.log('video started');
  })
);

myPlayer.off('click', () => {
  console.log(localStorage.getItem(timeupdate));
});

// myPlayer.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
