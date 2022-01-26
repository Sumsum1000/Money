import style from './Logs.module.scss';
import { useRef } from 'react';

export const Signup = () => {

    const nameRef = useRef();
    const emailRef = useRef();


    const addUserToDB = (e) => {
        e.preventDefault();
        
        console.log('user added');
        const data = {
            name: nameRef.current.value,
            //email: email.current.value
        }
        fetch('/api/users', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }

    return(
        <div className={style['logs-container']}>
            <form className={style['form-container']}>
            <div className={style['form-line']}>
                    <label for='name'>name</label>
                    <input 
                        ref={nameRef}
                        className={style['input']} 
                        id='name' 
                        type='text'
                    />
                </div>
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
                    <label for='password1'>password</label>
                    <input 
                        className={style['input']}  
                        id='password1' 
                        type='text' 
                    />
                </div>
                <div className={style['form-line']}>
                    <label for='password2'>confirm password</label>
                    <input 
                        className={style['input']}  
                        id='password2' 
                        type='text' 
                    />
                </div>
                <button 
                    className={style['btn-submit']}
                    onClick={addUserToDB}
                >Login</button>                    
            </form>
        </div>
    )
}