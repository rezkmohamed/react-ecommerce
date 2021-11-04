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
                        </Link>)
                        })
                }

                {/* <a
                href="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                data-lightbox="models"
                data-title="Caption1"
                >
                <img
                    src="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                />
                </a>
                <a
                href="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                data-lightbox="models"
                data-title="Caption2"
                >
                <img
                    src="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                />
                </a>
                <a
                href="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                data-lightbox="models"
                data-title="Caption3"
                >
                <img
                    src="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                />
                </a>
                <a
                href="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                data-lightbox="models"
                data-title="Caption4"
                >
                <img
                    src="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                />
                </a>
                <a
                href="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                data-lightbox="models"
                data-title="Caption5"
                >
                <img
                    src="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                />
                </a>
                <a
                href="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                data-lightbox="models"
                data-title="Caption6"
                >
                <img
                    src="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                />
                </a>
                <a
                href="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                data-lightbox="models"
                data-title="Caption7"
                >
                <img
                    src="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                />
                </a>
                <a
                href="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                data-lightbox="models"
                data-title="Caption8"
                >
                <img
                    src="https://m.media-amazon.com/images/I/718s2f1qRWL._AC_UX679_.jpg"
                />
                </a> */}
            </div>
            </div>
        </body>
        </React.Fragment>
    );
}

export default Gallery;