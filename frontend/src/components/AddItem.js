import React, { useState } from 'react';
import { useItems } from '../context/ItemContext';

const AddItem = () => {
    const { addItem } = useItems();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description) {
            addItem({ name, description });
            setName('');
            setDescription('');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div>
            <h1>Add Item</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Item Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
