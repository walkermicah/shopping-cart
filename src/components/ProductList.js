import { useParams } from 'react-router-dom';
import Product from './Product';
import productData from '../data/productData';
import '../styles/components/ProductList.scss';

function ProductList() {
  const productType = useParams().productType;

  const products = productType
    ? productData.filter((p) => p.category === productType)
    : productData;

  return (
    <div className="ProductList">
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
