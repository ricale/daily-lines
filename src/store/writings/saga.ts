import Model from 'models';
import factoryWatchAction from '../_utils/factoryWatchAction';

async function getWritings() {
    return Model.getWritings();
}

export const watchGetWritings = factoryWatchAction(
    'REQUEST_GET_WRITINGS',
    getWritings
);
