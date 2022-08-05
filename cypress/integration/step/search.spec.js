/// <reference types="cypress" />

import * as Search from '../services/search';

describe('Search', () => {
    it('CT003 - Pesquisa sem resultado', () => {
        Search.searchFail();
    });

    it('CT004 - Pesquisa com resultado', () => {
        Search.searchSuccess();
    });
});
