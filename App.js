import React from 'react';
import { MedicineProvider } from './context/MedicineContext';
import MedicineForm from './components/MedicineForm';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <MedicineProvider>
      <div className="App">
        <div className="container">
          <MedicineForm />
          <Cart />
        </div>
      </div>
    </MedicineProvider>
  );
}

export default App;
