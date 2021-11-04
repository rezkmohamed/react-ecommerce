import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Footer from '../UI/Footer';
import Gallery from '../UI/Gallery';
import Header from '../UI/Header';
import { fetchProductsByNameLike } from '../../services/products-service';

const SearchPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const prodNameLike = queryParams.get('name');

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchProductsByNameLike(prodNameLike)
        .then(res => {
            console.log(res);
            setProducts(res);
            setIsLoading(false);
        }).catch(err => {
            window.alert('ERRORRRRR: ' + err.message);
            setIsLoading(false);
        });

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