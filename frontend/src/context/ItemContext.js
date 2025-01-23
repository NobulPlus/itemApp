import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const ItemContext = createContext();

export const useItems = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    // Fetch items from the backend
    const fetchItems = async () => {
        try {
            const token = localStorage.getItem('token'); // Get the token from localStorage
            const response = await axios.get('http://localhost:8000/api/items', {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the request header
                }
            });
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    // Add a new item to the backend
    const addItem = async (item) => {
        try {
            const token = localStorage.getItem('token'); // Get the token from localStorage
            const response = await axios.post('http://localhost:8000/api/items', item, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the request header
                }
            });
            setItems([...items, response.data]);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <ItemContext.Provider value={{ items, fetchItems, addItem }}>
            {children}
        </ItemContext.Provider>
    );
};
