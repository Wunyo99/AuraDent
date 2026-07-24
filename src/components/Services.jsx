import { section } from "framer-motion/client";
import React from "react";

export const services = [
  {
    id: 1,
    img: "https://t4.ftcdn.net/jpg/07/20/21/11/240_F_720211199_UPcuOG8RR6IJolrthn2AADlLspVEcRqd.jpg",
    title: "General Dentistry",
    description:
      "Comprehensive preventive and restorative dental care, including routine checkups, cleanings, fillings, and oral health assessments for patients of all ages.",
  },
  {
    id: 2,
    img: "https://t4.ftcdn.net/jpg/00/75/99/97/240_F_75999713_cxYfml2oZ0zbdLQYpeXhnH8AdS415qCY.jpg",
    title: "Cosmetic Dentistry",
    description:
      "Enhance the beauty of your smile with personalized cosmetic treatments such as veneers, bonding, smile makeovers, and aesthetic contouring.",
  },
  {
    id: 3,
    img: "https://t3.ftcdn.net/jpg/03/27/40/40/240_F_327404017_C0mx8nxGGLhoFQLsyE6jFsh2n9Qy8YHB.jpg",
    title: "Teeth Whitening",
    description:
      "Achieve a brighter, whiter smile safely with our advanced in-office and take-home whitening treatments designed for lasting results.",
  },
  {
    id: 4,
    img: "https://t4.ftcdn.net/jpg/04/15/24/45/240_F_415244597_onFjpza24gdunTGMQngvT9ZFcxZ7cLPG.jpg",
    title: "Dental Implants",
    description:
      "Replace missing teeth with durable, natural-looking dental implants that restore your smile, confidence, and chewing function.",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6Yf_4VANJJgHurZENP-FmFqW1yfOeDSDfwcEU0pxpQ&s=10",
    title: "Orthodontics",
    description:
      "Straighten misaligned teeth and improve your bite with modern orthodontic solutions, including clear aligners and traditional braces.",
  },
  {
    id: 6,
    img: "https://t4.ftcdn.net/jpg/06/13/44/65/240_F_613446520_KQhkIkBf2zQM5ZS2nFIQwpvHC5LF1erE.jpg",
    title: "Pediatric Dentistry",
    description:
      "Gentle and compassionate dental care for children in a welcoming environment that encourages healthy oral habits from an early age.",
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedwAfMvk1ldBQZokeH79ZZYqrVHPh8SK1BS9UGnsRRQ&s=10",
    title: "Root Canal Therapy",
    description:
      "Relieve tooth pain and save infected teeth with precise root canal treatments performed using advanced techniques for maximum comfort.",
  },
  {
    id: 8,
    img: "https://t4.ftcdn.net/jpg/19/20/12/37/240_F_1920123706_Vgk9DOXegdtXr0vAaC7BdCjkrXmetyhp.jpg",
    title: "Emergency Dental Care",
    description:
      "Immediate treatment for dental emergencies, including severe toothaches, broken teeth, knocked-out teeth, infections, and other urgent concerns.",
  },
];
const Services = () => {
  return (
    <section className="px-10 py-16" id="services">
      <div className="space-y-4 py- mb-12">
        <div className="flex items-center gap-1">
          <div className="w-8 h-0.5 bg-teal-600"></div>
          <span className="font-semibold tracking-wider text-teal-600 uppercase">
            Professional and Trained
          </span>
        </div>
        <h1 className="font-bold text-4xl">
          {" "}
          <span className="text-teal-600">Services</span> We Provide
        </h1>
        <p className="text-gray-500 font-medium max-w-xl">
          Transform your smile with our Dentistry services. From routine exams
          to smile makeovers, our expert team ensures comprehensive care for a
          confident and radiant smile.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {services.map((service) => (
          <div
            key={service.id}
            className="border group rounded-lg overflow-hidden hover:-translate-y-2 transition hover:shadow-lg hover:border-teal-600"
          >
            <div className="">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h4 className="text-xl font-bold text-teal-600 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
