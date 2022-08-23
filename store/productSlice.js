import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import PRODUCTS from '../data/dummyData';
import Product from '../model/Product'
import {db} from '../firebaseconfig';
import { doc, getDoc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";
import { useDispatch } from 'react-redux';




export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (prod) => {
    /*
    console.log(prod)
    return fetch('https://fir-eaced-default-rtdb.firebaseio.com/products.json', {
       method: POST,
       header: { 
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({title: prod.title,
        description: prod.description,
        price: prod.price,
        imageUrl: prod.imageUrl})
  }).then(
    (res) => res.json()
  */
 /*
        const myDoc = doc(db, 'products', 'Z4cR9tgAkpLJZTiAjaES');
        return getDoc(myDoc).then(
          (snapshot) => snapshot.data()
        )
*/
      const docRef = await addDoc(collection(db, "products"), {
        title: prod.title,
        description: prod.description,
        imageUrl: prod.imageUrl,
        price: prod.price
      })

      const docSnap = await getDoc(docRef);

      return {data:  docSnap.data(), id: docRef.id}
      



      });
          
          /*
        return db.collection("product").add({
          title: prod.title,
          description: prod.description,
          imageUrl: prod.imageUrl,
          price: prod.price
        }).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
*/


export const setProducts = createAsyncThunk(
  "products/setProducts",
  async () => {
    const products = []
    const snapshot = await getDocs(collection(db, "products"))
    snapshot.forEach( doc => {
      products.push(new Product(doc.id, 'u1', doc.data().title
      , doc.data().imageUrl, doc.data().description, doc.data().price))
    })
    return products
  });
          
  


export const productSlice = createSlice({
  name: 'products',
  initialState: {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
  },
  reducers: {
    
    deleteProduct: (state, action) => {

        state.availableProducts = state.availableProducts.filter(prod => prod.id !== action.payload)
        state.userProducts = state.userProducts.filter(prod => prod.id !== action.payload)
    }, 
    
    createProduct: (state, action) => {

      const prod = new Product(new Date().toString, 'u1',
      action.payload.title,
      action.payload.imageUrl,
      action.payload.description,
      action.payload.price,
      )

      state.availableProducts.push(prod);
      state.userProducts.push(prod);
    },

    updateProduct: (state, action) => {

      const index = state.userProducts.findIndex(prod => prod.id === action.payload.id)
      const updatedProd = new Product(action.payload.id, state.userProducts[index].ownerId,
      action.payload.title,
      action.payload.imageUrl,
      action.payload.description,
      state.userProducts[index].price
      )

      state.availableProducts[index] = updatedProd;
      state.userProducts[index] = updatedProd;
    }

  },

  extraReducers:{

    [setProducts.rejected] : (state, action) => {
      console.log('rejected');

    },
    [setProducts.fulfilled] : (state, action) => {
      console.log('success');
      state.availableProducts = action.payload;
      state.userProducts = action.payload;
      
    },

    [addProduct.fulfilled]: (state, action) => {
      
      console.log('sucess');
      console.log(action.payload.id)

      const prod = new Product(action.payload.id, 'u1',
      action.payload.data.title,
      action.payload.data.imageUrl,
      action.payload.data.description,
      action.payload.data.price,
      )

      state.availableProducts.push(prod);
      state.userProducts.push(prod);

    
    },
    [addProduct.rejected]: (state, action) => {
      console.log('rejected');
      console.log(action.payload);
    },
  }
})

export const { deleteProduct, createProduct, updateProduct } = productSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = (state) => state.products.availableProducts
export const selectUserProducts = (state) => state.products.userProducts

export default productSlice.reducer