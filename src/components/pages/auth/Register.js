import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Register.module.css";
import { registerProfile } from "../../../services/auth-service";

const Register = () => {
    const emailRef = useRef();
    const psw = useRef();
    const pswConfirm = useRef();
    // const typeOfUser = useRef();
    // const isUser = useRef();
    // const isVendor = useRef();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let typeOfuserCurrent = false;

    const onRegister = () => {
        setError(false);
        setIsLoading(true);
        const email = emailRef.current.value;
        const pswCurrent = psw.current.value;
        const pswConfirmCurrent = pswConfirm.current.value;
        // let typeOfuserCurrent = typeOfUser.current.value;
        // console.log(typeOfuserCurrent);
        if(pswCurrent !== pswConfirmCurrent){
            window.alert('DIFFERENT PASSWORDS!!!');
            setError(true);
            setIsLoading(false);
            return;
        }
        //     if(isUser){
        //         console.log('IS USER');
        //         typeOfuserCurrent = false;
        //     } else if (isVendor) {
        //         console.log('IS VENDOR');
        //         typeOfuserCurrent = true;
        //     } else {
        //         window.alert('ERROREEEEEEE NELLA REGISTRAZIONE. VALORE DI TYPE OF USER NON CORRETTO');
        //         return;
        // }

        // if(typeOfuserCurrent === 'user') {
        //     typeOfuserCurrent = false;
        //     console.log('is user!!!!');
        // } else if (typeOfuserCurrent === 'vendor') {
        //     console.log('is vendor!!!');
        //     typeOfuserCurrent = true;
        // } else {
        //     window.alert('ERROREEEEEEE NELLA REGISTRAZIONE. VALORE DI TYPE OF USER NON CORRETTO');
        //     return;
        // }
        console.log(typeOfuserCurrent);

        registerProfile(email, pswCurrent, typeOfuserCurrent)
        .then(res => {
            if(!res){
                setError(true);
                window.alert('ERRORREEEEEEEE NELLA REGISTRAZIONEEEEEE');
            }
            setIsLoading(false);
            window.alert('APPOSTO, PROCEDI CON LOGIN');
        }).catch(err => {
            setError(true);
            window.alert('ERRORREEEEEEEE NELLA REGISTRAZIONEEEEEE');
            setIsLoading(false);
        });
    };

    const checkLabelTypeOfUser = (type) => {
        console.log(type);
        if(type === 'user'){
            typeOfuserCurrent = false;
        } else if (type === 'vendor'){
            typeOfuserCurrent = true;
        } else {
            window.alert('ERROR: PROBLEMA CON LA SELEZIONE DEL TIPO DI UTENZA');
        }
    };


    return(
        <div className={classes.container}>
                    <div className={classes['form-box']}>
                        <p>FakeAzon</p>
                        <p>FakeAzon è un sito di e-commerce in cui puoi trovare qualsiasi tipo di prodotto fake.</p>
                    <div className={classes['header-form']}>
                        <h4 className={`${classes['text-primary']} ${classes['text-center']}`}><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
                        <div className={classes['image']}>
                        </div>
                    </div>
                    <div className={classes['body-form']}>
                        <form>
                        <div className={`${classes['inpyut-group']} ${classes['mb-3']}`}>
                <div className={classes['input-group-prepend']}>
                <span className={classes['input-group-text']}><i className="fa fa-user"></i></span>
            </div>
            <input type="text" className={classes['form-control']} placeholder="Email" ref={emailRef} />
            </div>
            <div className={`${classes['input-group']} ${classes['mb-3']}`}>
                <div className={classes['input-group-prepend']}>
                <span className={classes['input-group-text']}><i className="fa fa-lock"></i></span>
            </div>
            <input type="password" className={classes['form-control']} placeholder="Password" ref={psw} />
            <input type="password" className={classes['form-control']} placeholder="Conferma Password" ref={pswConfirm} />
            </div>
            <div>
                <input type="radio" id="huey" name="drone" value="user" defaultChecked onClick={() => checkLabelTypeOfUser('user')}/>
                <label htmlFor="huey">Acquirente</label>
            </div>

            <div>
                <input type="radio" id="dewey" name="drone" value="vendor" onClick={() => checkLabelTypeOfUser('vendor')}/>
                <label html="dewey">Venditore</label>
            </div>

            <button type="button" className={`${classes.button} ${classes['btn-secondary']} ${classes['btn-block']}`} onClick={onRegister}>REGISTRA</button>
            <div className={classes.message}>
            {/* <div><input type="checkbox" /> Remember ME</div> */}
            <div><Link to="/login">Vai a Login</Link></div>

            </div>
                </form>
                        {/* <div className={classes.social}>
                        <Link href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                        </div> */}
                    </div>
                    </div>
        </div>)

}

export default Register;