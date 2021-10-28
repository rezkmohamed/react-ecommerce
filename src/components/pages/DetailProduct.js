import React from 'react';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import classes from "./DetailProduct.module.css";
import { cartActions } from '../../services/cart-slice';
import { useDispatch } from 'react-redux';

const DetailProduct = () => {
    const dispatch = useDispatch();

    const DUMMY_DATA = {
        main_img: "https://i.ibb.co/xYpFY0T/item1.jpg",
        other_imgs: [
            "https://i.ibb.co/VJf6fXm/thumb1.jpg",
            "https://i.ibb.co/Jt5zc58/thumb2.jpg",
            "https://i.ibb.co/Yf9LMpy/thumb3.jpg",
            "https://i.ibb.co/60hPGy2/thumb4.jpg"
        ], 
        product_title: "EYEBOGLER Regular Fit Men's Cotton T-Shirt",
        price: 449.00,
        sizes: [
            'S',
            'M',
            'L',
            'XL'
        ],
    };


    const switchPicture = (img) => {
        let mainPic = document.querySelector("#main-img");
        mainPic.setAttribute('src', img);
    }

    const addToCart = () => {
        dispatch(cartActions.addProductToCart(DUMMY_DATA));
        window.alert('PRODOTTO AGGIUNTO AL CARRELLO');
    }


    return (
        <React.Fragment>
            <Header />
            <section className={classes['product-info']}>

            <div className={classes['item-image-parent']}>
                <div className={classes['item-list-vertical']}>
                    {
                        DUMMY_DATA.other_imgs.map(img => {
                            return(
                                <div className={classes['thumb-box']} onClick={() => {switchPicture(img)}}>
                                    <img src={img} alt="thumbnail" />
                                </div>)
                        })
                    }
                </div>
                <div className={classes['item-image-main']}>
                    <img id="main-img" src={DUMMY_DATA.main_img} alt="default" />
                </div>
            </div>

            <div className={classes['item-info-parent']}>
                <div className={classes['main-info']}>
                    <h4>{DUMMY_DATA.product_title}</h4>
                    {/* <div className={classes['star-rating']}>
                        <span>★★★★</span>★            
                    </div> */}
                    <p>Price: <span className={classes.price}>$ {DUMMY_DATA.price}</span></p>
                </div>
                <div className={classes['select-items']}>
                    
                    <div className={classes['change-color']}>
                        <label><b>Colour:</b> Black</label><br />
                        <div className={classes['thumb-box']}>
                            <img src="https://i.ibb.co/QjkJJk3/select1.jpg" alt="thumbnail" />
                        </div>
                        <div className={classes['thumb-box']}>
                            <img src="https://i.ibb.co/C297yD0/select2.jpg" alt="thumbnail" />
                        </div>
                    </div>
                    
                    <div className={classes['change-size']}>
                        <label><b>Size:</b></label><br />
                        <select>
                            {
                                DUMMY_DATA.sizes.map(size => {
                                    return (
                                        <option>{size}</option>
                                    )
                                })
                            }
                            {/* <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>2XL</option> */}
                        </select>
                    </div>

                    <div className={`btn btn-primary ${classes.btn}`} onClick={addToCart}>
                        aggiungi al carrello
                    </div>

                    {/* <div className={classes.description}>
                        <ul>
                            <li>Care Instructions: Machine Wash</li>
                            <li>Fit Type: Classic Fit</li>
                            <li>Color name: Black-White</li>
                            <li>Material: Cotton</li>
                            <li>Pattern: Solid</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </section>
        <Footer />
    </React.Fragment>
    );
}

export default DetailProduct;