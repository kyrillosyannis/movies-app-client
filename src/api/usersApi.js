import {handleError, handleResponse, headerAttributes} from "./apiUtils";

export const registerUser = (registrationRequest) => {
    return fetch(`/register`, {
        method: 'POST',
        headers: headerAttributes,
        body: JSON.stringify(registrationRequest)
    })
        .then(handleResponse)
        .catch(handleError);
};

export const authenticate = authenticationRequest => {
    return fetch(`/authenticate`, {
        method: 'POST',
        headers: headerAttributes,
        body: JSON.stringify(authenticationRequest)
    })
        .then(handleResponse)
        .catch(handleError);
};
