import '../styles/components/UpdateCart.scss';

function UpdateCart({ product, cart, cartMethods }) {
  const { add, increase, decrease, acceptInput } = cartMethods;

  const [productInCart] = cart.filter((p) => p.id === product.id);

  const handleChange = (e) => {
    acceptInput(product, e.target.value);
  };

  const addBtn = (
    <button className="UpdateCart-add" onClick={() => add(product)}>
      Add
    </button>
  );

  const editBtn = (
    <div className="UpdateCart-edit">
      <button onClick={() => decrease(product)}>-</button>
      <input
        type="text"
        onChange={handleChange}
        value={productInCart && productInCart.quantity}
      ></input>
      <button onClick={() => increase(product)}>+</button>
    </div>
  );

  return productInCart ? editBtn : addBtn;
}

export default UpdateCart;
