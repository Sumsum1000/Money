import style from './Navbar.module.scss';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';

export const Navbar = () => {

    const  { data, setData }  = useContext(DataContext);

    const onClick = () => {
        setData({...data, isLogedin: false})
    }

    return(
        <div className={style['navbar-container']}>
             <ul className={style['ul-container']}>
                <h2>Welcome {data.parentName}</h2>
                <h2>New task</h2>
                <h2>Completed task</h2>
                <h2>Kids</h2>
                <h2 className={style['add-kid']}>+</h2>
             </ul>
             <h2 onClick={onClick}>Logout</h2>
        </div>
    )
}