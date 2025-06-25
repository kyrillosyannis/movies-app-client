import {
    handleError,
    handleNoContentResponse,
    handleResponse,
    headerAttributes,
} from './apiUtils';
import { config } from '../envs/env';

const BASE_URL = config.API_URL + '/movies';

export const fetchAll = (pageNumber) => {
    return fetch(`${BASE_URL}?pageNumber=${pageNumber}`, {
        headers: {...headerAttributes},
    })
        .then(handleResponse)
        .catch(handleError);
};

export const create = movie => {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {...headerAttributes},
        body: JSON.stringify(movie),
    })
        .then(handleResponse)
        .catch(handleError);
};

export const rate = rateRequest => {
    return fetch(`${BASE_URL}/ratings`, {
        method: 'POST',
        headers: {...headerAttributes},
        body: JSON.stringify(rateRequest),
    })
        .then(handleNoContentResponse)
        .catch(handleError);
};
