import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Gallery.module.css";

const Gallery = ({products, isLoading}) => {
    console.log(products);
    return (
        <React.Fragment>
        <body>
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
                            <div>
                                <Link
                                to={`/detail/?idprod=${prod.idProduct}`}
                                key={prod.idProduct}
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
                                </div>
                            </div>)
                        })
                }
            </div>
            </div>
        </body>
        </React.Fragment>
    );
}

export default Gallery;