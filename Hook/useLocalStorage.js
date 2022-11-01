import { useEffect, useState } from "react"
export function useLocalStorage(key , intialValue){
    
    const [value, setValue] = useState(()=>{
        return getSavedValue(key , intialValue)
    })
    
    useEffect(()=>{
        localStorage.setItem(key , JSON.stringify(value))
    },[value])

    return [value, setValue]
}

function getSavedValue (key , intialValue){
        const SavedValue = localStorage.getItem(key)
        
        if(SavedValue) {
            return JSON.parse(SavedValue)
        }
        if(typeof intialValue === "function"){
            return intialValue()
        }
        return intialValue   
}