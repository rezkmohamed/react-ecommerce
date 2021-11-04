import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Gallery.module.css";

const Gallery = ({products, isLoading}) => {
    console.log(products);
    return (
        <React.Fragment>
        <section>
            <div className={classes.container}>
            <div className={classes.gallery}>
                {
                    isLoading && 
                    <p>LOADINGGGGGGGGGGG</p>
                }
                {
                    !isLoading && 
                    products.map(prod => {
                        return (
                            <div key={prod.idProduct}>
                                <Link
                                to={`/detail/?idprod=${prod.idProduct}`}
                                data-lightbox="models"
                                data-title="Caption1"
                                >
                                <img
                                    src={prod.img}
                                    alt="foto rappresentativa del prodotto"
                                />
                                </Link>
                                <div className={classes['product-info']}>
                                    <p>product: {prod.name}</p>
                                    <p>
                                        price: $ {prod.price}
                                    </p>
                                    <p>quantity: {prod.quantity}</p>
                                </div>
                            </div>)
                        })
                }
            </div>
            </div>
        </section>
        </React.Fragment>
    );
}

export default Gallery;