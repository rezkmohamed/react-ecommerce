import React from 'react';
import Footer from '../UI/Footer';
import Gallery from '../UI/Gallery';
import Header from '../UI/Header';
import { useState, useEffect } from 'react';

const LandingPage = (props) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        let prods = JSON.parse(localStorage.getItem('products'));
        setProducts(prods);
        setIsLoading(false);
    }, []);

    return (
        <div>
            <Header />
            <h1>Prodotti in vetrina</h1>
            <Gallery products={products} isLoading={isLoading}/>
            <Footer />
        </div>
    );
}

export default LandingPage;