import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const doctors = [
  {
    id: 1,
    image:
      "https://t4.ftcdn.net/jpg/02/40/39/83/240_F_240398355_EzWksPe0LyyJPijvxCMYin8Po5MhVxwZ.jpg",
    name: "Dr. Emily Carter",
    speciality: "General Dentist",
    experience: "12 Years",
    description:
      "Dedicated to providing gentle, comprehensive dental care for every patient.",
  },
  {
    id: 2,
    image: "https://t4.ftcdn.net/jpg/01/46/80/45/240_F_146804560_qRAQ9BAuRGeCNK1UchWNHpneOQo6Aldr.jpg",
    name: "Dr. Michael Anderson",
    speciality: "Cosmetic Dentist",
    experience: "10 Years",
    description:
      "Creates beautiful, natural-looking smiles using advanced cosmetic dental techniques.",
  },
  {
    id: 3,
    image: "https://t4.ftcdn.net/jpg/02/45/68/59/240_F_245685948_48nzHdSrq9UVbkAREiIIQuqFSIM500nu.jpg",
    name: "Dr. Sophia Bennett",
    speciality: "Orthodontist",
    experience: "14 Years",
    description:
      "Helping patients achieve perfectly aligned smiles with personalized orthodontic treatments.",
  },
  {
    id: 4,
    image: "https://t3.ftcdn.net/jpg/02/40/98/40/240_F_240984034_qWMaSsYBY3lwk2U4Dtl1WLePddVFId1y.jpg",
    name: "Dr. James Wilson",
    speciality: "Oral Surgeon",
    experience: "15 Years",
    description:
      "Performs complex oral surgeries expertly with precision, care, and patient comfort.",
  },
  {
    id: 5,
    image: "https://t4.ftcdn.net/jpg/04/71/34/39/240_F_471343907_dBJ47ZINOFlKGXymhT2mkfgvnnusHL9H.jpg",
    name: "Dr. Olivia Thompson",
    speciality: "Pediatric Dentist",
    experience: "9 Years",
    description:
      "Making children's dental visits enjoyable through compassionate, friendly, expert care.",
  },
  {
    id: 6,
    image: "https://t3.ftcdn.net/jpg/02/39/92/14/240_F_239921437_zkw6VQ9aFpAS6xpBqcKB2Is0VbTKLiKA.jpg",
    name: "Dr. Daniel Roberts",
    speciality: "Endodontist",
    experience: "11 Years",
    description:
      "Specializes in pain-free root canal treatments using modern dental technology.",
  },
  {
    id: 7,
    image: "https://t3.ftcdn.net/jpg/00/75/94/68/240_F_75946889_slxDRkhd0aQcCWkfA015v8wbx65ma6RJ.jpg",
    name: "Dr. Isabella Moore",
    speciality: "Periodontist",
    experience: "13 Years",
    description:
      "Focused on healthy gums through advanced periodontal care and prevention.",
  },
  {
    id: 8,
    image: "https://t3.ftcdn.net/jpg/00/96/01/26/240_F_96012689_u6TDoM1XHJ4mBAa6CM3HjL2eEngpn6eX.jpg",
    name: "Dr. Ethan Harris",
    speciality: "Implant Specialist",
    experience: "16 Years",
    description:
      "Restoring confident smiles with durable, natural-looking dental implant solutions.",
  },
];

const socialLinks = [
  {
    title: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
  {
    title: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
  },
  {
    title: "Twitter",
    href: "#",
    icon: FaTwitter,
  },
];
const icons = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};
const Dentists = () => {
  return (
    <section className="px-10 py-16 bg-teal-50" id="doctors">
      <div className="space-y-4 py- mb-12">
        <div className="flex items-center justify-center lg:justify-start gap-1">
          <div className="w-8 h-0.5 bg-teal-600"></div>
          <span className="font-semibold tracking-wider text-teal-600 uppercase">
            Experienced and Skilled
          </span>
        </div>
        <h1 className="font-bold text-4xl text-center lg:text-start">
          {" "}
          Meet Our <span className="text-teal-600">Expert Dentists</span>
        </h1>
        <p className="text-gray-500 font-medium max-w-xl mx-aut text-center mx-auto lg:text-start lg:mx-0">
          Our team of seasoned professionals is committed to delivering
          outstanding dental care that exceeds your expectations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {doctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            className="borde group rounded-xl overflow-hidden hover:-translate-y-2 transition relative"
          >
            <div>
              <img
                src={doctor.image}
                alt={doctor.name}
                className="rounded-4xl"
              />
            </div>
            <motion.div
              className="flex flex-col gap-2 absolute top-8 inset-e-2 opacity-100 lg:opacity-0 translate-x-0 lg:translate-x-4 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 "
            >
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  className="bg-teal-600 flex items-center justify-center rounded-full text-white w-10 h-10"
                >
                  {<link.icon />}
                </a>
              ))}
            </motion.div>
            <div className="p-4 space-y-4 mt-5 bg-white border group-hover:border-teal-600 rounded-4xl">
              <div className="flex justify-between">
                <div className="">
                  <h5 className="text-teal-600 font-semibold">{doctor.name}</h5>
                  <p className="text-sm text-gray-500">{doctor.speciality}</p>
                </div>
                <div className="text-sm text-center">
                  <h6 className="font-semibold">{doctor.experience}</h6>
                  <p>Experience</p>
                </div>
              </div>

              <p className="text-sm text-gray-500">{doctor.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Dentists;
