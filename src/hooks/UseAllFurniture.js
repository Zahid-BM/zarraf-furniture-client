import axios from 'axios';
import { useEffect, useState } from 'react';


const UseAllFurniture = () => {
    const [allFurniture, setAllFurniture] = useState([]);
    useEffect(() => {
        const getAllFurniture = async () => {
            const { data } = await axios.get('http://localhost:5000/latestFurniture');
            setAllFurniture(data)
        }
        getAllFurniture();
    }, [])
    return [allFurniture, setAllFurniture]
};

export default UseAllFurniture;