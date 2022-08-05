/// <reference types="cypress" />

import * as Cart from '../services/cart';

describe('Cart', () => {
    it('CT005 - Incluir produto no carrinho', () => {
        Cart.addProductCart();
    });

    it('CT006 - Excluir produto no carrinho', () => {
        Cart.deleteProductCart();
    });
});
