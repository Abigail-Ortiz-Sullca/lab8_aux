import React from 'react';

type BuyList = string[];
const ShoppingList: React.FC = () => {
  const buyList: BuyList = [
    'Controller',
    'Bread',
    'Water',
    'Notebook',
    'Math Book',
    'Choco Bar',
    'Milk'
  ];

  return (
    <div>
      <ul>
        {buyList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
