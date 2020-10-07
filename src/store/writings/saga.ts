import { LocalStorage } from 'utils';
import factoryWatchAction from '../_utils/factoryWatchAction';

async function getWritings() {
    return await LocalStorage.getJson('writings');
}

export const watchGetWritings = factoryWatchAction(
    'REQUEST_GET_WRITINGS',
    getWritings
);
