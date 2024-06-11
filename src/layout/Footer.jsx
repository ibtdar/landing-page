import logoFooter from "../../src/assets/reliqus-logo-white.png";
import { Link } from "react-router-dom";
import { getQueryParam } from '../components/getQueryParam';

const Footer = () => {
    const fbclid = getQueryParam('fbclid');
    return (
        <footer className='bg-black-2 py-10 px-4'>
        <div className="max-w-[1300px] mx-auto flex flex-col sm:flex-row justify-between gap-x-4 items-start sm:items-end">
          <div className="">
          <Link target="_blank" to={`https://reliqus.com/?fbclid=${fbclid}`}>
             <img src={logoFooter} alt="" />
            </Link>
            <p className='text-base font-medium text-white text-opacity-50 mt-4'>© 2024 Reliqus. All Rights Reserved.</p> 
          </div>
          <div className="flex gap-0 sm:gap-4 flex-col sm:flex-row mt-4 sm:mt-0">
            <a className='text-base font-medium text-white text-opacity-50 border-r border-r-white border-opacity-0 sm:border-opacity-50 pr-4 transition hover:text-opacity-100' href="#">Terms & Conditions</a>
            <a className='text-base font-medium text-white text-opacity-50 transition hover:text-opacity-100' href="#">Privacy Policy</a>
          </div>
        </div>  
      </footer>
    )
}

export default Footer;