import '../styles/components/Product.scss';
import UpdateCart from './UpdateCart';

function Product({ product }) {
  return (
    <div className="Product">
      <h4>{product.title}</h4>
      <img src={product.imgUrl} alt={product.title} />
      <p>
        ${product.price.toFixed(2)} {product.unit}
      </p>
      <UpdateCart quantity={product.quantity} />
    </div>
  );
}

export default Product;

// {
//     id: uniqid(),
//     title: 'Apples (Granny Smith)',
//     category: 'produce',
//     price: 1.5,
//     unit: 'each',
//     quantity: 0,
//     imgUrl: greenApple,
//   },
