// import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import { MdCopyright } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../Images/IIITULogo.png"

const Footer = () => {
  return (
    <div>
      <div className={styles.main_footer}>
        <div className={styles.left_footer}>
          <img src={logo} alt="institute_logo" className={styles.inst_logo} />
          <div className={styles.left_footer_break}>
            <div className={styles.name_add_footer}>
              <p>Indian Institute of Information Technology Una</p>
              <p className={styles.add_footer}>
                Vill. Saloh , Teh. Haroli , Distt. Una , HP_177209
              </p>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <div style={{ marginTop: "5px" }} className={styles.contact_info}>
                <IoMdCall />
                <a href="tel:01975-257902">: 01975_257908</a>
              </div>
              <div className={styles.contact_info}>
                <IoMdMail />
                <a href="mail:director@iiitu.ac.in">: director@iiitu.ac.in</a>
              </div>
              <div className={styles.contact_info}>
                <HiGlobeAsiaAustralia />
                <a href="mail:www.iiitu.ac.in">: www.iiitu.ac.in</a>
              </div>
            </div>
            <div className={styles.social_media_div}>
              <a>
                <FaFacebook />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaTwitter />
              </a>
              <a>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.right_footer}>
          <div className={styles.right_footer_left}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Updates</Link>
              </li>
              <li>
                <Link>Admissions</Link>
              </li>
              <li>
                <Link>Departments</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Recruitment</Link>
              </li>
              <li>
                <Link>Print Media</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right_footer_mid}>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link>Campus</Link>
              </li>
              <li>
                <Link>Academics</Link>
              </li>
              <li>
                <Link>How to Reach</Link>
              </li>
              <li>
                <Link>Rules</Link>
              </li>
            </ul>
          </div>
          <div className={styles.divider_bottom}></div>
          <div className={styles.right_footer_right}>
            <h4>Locate on Map</h4>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5655690484864!2d76.18810981009128!3d31.481134648973974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb198180014f%3A0xbf76347093a3aa9a!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Una!5e0!3m2!1sen!2sin!4v1712491735188!5m2!1sen!2sin"
              width="300"
              height="275"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.bottom_footer}>
        <p>Copyright</p>
        <MdCopyright />
        <p>2023</p>
      </div>
    </div>
  );
};

export default Footer;
