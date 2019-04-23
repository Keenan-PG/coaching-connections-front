import React from 'react';
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Equality Allies</h1>
            <p>Home page</p>
            <Link to="/about">About us</Link>
        </div>
    );
}

export default MainPage;