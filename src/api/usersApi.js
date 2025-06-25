import {handleError, handleResponse, headerAttributes} from "./apiUtils";
import { config } from '../envs/env';

const BASE_URL = config.API_URL;

export const registerUser = (registrationRequest) => {
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: headerAttributes,
        body: JSON.stringify(registrationRequest)
    })
        .then(handleResponse)
        .catch(handleError);
};

export const authenticate = authenticationRequest => {
    return fetch(`${BASE_URL}/authenticate`, {
        method: 'POST',
        headers: headerAttributes,
        body: JSON.stringify(authenticationRequest)
    })
        .then(handleResponse)
        .catch(handleError);
};
