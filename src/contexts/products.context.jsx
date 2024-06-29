import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  /* used to upload collections of products from js-file to firebase once, after that we interact only with firebase database. We used 
  addCollectionAndDocuments function instead of getCategoriesAndDocuments
  
   useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
  
  */

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
