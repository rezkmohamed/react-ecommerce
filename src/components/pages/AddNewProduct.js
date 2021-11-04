import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import classes from "./AddNewProduct.module.css";
import { addProduct } from '../../services/products-service';

const AddNewProduct = (props) => {
    const nameProd = useRef();
    const categoryProd = useRef();
    const imgProd = useRef();
    const price = useRef();
    const quantity = useRef();
    const idProfile = useSelector((state) => state.auth.value.profileData.idProfile);


    const onAddNewProduct = (event) => {
        event.preventDefault();
        const nameProdCurr = nameProd.current.value;
        const categoryProdCurr = categoryProd.current.value;
        const imgProdCurr = imgProd.current.value;
        const priceCurr = price.current.value;
        const quantityCurr = quantity.current.value;

        addProduct({
            name: nameProdCurr,
            category: categoryProdCurr,
            img: imgProdCurr,
            price: priceCurr,
            idProfile: idProfile,
            quantity: quantityCurr
        }).then(res => {
            if(res){
                window.alert('PRODOTTO AGGIUNTO! BRAVO.');
            }
        }).catch(err => {
            window.alert('ERRORE: ' + err.message);
        })
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

                <div className="form-group">
                <label id="price">Prezzo</label>
                <input className="form-control"
                    type="number" 
                    name="price"
                    ref={price}
                    required />
                </div>

                <div className="form-group">
                <label id="quantity">Quantità</label>
                <input className="form-control"
                    type="number" 
                    name="quantity"
                    ref={quantity}
                    required />
                </div>

                <button className={`btn btn-primary ${classes.btn}`}>Aggiungi prodotto</button>
            </form>
            </div>
            <Footer />
        </React.Fragment>);
}

export default AddNewProduct;