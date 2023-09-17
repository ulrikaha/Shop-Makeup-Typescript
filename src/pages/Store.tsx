import { useState } from 'react';
import storeItems from '../data/items.json';
import { StoreItem } from '../components/StoreItem';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';

export function Store() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  //Clicking on a product in the store should display the product details page
  const handleItemClick = (productId: number) => {
    setSelectedProductId(productId);
  };

  //Find the product in storeItems that matches the selectedProductId
  const selectedProduct = storeItems.find(item => item.id === selectedProductId);

  return (
    <div>
      {selectedProductId ? (
        <div>
          <ProductDetailsPage />
        </div>
      ) : (
        <ul className="list-group" style={{ listStyle: 'none' }}>
          {storeItems.map((item) => (
            <li key={item.id}>
              <StoreItem product={item as ProductItem} onClick={() => handleItemClick(item.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}





