import style from './Logs.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

import { Login } from './Login';
import { Signup } from './Signup';

export const Logs = () => {

    const [isLeft, setIsLeft] = useState(false);

    const switchTab = () => {
        setIsLeft(!isLeft);
    }

    return(
        <div className={style['root-container']}>
        <div 
            className={isLeft ? style['tab-left'] : style['tab-right']}
            onClick={switchTab}

        />
            <div className={style['text-container']}>
                <h3 className={style['text-index']}>Login</h3>
                <h3 className={style['text-index']}>Signup</h3>
            </div>
            {!isLeft && <Login />}
            {isLeft && <Signup />} 
        </div>
    )
}