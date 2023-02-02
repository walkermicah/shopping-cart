import uniqid from 'uniqid';

import greenApple from '../img/products/green-apple.png';
import redApple from '../img/products/red-apple.png';
import bananas from '../img/products/bananas.png';
import broccoli from '../img/products/broccoli.png';
import tomatoes from '../img/products/tomatoes.png';
import oranges from '../img/products/oranges.png';
import avocado from '../img/products/avocado.png';
import eggplant from '../img/products/eggplant.png';
import mushroom from '../img/products/mushroom.png';
import zucchini from '../img/products/zucchini.png';
import cucumber from '../img/products/cucumber.png';
import grapes from '../img/products/grapes.png';
import pineapple from '../img/products/pineapple.png';
import raspberries from '../img/products/raspberries.png';
import watermelon from '../img/products/watermelon.png';
import sourdough from '../img/products/sourdough.png';
import baguette from '../img/products/baguette.png';
import muffin from '../img/products/muffin.png';
import cinammonRoll from '../img/products/cinnamon-roll.jpg';
import brownie from '../img/products/brownie.png';
import pie from '../img/products/pie.png';
import milk from '../img/products/milk.png';
import swiss from '../img/products/swiss.png';
import eggs from '../img/products/eggs.png';

const productData = [
  {
    id: uniqid(),
    title: 'Apples (Granny Smith)',
    category: 'produce',
    price: 1.5,
    unit: 'each',
    quantity: 1,
    imgUrl: greenApple,
  },

  {
    id: uniqid(),
    title: 'Apples (Pink Lady)',
    category: 'produce',
    price: 1.5,
    unit: 'each',
    quantity: 0,
    imgUrl: redApple,
  },

  {
    id: uniqid(),
    title: 'Broccoli',
    category: 'produce',
    price: 4.5,
    unit: 'each',
    quantity: 0,
    imgUrl: broccoli,
  },

  {
    id: uniqid(),
    title: 'Tomatoes',
    category: 'produce',
    price: 6,
    unit: 'per lb',
    quantity: 0,
    imgUrl: tomatoes,
  },

  {
    id: uniqid(),
    title: 'Avocado',
    category: 'produce',
    price: 2.5,
    unit: 'each',
    quantity: 0,
    imgUrl: avocado,
  },

  {
    id: uniqid(),
    title: 'Bananas',
    category: 'produce',
    price: 2,
    unit: 'per lb',
    quantity: 0,
    imgUrl: bananas,
  },

  {
    id: uniqid(),
    title: 'Cucumber',
    category: 'produce',
    price: 4,
    unit: 'each',
    quantity: 0,
    imgUrl: cucumber,
  },

  {
    id: uniqid(),
    title: 'Grapes',
    category: 'produce',
    price: 5,
    unit: 'per lb',
    quantity: 0,
    imgUrl: grapes,
  },

  {
    id: uniqid(),
    title: 'Pineapple',
    category: 'produce',
    price: 7,
    unit: 'each',
    quantity: 0,
    imgUrl: pineapple,
  },

  {
    id: uniqid(),
    title: 'Mushrooms',
    category: 'produce',
    price: 2,
    unit: 'per 100g',
    quantity: 0,
    imgUrl: mushroom,
  },

  {
    id: uniqid(),
    title: 'Raspberries',
    category: 'produce',
    price: 6,
    unit: 'per pint',
    quantity: 0,
    imgUrl: raspberries,
  },

  {
    id: uniqid(),
    title: 'Eggplant',
    category: 'produce',
    price: 4,
    unit: 'each',
    quantity: 0,
    imgUrl: eggplant,
  },

  {
    id: uniqid(),
    title: 'Zucchini',
    category: 'produce',
    price: 2,
    unit: 'each',
    quantity: 0,
    imgUrl: zucchini,
  },

  {
    id: uniqid(),
    title: 'Oranges',
    category: 'produce',
    price: 10,
    unit: 'per bag',
    quantity: 0,
    imgUrl: oranges,
  },

  {
    id: uniqid(),
    title: 'Watermelon',
    category: 'produce',
    price: 10,
    unit: 'each',
    quantity: 0,
    imgUrl: watermelon,
  },

  {
    id: uniqid(),
    title: 'Sourdough Bread',
    category: 'bakery',
    price: 8,
    unit: 'per loaf',
    quantity: 0,
    imgUrl: sourdough,
  },

  {
    id: uniqid(),
    title: 'Fresh Baguette',
    category: 'bakery',
    price: 5.5,
    unit: 'each',
    quantity: 0,
    imgUrl: baguette,
  },

  {
    id: uniqid(),
    title: 'Blueberry muffins (6)',
    category: 'bakery',
    price: 12,
    unit: 'per pack',
    quantity: 0,
    imgUrl: muffin,
  },

  {
    id: uniqid(),
    title: 'Cinnamon rolls (6)',
    category: 'bakery',
    price: 12,
    unit: 'per pack',
    quantity: 0,
    imgUrl: cinammonRoll,
  },

  {
    id: uniqid(),
    title: 'Chocolate brownies (6)',
    category: 'bakery',
    price: 12,
    unit: 'per pack',
    quantity: 0,
    imgUrl: brownie,
  },

  {
    id: uniqid(),
    title: 'Apple pie',
    category: 'bakery',
    price: 15,
    unit: 'each',
    quantity: 0,
    imgUrl: pie,
  },

  {
    id: uniqid(),
    title: '1% Milk',
    category: 'dairy',
    price: 9,
    unit: 'each',
    quantity: 0,
    imgUrl: milk,
  },

  {
    id: uniqid(),
    title: 'Swiss Cheese',
    category: 'dairy',
    price: 8,
    unit: 'each',
    quantity: 0,
    imgUrl: swiss,
  },

  {
    id: uniqid(),
    title: 'Free Range Eggs',
    category: 'dairy',
    price: 8,
    unit: 'per dozen',
    quantity: 0,
    imgUrl: eggs,
  },
];

export default productData;
