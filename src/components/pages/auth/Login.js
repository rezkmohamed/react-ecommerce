import React from "react";
import classes from "./Login.module.css";

const Login = () => {
    return(
        <div className={classes.container}>
                    <div className={classes['form-box']}>
                    <div className={classes['header-form']}>
                        <h4 className={`${classes['text-primary']} ${classes['text-center']}`}><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
                        <div className={classes['image']}>
                        </div>
                    </div>
                    <div className={classes['body-form']}>
                        <form>
                        <div className={`${classes['inpyut-group']} ${classes['mb-3']}`}>
                <div className={classes['input-group-prepend']}>
                <span className={classes['input-group-text']}><i class="fa fa-user"></i></span>
            </div>
            <input type="text" className={classes['form-control']} placeholder="Email" />
            </div>
            <div className={`${classes['input-group']} ${classes['mb-3']}`}>
                <div className={classes['input-group-prepend']}>
                <span className={classes['input-group-text']}><i class="fa fa-lock"></i></span>
            </div>
            <input type="text" className={classes['form-control']} placeholder="Password" />
            </div>
            <button type="button" className={`${classes.btn} ${classes['btn-secondary']} ${classes['btn-block']}`}>LOGIN</button>
            <div className={classes.message}>
            {/* <div><input type="checkbox" /> Remember ME</div> */}
            <div><a href="#">Reset password</a></div>
            </div>
                </form>
                        <div className={classes.social}>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                        </div>
                    </div>
                    </div>
        </div>)

}

export default Login;