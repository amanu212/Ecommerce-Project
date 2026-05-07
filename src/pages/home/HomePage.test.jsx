import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import HomePage from './HomePage';

vi.mock('axios');

describe('HomePage component', () => {
  
  let products;
  let cart;

  beforeEach(() => {
  products = [
    {
      "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      "image": "images/products/intermediate-composite-basketball.jpg",
      "name": "Intermediate Size Basketball",
      "rating": {
        "stars": 4,
        "count": 127
      },
      "priceCents": 2095,
      "keywords": ["sports", "basketballs"]
    }
  ];

  cart = [];
  loadCart = vi.fn();  
})

it('displays the products correctly', () => {
  render(<HomePage products={products} cart={cart} loadCart={loadCart} />);

  const user = userEvent.setup();
  user.click()
  expect(screen.)
})
})