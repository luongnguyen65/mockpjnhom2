import API from "./Api";

const url = "/users";

const existsByEmail = (email) => {
    return API.get(`${url}/email/${email}`);
};

const existsByUsername = (username) => {
    return API.get(`${url}/userName/${username}`);
};

const create = (username, email, password, firstname, lastname) => {
    const body = {
        userName: username,
        email: email,
        password: password,
        firstName: firstname,
        lastName: lastname
    }
    return API.post(url, body);
};

const resendEmailToActiveAccount = (email) => {
    const requestParams = {
        email: email
    }

    return API.get(`${url}/userRegistrationConfirmRequest`, { params: requestParams });
};

const requestResetPassword = (email) => {
    const requestParams = {
        email: email
    }

    return API.get(`${url}/resetPasswordRequest`, { params: requestParams });
};

const resendEmailToResetPassword = (email) => {
    const requestParams = {
        email: email
    }

    return API.get(`${url}/resendResetPassword`, { params: requestParams });
};

const resetPassword = (token, newPassword) => {
    const requestParams = {
        token: token,
        newPassword: newPassword
    }

    return API.get(`${url}/resetPassword`, { params: requestParams });
};

const getProfile = () => {
    return API.get(`${url}/profile`);
};

const changeProfile = (avatarUrl) => {
    const body = {
        avatarUrl: avatarUrl
    }
    return API.put(`${url}/profile`, body);
};

const api = {existsByEmail, existsByUsername, create, resendEmailToActiveAccount, requestResetPassword, resendEmailToResetPassword, resetPassword, getProfile, changeProfile }

export default api;