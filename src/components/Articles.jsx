import { useEffect } from "react"

export default function Articles() { 
    useEffect(()=>{
        document.title = "Markus Lim | Articles"
    }, [])
}