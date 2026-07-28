import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo2 from "../assets/logo-2.png";
import doctors2 from "../assets/doctors2.png";
import { motion } from "framer-motion";
const socialLinks = [
  {
    title: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
  {
    title: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    title: "Twitter",
    href: "#",
    icon: FaTwitter,
  },
  {
    title: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
  },
];
const Footer = () => {
  return (
    <footer className="px-5 md:px-10 py-16 bg-teal-600 rounded-t-4xl">
      <section>
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="text-5xl text-white max-w-md mb-5 font-semibold">
              Get The Smile You've Always Wanted
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((socialLink) => (
                <a
                  href={socialLink.href}
                  key={socialLink.title}
                  className="border p-2 rounded-full hover:bg-white text-white hover:text-teal-700 transition"
                >
                  <socialLink.icon size={20} className="" />
                </a>
              ))}
            </div>
          </motion.div>
          <div className="flex flex-col md:flex-row items-cente gap-15">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h4 className="font-semibold text-xl text-white mb-5">Company</h4>
              <div className="flex flex-col gap-2 text-black">
                <a href="#about" className="hover:text-white">
                  About
                </a>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
                <a href="#testimonials" className="hover:text-white">
                  Testimonials
                </a>
                <a href="#faq" className="hover:text-white">
                  FAQs
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h4 className="font-semibold text-xl text-white mb-5">
                Services
              </h4>
              <div className="flex flex-col gap-2 text-black">
                <a href="#" className="hover:text-white">
                  General Dentistry
                </a>
                <a href="#" className="hover:text-white">
                  Cosmetic Dentistry
                </a>
                <a href="#" className="hover:text-white">
                  Teeth Whitening
                </a>
                <a href="#" className="hover:text-white">
                  Dental Implants
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-5 flex flex-col md:flex-row gap-5 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex gap-2 items-center">
            <div className="bg-white rounded-full">
              {" "}
              <img src={logo2} alt="" className="w-15 md:w-50" />
            </div>
            <h5 className="text-5xl lg:text-9xl font-semibold text-teal-200 italic">
              AuraDent
            </h5>
          </div>
        </motion.div>
        <motion.div
                  initial={{ opacity: 0, x:20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={doctors2} alt="" className="w-70 md:w-150" />
        </motion.div>
      </section>
      <hr />
      <div className="text-center">
        <p className="py-2 text-white">
          © {new Date().getFullYear()} ALL RIGHT RESERVED BY{" "}
          <span className="font-semibold">AuraDent</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
