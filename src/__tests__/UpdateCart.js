import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import UpdateCart from '../components/UpdateCart';

let testCart;

const testProduct = {
  id: 'watermelon',
};

const cartMethods = {
  add: jest.fn(),
  increase: jest.fn(),
  decrease: jest.fn(),
  acceptInput: jest.fn(),
};

describe('Update Cart Component', () => {
  beforeEach(() => {
    testCart = [];
  });

  it('Renders the `add` button when cart is empty', () => {
    render(<UpdateCart product={testProduct} cart={[]} cartMethods={{}} />);
    const addToCartBtn = screen.getByRole('button', { name: 'Add' });
    expect(addToCartBtn).toBeInTheDocument();
  });

  it('Renders the `add` button when cart is not empty but product is not in cart', () => {
    testCart = [{ id: 'bread', quantity: 1 }];
    render(
      <UpdateCart product={testProduct} cart={testCart} cartMethods={{}} />
    );
    const addToCartBtn = screen.getByRole('button', { name: 'Add' });
    expect(addToCartBtn).toBeInTheDocument();
  });

  it('Calls the addToCart function when the `add` button is clicked', () => {
    render(
      <UpdateCart
        product={testProduct}
        cart={testCart}
        cartMethods={cartMethods}
      />
    );
    const addToCartBtn = screen.getByRole('button', { name: 'Add' });
    userEvent.click(addToCartBtn);
    expect(cartMethods.add).toHaveBeenCalled();
  });

  it('Does not render `add to cart` button when product is in the cart', () => {
    testCart = [{ id: 'watermelon', quantity: 1 }];
    render(
      <UpdateCart product={testProduct} cart={testCart} cartMethods={{}} />
    );
    const addToCartBtn = screen.queryByRole('button', { name: 'Add' });
    expect(addToCartBtn).not.toBeInTheDocument();
  });

  it('Renders `edit cart` buttons when product is in the cart', () => {
    testCart = [{ id: 'watermelon', quantity: 1 }];
    render(
      <UpdateCart product={testProduct} cart={testCart} cartMethods={{}} />
    );
    const editCart = screen.getByTestId('updateCart-edit');
    const input = screen.getByDisplayValue('1');
    expect(editCart).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Renders an input with the item quantity', () => {
    testCart = [{ id: 'watermelon', quantity: 3 }];
    render(
      <UpdateCart product={testProduct} cart={testCart} cartMethods={{}} />
    );
    const input = screen.getByTestId('updateCart-input');
    expect(input).toHaveValue('3');
  });

  it('Calls the increaseQuantity function when the increment button is clicked', () => {
    testCart = [{ id: 'watermelon', quantity: 3 }];
    render(
      <UpdateCart
        product={testProduct}
        cart={testCart}
        cartMethods={cartMethods}
      />
    );
    const incrementBtn = screen.getByRole('button', { name: '+' });
    userEvent.click(incrementBtn);
    expect(cartMethods.increase).toHaveBeenCalled();
  });

  it('Calls the decreaseQuantity function when the decrement button is clicked', () => {
    testCart = [{ id: 'watermelon', quantity: 3 }];
    render(
      <UpdateCart
        product={testProduct}
        cart={testCart}
        cartMethods={cartMethods}
      />
    );
    const decrementBtn = screen.getByRole('button', { name: '-' });
    userEvent.click(decrementBtn);
    expect(cartMethods.decrease).toHaveBeenCalled();
  });

  it('Calls the inputQuantity function when the user types an input', () => {
    testCart = [{ id: 'watermelon', quantity: 3 }];
    render(
      <UpdateCart
        product={testProduct}
        cart={testCart}
        cartMethods={cartMethods}
      />
    );
    const input = screen.getByTestId('updateCart-input');
    userEvent.clear(input);
    userEvent.type(input, '4');
    expect(cartMethods.acceptInput).toHaveBeenCalled();
  });
});
