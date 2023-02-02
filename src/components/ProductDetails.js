import { useParams } from 'react-router-dom';
import productData from '../data/productData';
import Product from './Product';

function ProductDetails() {
  const productID = useParams().productID;

  const [product] = productData.filter((p) => p.id === productID);

  return <Product product={product} />;
}

export default ProductDetails;
