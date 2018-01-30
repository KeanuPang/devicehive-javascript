const API = require('./API');
const ApiMap = require(`./transportResolvers/ApiMap`);


/**
 *
 */
class TokenAPI extends API {

    /**
     * Authentificate using login and password
     * @param {string} login
     * @param {string} password
     */
    login(login, password) {
        return this.send(ApiMap.login, {}, { login: login, password: password });
    }

    /**
     * Create token
     * @param {Token} token
     */
    create(token) {
        return this.send(ApiMap.createUserToken, {}, token.toObject());
    }

    /**
     * Refresg token
     * @param {string} refreshToken
     */
    refresh(refreshToken) {
        return this.send(ApiMap.refreshToken, {}, refreshToken); //TODO
    }
}


module.exports = TokenAPI;