import { useEffect } from "react"
import { useState } from "react"

export default function useLocalStorage(key , intial){
    const [value, setValue] = useState(()=>{
        return getSavedValue(key , intial)
    })

    useEffect(()=>{
        localStorage.setItem( key , value)
    },[value])

    return [value,setValue]
}

function getSavedValue (key , intial){
    const SavedValue = JSON.stringify(localStorage.getItem(key))

    if(SavedValue) return SavedValue
    
    if(intial instanceof Function) return intial()
    return intial
}