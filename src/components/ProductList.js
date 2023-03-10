import { useParams } from 'react-router-dom';
import Product from './Product';
import productData from '../data/productData';
import '../styles/components/ProductList.scss';

function ProductList({ cart, cartMethods }) {
  const productType = useParams().productType;
  const products = productType
    ? productData.filter((p) => p.category === productType)
    : productData;

  const showAll = !productType;

  if (productType && !['produce', 'bakery', 'dairy'].includes(productType))
    throw Error('Invalid product category.');

  return (
    <div className="ProductList">
      {products.map((p) => (
        <Product
          key={p.id}
          product={p}
          linksActive={true}
          showAll={showAll}
          cart={cart}
          cartMethods={cartMethods}
        />
      ))}
    </div>
  );
}

export default ProductList;
