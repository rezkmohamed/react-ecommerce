import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Footer from '../UI/Footer';
import Gallery from '../UI/Gallery';
import Header from '../UI/Header';

const SearchPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const prodNameLike = queryParams.get('name');

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        let prods = JSON.parse(localStorage.getItem('products'));
        setProducts(prods);
        setIsLoading(false);
    }, [prodNameLike]);

    return (
        <React.Fragment>
            <Header />
            <Gallery products={products} isLoading={isLoading} />
            <Footer />
        </React.Fragment>
    );
}

export default SearchPage;