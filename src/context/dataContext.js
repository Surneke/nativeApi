import axios from 'axios';
import {useState, createContext, useEffect} from 'react';

export const DataContext = createContext();
export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // axios.get('')
        fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
    })
}