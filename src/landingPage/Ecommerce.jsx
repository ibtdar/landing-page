import Marquee from "react-fast-marquee";
import check from "../../src/assets/Tick.png";
import brand1 from "../../src/assets/brand-logo-1.png";
import brand2 from "../../src/assets/brand-logo-2.png";
import brand3 from "../../src/assets/brand-logo-3.png";
import brand4 from "../../src/assets/brand-logo-4.png";
import brand5 from "../../src/assets/brand-logo-5.png";
import brand6 from "../../src/assets/brand-logo-6.png";
import brand7 from "../../src/assets/brand-logo-7.png";
import brand8 from "../../src/assets/brand-logo-8.png";
import star from "../../src/assets/Stars.png";
import marquee1 from "../../src/assets/marquee/marquee-1.jpg";
import marquee2 from "../../src/assets/marquee/marquee-2.jpg";
import marquee3 from "../../src/assets/marquee/marquee-3.jpg";
import marquee4 from "../../src/assets/marquee/marquee-4.jpg";
import marquee5 from "../../src/assets/marquee/marquee-5.jpg";
import marquee6 from "../../src/assets/marquee/marquee-6.jpg";
import marquee7 from "../../src/assets/marquee/marquee-7.jpg";
import marquee8 from "../../src/assets/marquee/marquee-8.jpg";
import marquee9 from "../../src/assets/marquee/marquee-9.jpg";
import marquee10 from "../../src/assets/marquee/marquee-10.jpg";
import { PopupButton } from "react-calendly";
import { Link } from "react-router-dom";
import { getQueryParam } from '../components/getQueryParam';

