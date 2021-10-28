import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import classes from "./AddNewProduct.module.css";
import { productsVendorActions } from '../../services/products-vendor-slice';

const AddNewProduct = (props) => {
    const nameProd = useRef();
    const categoryProd = useRef();
    const imgProd = useRef();
    const dispatch = useDispatch();

    const onAddNewProduct = (event) => {
        event.preventDefault();
        const nameProdCurr = nameProd.current.value;
        const categoryProdCurr = categoryProd.current.value;
        const imgProdCurr = imgProd.current.value;
        dispatch(productsVendorActions.addNewProduct({
            nameProd: nameProdCurr,
            categoryProd: categoryProdCurr,
            imgProd: imgProdCurr
        }));
    };

    return (
        <React.Fragment>
            <Header />
            <div className={`container ${classes.container}`}>
            <form onSubmit={onAddNewProduct}>
                <div className={`form-group ${classes['form-group']}`}>
                <p className={classes.title}>AGGIUNGI UN NUOVO PRODOTTO DA VENDERE</p>
                <label id="nameProd">Nome prodotto</label>
                <input className="form-control"
                    type="text"
                    name="name"
                    ref={nameProd}
                    required />
                </div>
                <div className="form-group">
                <label id="category">Categoria</label>
                <input className="form-control"
                    type="text" 
                    name="category"
                    ref={categoryProd}
                    required />
                </div>
                <div className="form-group">
                <label id="imgProd">Immagine prodotto</label>
                <input className="form-control"
                    type="text" 
                    name="imgProd"
                    ref={imgProd}
                    required />
                </div>
                <button className={`btn btn-primary ${classes.btn}`}>Aggiungi prodotto</button>
            </form>
            </div>
            <Footer />
        </React.Fragment>);
}

export default AddNewProduct;