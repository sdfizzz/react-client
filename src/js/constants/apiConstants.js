const apiBaseUrl = url => new URL(url, 'http://localhost:3001/');

export const apiUrls = {
    login: apiBaseUrl('./login'),
    logout: apiBaseUrl('./login?logout'),
    registration: apiBaseUrl('./registration'),
    greetings: { list: apiBaseUrl('./greetings/list/') }
};
