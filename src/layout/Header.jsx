import { Link } from "react-router-dom";
import logo from "../../src/assets/reliqus-logo-black.png";
import { PopupButton } from "react-calendly";
import { getQueryParam } from '../components/getQueryParam';
const Header = () => {
    const fbclid = getQueryParam('fbclid');
    return (
        <header className='sticky top-0 px-4 pt-6 z-20'>
        <div className="flex justify-between items-center gap-x-4 max-w-[1300px] mx-auto px-4 sm:px-6 py-5 bg-white rounded-md shadow-custom-light">
          <div className="">
            <Link target="_blank" to={`https://reliqus.com/?fbclid=${fbclid}`}>
                <img src={logo} alt="" />
            </Link>
          </div>
          <div className="">
            <PopupButton
            url="https://calendly.com/reliqus-ankit/30mins"
            rootElement={document.getElementById("root")}
            text="Book a Call"
            className='text-base font-medium bg-black-2 text-white rounded-md py-2 px-4 transition ease-in-out hover:shadow-custom-hover'
            />
          </div>
        </div>
      </header>
    )
}

export default Header;