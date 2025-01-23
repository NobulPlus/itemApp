import React, { useEffect } from 'react';
import '../css/Home.css'
import { useItems } from '../context/ItemContext';

const Home = () => {
    const { items, fetchItems } = useItems();

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item._id}>{item.name} - {item.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
