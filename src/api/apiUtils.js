
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

const getToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user) {
        return user?.token;
    } else {
        return '';
    }
    
};

export const headerAttributes = {
    'Accept': 'application/json, text/plain',
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': 'Bearer: ' + getToken(),
};
