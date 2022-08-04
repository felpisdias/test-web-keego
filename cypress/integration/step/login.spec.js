/// <reference types="cypress" />

import * as Login from '../services/login';

describe('Login', () => {
    it('CT001 - Login Falho', () => {
        Login.loginFail();
    });

    it('CT002 - Login Efetuado', () => {
        Login.loginSuccess();
    });
});
