import style from './Main.module.scss'
import { Navbar } from '../Navbar/Navbar';
import { NewKid } from '../NewKid/NewKid';
import { NewKidBtn } from '../Kids/NewKidBtn';


export const Main = () => {



    return(
        <div className={style['main-container']}>
            <Navbar />
            <NewKidBtn />
            {/* <NewKid /> */}
        </div>
    )
}