const Ecommerce = () => {
    const fbclid = getQueryParam('fbclid');
    return (
        <>
            <section className="px-5">
                <div className="max-w-[900px] mx-auto text-center py-10 md:py-20 lg:py-28">
                    <h1 className='font-inter text-3xl md:text-5xl lg:text-6xl font-semibold mb-6'>Premium eCommerce Website Development</h1>
                    <p className='text-gray text-lg font-medium'>Launch your online store today with a custom eCommerce website for only $497.</p>
                    <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 gap-x-5 max-w-[660px] mx-auto mt-7">
                        <PopupButton
                            url="https://calendly.com/reliqus-ankit/30mins"
                            rootElement={document.getElementById("root")}
                            text="Book a Discovery Call"
                            className='text-base font-medium bg-black-2 text-white rounded-md py-3 px-4 w-full transition ease-in-out hover:shadow-custom-hover'
                        />
                        <Link target="_blank" to={`https://reliqus.com/client-testimonials/?fbclid=${fbclid}`} className='text-base font-medium bg-white text-black-2 rounded-md py-[10px] px-4 border-2 w-full transition ease-in-out hover:shadow-custom-hover'>Read Testimonials</Link>
                    </div>
                    <div className="pt-8 sm:pt-10 pl-5 sm:pl-0">
                        <ul className='flex gap-4 sm:gap-6 flex-col sm:flex-row flex-wrap justify-center'>
                            <li className='flex gap-x-3 items-start font-medium text-base'><img src={check} className='mt-1' alt="" /> Unlimited Products</li>
                            <li className='flex gap-x-3 items-start font-medium text-base'><img src={check} className='mt-1' alt="" /> Full Shopping Cart Integration</li>
                            <li className='flex gap-x-3 items-start font-medium text-base'><img src={check} className='mt-1' alt="" /> Product Search & Filters</li>
                            <li className='flex gap-x-3 items-start font-medium text-base'><img src={check} className='mt-1' alt="" /> Discounts & Sale Prices</li>
                            <li className='flex gap-x-3 items-start font-medium text-base'><img src={check} className='mt-1' alt="" /> Premium Bespoke Design</li>
                            <li className='flex gap-x-3 items-start font-medium text-base'><img src={check} className='mt-1' alt="" /> Mobile Responsive & SEO Ready</li>
                            <li className='flex gap-x-3 items-start font-medium text-base'><img src={check} className='mt-1' alt="" /> Built on WooCommerce</li>
                            <li className='flex gap-x-3 items-start font-medium text-base'><img src={check} className='mt-1' alt="" /> Blazing Fast Support</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="pb-6 sm:pb-10 md:pb-16 lg:pb-24 overflow-hidden marquee">
                <Marquee>
                    <div className="flex flex-nowrap gap-5 marquee-wrapper">
                        <div className="rounded-xl overflow-hidden relative max-w-[350px]">
                            <div className="">
                                <img className='w-full' src={marquee10} alt="" />
                            </div>
                            <div className="bg-white bg-opacity-90 rounded absolute w-[80%] z-10 left-3 bottom-3 p-3">
                                <img src={star} alt="" />
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>“I really enjoy working with Ankit and his team”</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Meredith Wenger</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px]">
                            <div className="">
                                <img className='w-full' src={marquee1} alt="" />
                            </div>
                            <div className="bg-white bg-opacity-90 rounded absolute w-[80%] z-10 left-3 bottom-3 p-3">
                                <img src={star} alt="" />
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Fantastic temperament. Highly professional. Excellent quality. Always responsive.</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>MZ Skin</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px]">
                            <div className="">
                                <img className='w-full' src={marquee2} alt="" />
                            </div>
                            <div className="bg-white bg-opacity-90 rounded absolute w-[80%] z-10 left-3 bottom-3 p-3">
                                <img src={star} alt="" />
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Ankit and his team did a PHENOMENAL job for a very, very reasonable price!</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Handmade In Britain</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px]">
                            <div className="">
                                <img className='w-full' src={marquee3} alt="" />
                            </div>
                            <div className="bg-white bg-opacity-90 rounded absolute w-[80%] z-10 left-3 bottom-3 p-3">
                                <img src={star} alt="" />
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Always going over the top to make sure quality is above expectations!</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Medical Gas Installers</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px]">
                            <div className="">
                                <img className='w-full' src={marquee4} alt="" />
                            </div>
                            <div className="bg-white bg-opacity-90 rounded absolute w-[80%] z-10 left-3 bottom-3 p-3">
                                <img src={star} alt="" />
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>I felt like they were the only ones who really read what I was looking for & tried to offer a solution..</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Artful</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px]">
                            <div className="">
                                <img className='w-full' src={marquee5} alt="" />
                            </div>
                            <div className="bg-white bg-opacity-90 rounded absolute w-[80%] z-10 left-3 bottom-3 p-3">
                                <img src={star} alt="" />
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Reliqus was great. They exceeded our expectations and gave great value for the cost!</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Gold Bank</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px]">
                            <div className="">
                                <img className='w-full' src={marquee7} alt="" />
                            </div>
                            <div className="bg-white bg-opacity-90 rounded absolute w-[80%] z-10 left-3 bottom-3 p-3">
                                <img src={star} alt="" />
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>You just can't get a better result for the price!</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>WHC Labs</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px]">
                            <div className="">
                                <img className='w-full' src={marquee6} alt="" />
                            </div>
                            <div className="bg-white bg-opacity-90 rounded absolute w-[80%] z-10 left-3 bottom-3 p-3">
                                <img src={star} alt="" />
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>"We are extremely fortunate to have found Ankit”</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Saree Blouse Company</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px]">
                            <div className="">
                                <img className='w-full' src={marquee8} alt="" />
                            </div>
                            <div className="bg-white bg-opacity-90 rounded absolute w-[80%] z-10 left-3 bottom-3 p-3">
                                <img src={star} alt="" />
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Reliqus always deliver quality as well as over the top communication.</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>The Furniture Park</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px]">
                            <div className="">
                                <img className='w-full' src={marquee9} alt="" />
                            </div>
                            <div className="bg-white bg-opacity-90 rounded absolute w-[80%] z-10 left-3 bottom-3 p-3">
                                <img src={star} alt="" />
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Top notch - If you're thinking about hiring Reliqus, do it, you won't regret it!</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Saje Prints</h5>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </section>

            <section className="pb-10 md:pb-16 lg:pb-24">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-8 max-w-[1300px] mx-auto">
                    <div className="w-[100%] lg:w-[40%] p-5">
                        <h2 className='font-inter font-semibold text-3xl leading-10'>Trusted by fast-moving brands & agencies worldwide</h2>
                        <div className="flex mt-7 ">
                            <div className="border-r border-r-gray border-opacity-20 pr-3">
                                <h3 className='font-bold text-4xl text-yellow'>3000+</h3>
                                <h5 className='font-medium text-base mt-3'>Websites Launched</h5>
                            </div>
                            <div className="pl-3">
                                <h3 className='font-bold text-4xl text-yellow'>14+</h3>
                                <h5 className='font-medium text-base mt-3'>Years of Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className="grow w-[100%] lg:w-[60%] p-5 grid grid-cols-4 gap-x-6 sm:gap-x-10 lg:gap-x-14 gap-y-0 place-items-center">
                        <img className='w-full' src={brand1} alt="" />
                        <img className='w-full' src={brand4} alt="" />
                        <img className='w-full' src={brand3} alt="" />
                        <img className='w-full' src={brand2} alt="" />
                        <img className='w-full' src={brand5} alt="" />
                        <img className='w-full p-3 sm:p-4 lg:p-5' src={brand6} alt="" />
                        <img className='w-full' src={brand7} alt="" />
                        <img className='w-full p-5 sm:p-7 lg:p-10' src={brand8} alt="" />
                    </div>
                </div>
                <div className=" max-w-[1300px] mx-auto px-5 text-center mt-3 lg:mt-6">
                    <Link target="_blank" to={`https://reliqus.com/about/?fbclid=${fbclid}`} className='text-base inline-block font-medium bg-white text-black-2 rounded-md py-[12px] px-10 border-2 w-full sm:w-auto transition ease-in-out hover:shadow-custom-hover'>Read More About Us</Link>
                </div>
            </section>
        </>
    )
}

export default Ecommerce;