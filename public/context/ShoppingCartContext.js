import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../../Hook/useLocalStorage";
import ShoppingCartOffCanvas from "../component/ShoppingCart/ShoppingCartOffCanvas";

const ShoppingCartContext = createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}){
    const [cartItem, setCartItem] = useState([])
    const [cartTotal, setCartTotal] = useState(0);
    // const [cartTotal, setCartTotal] = useLocalStorage("total", 0)
    
    const cartQuantity = cartItem.reduce(
        (quantity , item) => quantity + item.quantity 
        , 0
    )

    function getItemQuantity(id) {
        return cartItem.find( item => item.id === id)?.quantity || 0
    }

    function AddCartQuantity(id) {
        setCartItem( CurrentItems =>{
            if (CurrentItems.find(item => item.id === id) == null) {
                // If cart doesnt have the product with id
                return [...CurrentItems, {id , quantity: 1}]
            }else{
                // If Cart have that product with id, add 1 for current items
                return CurrentItems.map((item)=>{
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function DecreaseCartQuantity(id) {
        setCartItem( CurrentItems =>{
            if (CurrentItems.find(item => item.id === id)?.quantity === 1) {
                return CurrentItems.filter(item => item.id !== id)
            }else{
                return CurrentItems.map( item =>{
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function RemoveFromCart(id) {
        setCartItem( CurrentItems=>{
            return CurrentItems.filter(item => item.id !== id)
        })
    }

    function AddCartTotal(item_price) {
        setCartTotal( cartTotal + item_price )
    }

    function DecreaseCartTotal(item_price) {
        setCartTotal( cartTotal - item_price )
    }
    
    return(
        <ShoppingCartContext.Provider 
        value={{
            getItemQuantity, 
            AddCartQuantity,
            DecreaseCartQuantity,
            RemoveFromCart,
            cartItem,
            cartQuantity,
            AddCartTotal,
            DecreaseCartTotal,
            cartTotal
        }}>
            {children}
            
        <ShoppingCartOffCanvas/>

        </ShoppingCartContext.Provider>
    )
}