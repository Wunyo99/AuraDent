import { Calendar, Mail, MapPinIcon, Phone } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <Phone size={35} className="text-teal-600" />,
    title: "Emergency Phone",
    info1: "(+233) 23456789",
    info2: "Mon-Fri 8AM-6PM",
  },
  {
    icon: <MapPinIcon size={35} className="text-teal-600" />,
    title: "Location",
    info1: "Spintex",
    info2: "Accra, Ghana",
  },
  {
    icon: <Calendar size={35} className="text-teal-600" />,
    title: "Book by Phone",
    info1: "(+233) 456-7890",
    info2: "(+233) 456-7890",
  },
  {
    icon: <Mail size={35} className="text-teal-600" />,
    title: "Email Us",
    info1: "info@auradent.com",
    info2: "contact@auradent.com",
  },
];
const Contact = () => {
  return (
    <section className="px-5 lg:px-10 py-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {contacts.map((item, index) => (
          <div
            key={index}
            className="p-4 border-e-3 hover:border-e-teal-600 transition hover:-translate-y-2"
          >
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <div className="text-center">
              <h5 className="text-teal-600 font-semibold mb-1">{item.title}</h5>
              <p className="text-sm text-gray-500 font-medium">{item.info1}</p>
              <p className="text-sm text-gray-500 font-medium">{item.info2}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
