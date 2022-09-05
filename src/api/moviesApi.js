import {
    API_BASE_URL,
    handleError,
    handleNoContentResponse,
    handleResponse,
    headerAttributes,
} from './apiUtils';

const BASE_URL = '/movies';

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
    return fetch(`${BASE_URL}/rate`, {
        method: 'POST',
        headers: {...headerAttributes},
        body: JSON.stringify(rateRequest),
    })
        .then(handleNoContentResponse)
        .catch(handleError);
};
