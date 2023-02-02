import '../styles/components/UpdateCart.scss';

function UpdateCart({ quantity }) {
  const addToCart = <button className="UpdateCart-add">Add</button>;

  const editCart = (
    <div className="UpdateCart-edit">
      <button>-</button>
      <input type="text" placeholder={quantity}></input>
      <button>+</button>
    </div>
  );

  return quantity > 0 ? editCart : addToCart;
}

export default UpdateCart;
