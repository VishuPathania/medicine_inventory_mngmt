import React, { useState, useContext } from 'react';
import { MedicineContext } from '../context/MedicineContext';

const MedicineForm = () => {
  const { medicines, addToCart } = useContext(MedicineContext);
  const [medicineName, setMedicineName] = useState('');
  const [quantityToOrder, setQuantityToOrder] = useState(1);

  const handleAddToCart = () => {
    if (medicineName && quantityToOrder > 0) {
      const medicine = medicines.find(med => med.name === medicineName);
      if (medicine && medicine.quantityAvailable >= quantityToOrder) {
        addToCart({
          ...medicine,
          quantityToOrder,
        });
      }
    }
  };

  return (
    <div className="medicine-form">
      <h2>Add Medicine to Cart</h2>
      <div className="form-group">
        <label htmlFor="medicineName">Medicine Name:</label>
        <select
          id="medicineName"
          value={medicineName}
          onChange={e => setMedicineName(e.target.value)}
        >
          <option value="">Select a medicine</option>
          {medicines.map(med => (
            <option key={med.name} value={med.name}>{med.name}</option>
          ))}
        </select>
      </div>
      {medicineName && (
        <div className="form-group">
          <p>Description: {medicines.find(med => med.name === medicineName).description}</p>
          <p>Price: ${medicines.find(med => med.name === medicineName).price}</p>
          <p>Quantity Available: {medicines.find(med => med.name === medicineName).quantityAvailable}</p>
          <label htmlFor="quantityToOrder">Quantity to be ordered:</label>
          <input
            type="number"
            id="quantityToOrder"
            min="1"
            max={medicines.find(med => med.name === medicineName).quantityAvailable}
            value={quantityToOrder}
            onChange={e => setQuantityToOrder(parseInt(e.target.value))}
          />
          <button onClick={handleAddToCart}>Add to Bill</button>
        </div>
      )}
    </div>
  );
};

export default MedicineForm;
