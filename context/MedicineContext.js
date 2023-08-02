import React, { createContext, useState } from 'react';

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const initialMedicines = [
    { name: 'Paracetamol', description: 'Fever reducer', price: 5, quantityAvailable: 10 },
    { name: 'Dolo', description: 'Pain reliever', price: 7, quantityAvailable: 10 },
  ];

  const [medicines, setMedicines] = useState(initialMedicines);
  const [cart, setCart] = useState([]);

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  const decreaseQuantityAvailable = (medicineName, quantityToOrder) => {
    setMedicines(prevMedicines =>
      prevMedicines.map(med => {
        if (med.name === medicineName) {
          const updatedQuantityAvailable = Math.max(med.quantityAvailable - quantityToOrder, 0);
          return {
            ...med,
            quantityAvailable: updatedQuantityAvailable,
          };
        }
        return med;
      })
    );
  };
  
  

  return (
    <MedicineContext.Provider value={{ medicines, addToCart, cart, decreaseQuantityAvailable }}>
      {children}
    </MedicineContext.Provider>
  );
};
