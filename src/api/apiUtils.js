export const API_BASE_URL = 'http://localhost:8080'; //TODO this should be env variable

export const handleResponse = async response => {
    if (response.ok) {
        return response.json();
    }
};

export const handleError = error => console.error(error);

export const handleNoContentResponse = async response => {
    if (response.ok) {
        return response;
    }
};

export const headerAttributes = {
    'Accept': 'application/json, text/plain',
    'Content-Type': 'application/json;charset=UTF-8',
};
