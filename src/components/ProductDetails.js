import { useParams } from 'react-router-dom';
import productData from '../data/productData';
import Product from './Product';

function ProductDetails({ cart, cartMethods }) {
  const productID = useParams().productID;
  const product = productData.find((p) => p.id === productID);

  if (!product) throw new Error('Product does not exist.');

  return <Product product={product} cart={cart} cartMethods={cartMethods} />;
}

export default ProductDetails;
