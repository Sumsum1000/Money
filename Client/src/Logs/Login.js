import style from './Logs.module.scss';
import { useRef } from 'react';

export const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const submitHandler = (e) => {
        e.preventdefault();

        const email = emailRef.current.value;
        const passwordRef = passwordRef.current.value;

        fetch('http://localhost:8080/api/login',{

        })
    }

    return(
        <div className={style['logs-container']}>
            <form className={style['form-container']}>
                <div className={style['form-line']}>
                    <label for='email'>email</label>
                    <input 
                        ref={emailRef}
                        className={style['input']} 
                        id='email' 
                        type='email'
                    />
                </div>
                <div className={style['form-line']}>
                    <label for='password'>password</label>
                    <input 
                        ref={passwordRef}
                        className={style['input']}  
                        id='password' 
                        type='text' 
                    />
                </div>
                <button 
                    className={style['btn-submit']}
                    onClick={submitHandler}
                >Login</button>                    
            </form>
        </div>
    )
}