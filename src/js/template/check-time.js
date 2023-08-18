import common from '../../common.json';

function checkTime(data) {
    localStorage.setItem(common.VIDEO_TIME, JSON.stringify(data.seconds));
}

export { checkTime };