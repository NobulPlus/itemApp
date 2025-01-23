import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import { ItemProvider } from './context/ItemContext';
import Home from './components/Home';
import AddItem from './components/AddItem';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
    return (
        <ItemProvider>
            <Router>
                <Routes>
                    <Route path="/" element={
                      <PrivateRoute>
                        <Home />
                      </PrivateRoute>
                    }/>
                    <Route path="/add-item" element={
                      <PrivateRoute>
                        <AddItem />
                      </PrivateRoute>
                    } />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Router>
        </ItemProvider>
    );
};

export default App;
