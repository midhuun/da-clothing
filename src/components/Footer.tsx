import Call from '../assets/icons/phone.svg';
import Message from '../assets/icons/message-square.svg'
import Location from '../assets/icons/map-pin.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <div className="pt-[50px]">
    <footer className="md:flex justify-between bg-[#333333] p-6 text-[12px] md:text-[14px] text-white">
            <div className="flex flex-col md:gap-4">
              <div className="logo py-3">
                <h4 className="font-bold text-lg">DA Clothing <span>Manufacturer</span></h4>
                </div>

                <p className="flex items-center gap-4 font-semibold py-2">
                    <Link to="/">Home</Link>  
                </p>

                <p className="footer-company-name py-2">
                    Copyright © 2022- 2024<br />
                </p>
            </div>

            <div className="flex flex-col justify-center gap-2 md:gap-4">
                <div className="py-3 flex items-center gap-2 md:gap-4">
                    <img src={Location} alt="" />
                    <p><span>Perichipalayam</span> Tirupur</p>
                </div>

                <div className="flex items-center gap-4">
                <img src={Call} alt="" />
                    <p>+91 7010121851</p>
                </div>
                <div className="flex items-center gap-4 py-2">
                    <img src={Message} alt="" />
                    <p><a href="mailto:daclothingmanufacturer@gmail.com">daclothingmanufacturer@gmail.com</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about my-3">
                    <span className="font-bold ">Address</span>
                    <br  />
                   DA Clothing Manufacturer<br />
                   Meenakshi Compound<br />
                    Kadeshwara Marakadai Cross<br />
                    Tirupur – 641 604
                </p>
                <div className="footer-icons">
                    <a href="https://wa.me/919894358088?text=I%20am%20interested%20in%20buying%20your%20Products">
                        {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
                    </a>
                    <a href="tel:+9092958088">
                        {/* <FontAwesomeIcon icon={faPhone} /> */}
                    </a>
                    <a href="https://www.google.com/maps?q=11.053760,77.014175" target="_blank" rel="noopener noreferrer">
                        {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                    </a>
                </div>
            </div>
        </footer>
  </div>;
};

export default Footer;
