import style from './NewKid.module.scss';
import { useRef, useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import { kidsContext } from '../Context/KidsContext';

export const NewKid = () => {

    const { kids, setKids } = useContext(kidsContext);
    const { data, setData } = useContext(DataContext);

    const mailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault()

        // Check if kid exists by mail------------------
        // Check password -----------------------
        
        const name = nameRef.current.value; 
        const email = mailRef.current.value; 
        const password = passwordRef.current.value;

        setData({
            ...data , 
            kids :[...data.kids, {name: name, email: email }]
        })

        nameRef.current.value = '';
        mailRef.current.value = '';
        passwordRef.current.value = '';
    }

    return(
      <form 
        className={style['log-in-container']}
        onSubmit={onSubmit}
      >
          <div className={style['log-in-title']}>
              <h3>Add kid</h3>
          </div>
          
          <div className={style['form-control']}>
              <label>name:</label>
              <input ref={nameRef} type="text"  />
          </div>

          <div className={style['form-control']}>
              <label>email:</label>
              <input ref={mailRef} type="email"  />
          </div>

          <div className={style['form-control']}>
              <label>password:</label>
              <input ref={passwordRef} type="text"  />
          </div>

          <div className={style['form-control']}>
              <label>Confirm password:</label>
              <input ref={confirmRef} type="text"  />
          </div>
          
          <button type="submit" className={style['btn-submit']}>Submit </button>
      </form>  
    )
}