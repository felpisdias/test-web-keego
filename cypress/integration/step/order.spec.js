/// <reference types="cypress" />

import * as Order from '../services/order';

describe('Pedido', () => {
    it('CT007 - Efetuando Pedido', () => {
        Order.makeOder();
    });
});
