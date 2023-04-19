import { Link } from 'react-router-dom';
import logo from './logo.avif';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Search = ({ cartItem }) => {
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })
    return (
        <>
             <section className='search '>
                <div className="container">
                    <div className="logo width">
                        <img src={logo} alt="" />
                    </div>
                    <div className="search-box f_flex">
                        <i><SearchOutlinedIcon /></i>
                        <input type="text" name="" id="" />
                        

                    </div>
                    <div className="icon f_flex width mobile" >
                        <i className='fa fa-user icon-circle'><PersonOutlineRoundedIcon /></i>
                        <div className="cart">
                            <Link to="/cart">
                            
                            <i className='fa fa-shopping-bag icon-circle'>                  
                                 <ShoppingCartOutlinedIcon />
                            </i>
                            <span>{cartItem.length ===0?"0":cartItem.length }</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>   
            
        </>

    )
}

export default Search
