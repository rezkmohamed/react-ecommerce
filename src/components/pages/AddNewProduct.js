import React from 'react';
import Footer from '../UI/Footer';
import classes from "./AddNewProduct.module.css";

const AddNewProduct = (props) => {
    return (
        <React.Fragment>
            <div className={`container ${classes.container}`}>
            <form>
                <div className={`form-group ${classes['form-group']}`}>
                <label id="usernameLabel">Nome prodotto</label>
                <input className="form-control"
                    type="email"
                    name="username"
                    required />
                <div className="error" id="usernameError" />
                </div>
                <div className="form-group">
                <label id="passwordLabel">Categoria</label>
                <input className="form-control"
                    type="password" 
                    name="password"
                    required />
                <div className="error" id="passwordError" />
                </div>
                <div className="form-group">
                <label id="passwordConfirmLabel">Immagine prodotto</label>
                <input className="form-control"
                    type="password" 
                    name="passwordConfirm"
                    required />
                <div className="error" id="passwordConfirmError" />
                </div>
                <button className="btn btn-primary">Aggiungi prodotto</button>
            </form>
            </div>
            <Footer />
        </React.Fragment>);
}

export default AddNewProduct;