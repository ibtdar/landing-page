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
import marquee1 from "../../src/assets/marquee/marquee-01.jpg";
import marquee2 from "../../src/assets/marquee/marquee-02.jpg";
import marquee3 from "../../src/assets/marquee/marquee-03.jpg";
import marquee4 from "../../src/assets/marquee/marquee-04.jpg";
import marquee5 from "../../src/assets/marquee/marquee-05.jpg";
import marquee6 from "../../src/assets/marquee/marquee-06.jpg";
import marquee7 from "../../src/assets/marquee/marquee-07.jpg";
import marquee8 from "../../src/assets/marquee/marquee-08.jpg";
import marquee9 from "../../src/assets/marquee/marquee-09.jpg";
import marquee10 from "../../src/assets/marquee/marquee-10.jpg";
import checkCircle from "../../src/assets/check-circle.svg";
import { PopupButton } from "react-calendly";
import { Link } from "react-router-dom";
import { getQueryParam } from '../components/getQueryParam';
import Faq from "../components/Faq";
import React, { useState, useEffect } from 'react';
const Ecommerce = () => {
    const [items, setItems] = useState([]);
    const fbclid = getQueryParam('fbclid');
    
    useEffect(() => {
        // Simulate an API call
        const fetchData = async () => {
          const data = [
            {
              "question": "What makes you different from others?",
              "answer": "We focus on Sales and growing your Business. While other designers just work on building a good-looking website, we work on making one that sells. Our goal is to crush your competitors, turn website visitors into buyers and bring you the biggest ROI possible."
            },
            {
              "question": "Do you work with big or small companies?",
              "answer": "Are you a business owner who is looking to grow and earn big? We can work with you. Whether you are just starting out or already have a brand established, we are happy to help you. It doesn't matter if you're a big or small company. Our clients range from small, local businesses with 5 or less employees to large multinational companies with a workforce of hundreds of people operating from all corners of the globe."
            },
            {
              "question": "Do I own my website domain and customer data?",
              "answer": "Yes Absolutely, you own your website domain and all the customer data you receive on your website."
            },
            {
              "question": "Do I need to purchase a domain name myself?",
              "answer": "If you already have a domain name purchased, then you will need to provide us access to the DNS panel for the domain. In case you haven’t booked a domain name yet, we can purchase it on your behalf. Annual domain booking fees will be applied additionally."
            },
            {
              "question": "Do I need to purchase my own hosting?",
              "answer": "No, all our websites include free premium hosting for limited time (please check the selected package details). After which you can purchase one of our hosting plans to continue hosting your site with us. In case you want to move it somewhere else, we are happy to shift it for you."
            },
            {
                "question": "How many days will it take for my website to go live?",
                "answer": "After you have subscribed, our team will contact you to discuss your project and install a “Coming Soon” landing page the very next day. Based upon the discussion, our expert team will start working on your website and go live within 15-40 days depending on your requirements."
              },
              {
                "question": "Will you write content for me?",
                "answer": "If you have already created content, then feel free to send us that. If not, our expert content team can write content for your site at a minimal fees."
              },
              {
                "question": "What access will I get on my website?",
                "answer": "You will get administrator access to your website which will allow you to edit the content, post news etc. However you can always send us the list of content changes you need and our team will make them for you at minimal cost."
              }
          ];
          setItems(data);
        };
    
        fetchData();
      }, []);
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
                        <Link target="_blank" to={`https://reliqus.com/client-testimonials/?fbclid=${fbclid}`} className='text-base font-medium bg-white text-black-2 rounded-md py-[10px] px-4 border-2 w-full transition ease-in-out hover:shadow-custom-hover'>Read Customer Testimonials</Link>
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
                        <div className="rounded-xl overflow-hidden relative max-w-[350px] bg-[#F3F5F9] bg-opacity-90">
                            <div className="">
                                <img className='w-full' src={marquee1} alt="" />
                            </div>
                            <div className="p-5">
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>“I really enjoy working with Ankit and his team”</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Meredith Wenger</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px] bg-[#F3F5F9] bg-opacity-90">
                            <div className="">
                                <img className='w-full' src={marquee2} alt="" />
                            </div>
                            <div className="p-5">
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Fantastic temperament. Highly professional. Excellent quality. Always responsive.</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>MZ Skin</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px] bg-[#F3F5F9] bg-opacity-90">
                            <div className="">
                                <img className='w-full' src={marquee3} alt="" />
                            </div>
                            <div className="p-5">
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Ankit and his team did a PHENOMENAL job for a very, very reasonable price!</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Handmade In Britain</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px] bg-[#F3F5F9] bg-opacity-90">
                            <div className="">
                                <img className='w-full' src={marquee5} alt="" />
                            </div>
                            <div className="p-5">
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Always going over the top to make sure quality is above expectations!</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Medical Gas Installers</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px] bg-[#F3F5F9] bg-opacity-90">
                            <div className="">
                                <img className='w-full' src={marquee4} alt="" />
                            </div>
                            <div className="p-5">
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>I felt like they were the only ones who really read what I was looking for & tried to offer a solution..</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Artful</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px] bg-[#F3F5F9] bg-opacity-90">
                            <div className="">
                                <img className='w-full' src={marquee6} alt="" />
                            </div>
                            <div className="p-5">
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Reliqus was great. They exceeded our expectations and gave great value for the cost!</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Gold Bank</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px] bg-[#F3F5F9] bg-opacity-90">
                            <div className="">
                                <img className='w-full' src={marquee9} alt="" />
                            </div>
                            <div className="p-5">
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>You just can't get a better result for the price!</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>WHC Labs</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px] bg-[#F3F5F9] bg-opacity-90">
                            <div className="">
                                <img className='w-full' src={marquee7} alt="" />
                            </div>
                            <div className="p-5">
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>"We are extremely fortunate to have found Ankit”</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>Saree Blouse Company</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px] bg-[#F3F5F9] bg-opacity-90">
                            <div className="">
                                <img className='w-full' src={marquee8} alt="" />
                            </div>
                            <div className="p-5">
                                <p className='font-medium text-sm text-black-2 text-opacity-80 mt-2'>Reliqus always deliver quality as well as over the top communication.</p>
                                <h5 className='text-xs font-bold text-black-2 mt-3'>The Furniture Park</h5>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden relative max-w-[350px] bg-[#F3F5F9] bg-opacity-90">
                            <div className="">
                                <img className='w-full' src={marquee10} alt="" />
                            </div>
                            <div className="p-5">
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
                    <div className="grow w-[100%] lg:w-[60%] p-5 grid grid-cols-4 gap-x-6 sm:gap-x-10 lg:gap-x-14 gap-y-6 sm:gap-y-8 place-items-center">
                        <img className='w-full' src={brand1} alt="" />
                        <img className='w-full' src={brand4} alt="" />
                        <img className='w-full' src={brand3} alt="" />
                        <img className='w-full' src={brand2} alt="" />
                        <img className='w-full' src={brand5} alt="" />
                        <img className='w-full' src={brand6} alt="" />
                        <img className='w-full' src={brand7} alt="" />
                        <img className='w-full' src={brand8} alt="" />
                    </div>
                </div>
               
            </section>

            <section className="bg-black-2 py-10 md:py-16 lg:py-24">
                <div className="max-w-[1300px] mx-auto px-5">
                    <h2 className="font-inter text-3xl md:text-5xl font-semibold mb-6 text-white md:leading-[60px] max-w-[100%] lg:max-w-[80%]">Enjoy <span className="text-yellow">RELIQUS's</span> world-class Web Development Services without breaking your bank</h2>
                    <p className="font-normal text-white text-opacity-70 pt-2 sm:pt-4 max-w-[100%] lg:max-w-[80%]">After working with over 400+ brands around the world, we can confidently  tell you, that a Premium Quality website should not cost you a fortune.  With our affordable website designs, we have helped our clients earn  more than $50 million in revenue from the web.</p>
                    <p class="text-white text-opacity-70 text-lg font-medium mt-5">Whether you are a small business or a big enterprise, when working with us, you'll receive a site that's:</p>
                    <div className="">
                        <ul className='gap-4 sm:gap-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                            <li className='flex gap-x-3 items-start font-medium text-base text-white bg-white bg-opacity-10 py-3 px-5 rounded'><img src={checkCircle}  alt="" /> Customized to Your Needs</li>
                            <li className='flex gap-x-3 items-start font-medium text-base text-white bg-white bg-opacity-10 py-3 px-5 rounded'><img src={checkCircle}  alt="" /> Mobile-Responsive Design</li>
                            <li className='flex gap-x-3 items-start font-medium text-base text-white bg-white bg-opacity-10 py-3 px-5 rounded'><img src={checkCircle}  alt="" /> Enhanced optimisation for SEO</li>
                            <li className='flex gap-x-3 items-start font-medium text-base text-white bg-white bg-opacity-10 py-3 px-5 rounded'><img src={checkCircle}  alt="" /> Maximize Conversion Rates</li>
                            <li className='flex gap-x-3 items-start font-medium text-base text-white bg-white bg-opacity-10 py-3 px-5 rounded'><img src={checkCircle}  alt="" /> Ensured Security with HTTPS</li>
                            <li className='flex gap-x-3 items-start font-medium text-base text-white bg-white bg-opacity-10 py-3 px-5 rounded'><img src={checkCircle}  alt="" /> Professionally Crafted Styling</li>
                        </ul>
                    </div>
                    <div className="text-center mt-8 sm:mt-12">
                    <Link target="_blank" to={`https://reliqus.com/about/?fbclid=${fbclid}`} className='text-base inline-block font-medium bg-white text-black-2 rounded-md py-[12px] px-10 w-full sm:w-auto transition ease-in-out hover:shadow-custom-hover'>Read More About Us</Link>
                </div>
                </div>
            </section>

            <section className="py-12 md:py-16 lg:py-24">
                <div className="max-w-[1300px] mx-auto px-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className=" bg-white shadow-custom-light p-5">
                            <span className=" inline-block font-inter font-semibold text-xs bg-yellow bg-opacity-30 py-2 px-3 rounded-3xl">Scalable Workforce</span>
                            <h3 className="text-5xl  sm:text-[54px] font-semibold font-inter mt-6">$50m</h3>
                            <h6 className="text-lg font-semibold text-black-2 text-opacity-70 mt-7">We let our numbers do the talking. $50 Million in reported client revenue and counting.</h6>
                        </div>
                        <div className=" bg-white shadow-custom-light p-5">
                            <span className=" inline-block font-inter font-semibold text-xs bg-yellow bg-opacity-30 py-2 px-3 rounded-3xl">Average ROI</span>
                            <h3 className="text-5xl  sm:text-[54px] font-semibold font-inter mt-6">980%</h3>
                            <h6 className="text-lg font-semibold text-black-2 text-opacity-70 mt-7">When we say your website is your salesman, we mean it. Over 980% ROI across 400 brands.</h6>
                        </div>
                        <div className=" bg-white shadow-custom-light p-5">
                            <span className=" inline-block font-inter font-semibold text-xs bg-yellow bg-opacity-30 py-2 px-3 rounded-3xl">Websites Developed</span>
                            <h3 className="text-5xl  sm:text-[54px] font-semibold font-inter mt-6">820+</h3>
                            <h6 className="text-lg font-semibold text-black-2 text-opacity-70 mt-7">Diverse experience in building more than 820 websites in different industries and niches.</h6>
                        </div>
                        <div className=" bg-white shadow-custom-light p-5">
                            <span className=" inline-block font-inter font-semibold text-xs bg-yellow bg-opacity-30 py-2 px-3 rounded-3xl">Satisfied Customers</span>
                            <h3 className="text-5xl  sm:text-[54px] font-semibold font-inter mt-6">400+</h3>
                            <h6 className="text-lg font-semibold text-black-2 text-opacity-70 mt-7">Brands who will vouch that Reliqus is the best agency they have worked with ever.</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-12 sm:pb-16 lg:pb-24">
                <div className="max-w-[640px] mx-auto px-5">
                    <h2 className="text-3xl text-4xl leading-[48px] font-semibold text-center">Frequently Asked Questions</h2>
                    <Faq items={items}/>
                </div>
            </section>
        </>
    )
}

export default Ecommerce;