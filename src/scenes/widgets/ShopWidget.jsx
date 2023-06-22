import React, { useState } from 'react';

const ShopWidget = () => {
  const [shops, setShops] = useState([]);

  const createShop = (name, rent) => {
    const newShop = { name, rent };
    setShops([...shops, newShop]);
  };

  const deleteShop = (name) => {
    const updatedShops = shops.filter((shop) => shop.name !== name);
    setShops(updatedShops);
  };

  const updateShopRent = (name, newRent) => {
    const updatedShops = shops.map((shop) => {
      if (shop.name === name) {
        return { ...shop, rent: newRent };
      }
      return shop;
    });
    setShops(updatedShops);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', padding: '20px' }}>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          width: '400px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f5f5f5',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
        }}
      >
        <h3 style={{ margin: '0', textAlign: 'center', fontSize: '20px', color: '#333' }}>
          Shop Management
        </h3>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button
            style={{
              marginRight: '20px',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              padding: '8px 12px',
              cursor: 'pointer',
            }}
            onClick={() => createShop('Shop 1', 1000)}
          >
            Create Shop 1
          </button>
          <button
            style={{
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              padding: '8px 12px',
              cursor: 'pointer',
            }}
            onClick={() => createShop('Shop 2', 1500)}
          >
            Create Shop 2
          </button>
        </div>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {shops.map((shop, index) => (
            <li
              key={index}
              style={{
                marginBottom: '10px',
                backgroundColor: '#fff',
                padding: '8px',
                borderRadius: '3px',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontWeight: 'bold', color: '#333' }}>Name: {shop.name}</span>
              <span style={{ marginLeft: '10px', color: '#333' }}>Rent: {shop.rent}</span>
            </li>
          ))}
        </ul>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: '#f44336',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              padding: '8px 12px',
              cursor: 'pointer',
              marginRight: '20px',
            }}
            onClick={() => deleteShop('Shop 1')}
          >
            Delete Shop 1
          </button>
          <button
            style={{
              backgroundColor: '#f44336',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              padding: '8px 12px',
              cursor: 'pointer',
              marginRight: '20px',
            }}
            onClick={() => deleteShop('Shop 2')}
          >
            Delete Shop 2
          </button>
          <button
            style={{
              backgroundColor: '#ff9800',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              padding: '8px 12px',
              cursor: 'pointer',
            }}
            onClick={() => updateShopRent('Shop 1', 1200)}
          >
            Update Shop 1 Rent
          </button>
          <button
            style={{
              backgroundColor: '#ff9800',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              padding: '8px 12px',
              cursor: 'pointer',
            }}
            onClick={() => updateShopRent('Shop 2', 1800)}
          >
            Update Shop 2 Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopWidget;
