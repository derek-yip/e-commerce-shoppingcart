import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}){
    const [cartItem, setCartItem] = useState([])
    
    const cartQuantity = cartItem.reduce((quantity,item) => item.quantity + quantity , 0)

    function getItemQuantity(id) {
        return cartItem.find( item => item.id == id)?.quantity || 0
    }

    function AddCartQuantity(id) {
        setCartItem( CurrentItems =>{
            if (CurrentItems.find(item => item.id === id) == null) {
                // If cart doesnt have the product with id
                return [...CurrentItems, {id , quantity: 1 }]
            }else{
                // If Cart have that product with id, add 1 for current items
                CurrentItems.map((item)=>{
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
                CurrentItems.map((item)=>{
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
    
    return(
        <ShoppingCartContext.Provider 
        value={{
            getItemQuantity, 
            AddCartQuantity,
            DecreaseCartQuantity,
            RemoveFromCart,
            cartItem,
            cartQuantity
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}