// /src/utils/dateUtils.js
import moment from 'moment';

export function convertTime(date) {
    return moment(date).format('MMM Do');
}