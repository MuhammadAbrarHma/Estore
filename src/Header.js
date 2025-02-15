import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
export default function Header() {
  return (
    <div className='header'>
        <img style={{height:100 ,width:100 ,marginBottom:20}} alt='hma'className='header_logo'src='https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png'/>

        <div className='header_search'>
            <input className='header_searchIn' type='text'/>
            <SearchIcon className='header_searchIcon' />
        </div>


        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                Hello Guest 
                </span>
                <span className='header_optionLineTwo'>
                Sign In  
                </span>
            </div>

            <div className='header_option'>
                <span className='header_optionLineOne'>
                Returns 
                </span>
                <span className='header_optionLineTwo'>
                & Orders 
                </span>
            </div>

            <div className='header_option'>
                <span className='header_optionLineOne'>
                Your
                </span>
                <span className='header_optionLineTwo'>
                Prime
                </span>
            </div> 
            
        <div className='header_optionBasket'>
           <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>0</span>
        </div>
        </div>
    </div>
  );
}
