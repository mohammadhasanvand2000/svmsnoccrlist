import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const QuantityInput = ({ initialValue, onDecrement, onIncrement }) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
    onDecrement();
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onIncrement();
  };

  return (
    <div style={{ marginRight: "50px" }} className="u-s-m-b-15">
      <label style={{ color: "#fdfcfc", marginBottom: '10px' }}></label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="input-counter">
          <span className="input-counter__minus" onClick={handleDecrement}>
            <FaMinus />
          </span>
          <input
            className="input-counter__text input-counter--text-primary-style"
            type="text"
            value={quantity}
            readOnly
          />
          <span className="input-counter__plus" onClick={handleIncrement}>
            <FaPlus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuantityInput;
