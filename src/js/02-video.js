import Player from '@vimeo/player';
import common from '../common.json';
import { checkTime } from './template/check-time';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedVideoTime = JSON.parse(localStorage.getItem(common.VIDEO_TIME)) ?? 0;

player.setCurrentTime(savedVideoTime);

player.on('timeupdate', throttle(checkTime, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});