import {Link} from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcom from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'

export const Menu = () =>
    <nav className = "menu" >
        <Link to ="/" activeclassname="selected"> 
            <HomeIcon />
        </Link>
        <Link to="/add-day" activeclassname="selected"> 
            <AddDayIcom />
        </Link>
        <Link to="/list-days" activeclassname="selected"> 
            <ListDaysIcon />
        </Link>
    </nav>
