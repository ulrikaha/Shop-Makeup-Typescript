import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storeItems from '../data/items.json';
import { MakeUpComponent } from '../components/MakeUpComponent';
import { SkinCareComponent } from '../components/SkinCareComponent';
import { HairCareComponent } from '../components/HairCareComponent';


export function ProductDetailsPage() {
  const { itemId } = useParams<{ itemId: string }>();
  const [product, setProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    // Ensure itemId is defined before attempting to find the product
    if (itemId !== undefined) {

      // Find the product in storeItems that matches the itemId
     const selectedProduct = storeItems.find(item => item.id === Number(itemId)) as ProductItem

      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }
  }, [itemId]);

//if there is no product with the given id, display a message
  if (itemId === undefined) {
    //console.log("productId is undefined");
    return <div>productId is undefined</div>;
  } else if (product === null) {
    return <div>Loading...</div>;
  } else {
    //console.log("Product found");
 


    return (
      product && (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={product.imgUrl} alt={product.name} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>{product.name}</h2>
              <hr />
              <p>{product.description}</p>
              <hr />
              <p>Brand: {product.brand}</p>
              <hr />
              <p>Size: {product.size}</p>
              <hr />
             <p>Shade: {product.shade}</p>
              <hr />
            
              {/* Conditionally render specific details based on the product type */}
              {product.type === 'MakeUp' && (
                <MakeUpComponent details={product.productCategoryDetails as Makeup} />
              )}
              {product.type === 'SkinCare' && (
              <SkinCareComponent details={product.productCategoryDetails as Skincare} />
              )}
            {product.type === 'HairCare' && (
              <HairCareComponent details={product.productCategoryDetails as Haircare} />
            )} 
            <h3 className="text-muted text-end">Price: {product.price} €</h3>
            </div>
          </div>
        </div>
      )

    );
  }
}