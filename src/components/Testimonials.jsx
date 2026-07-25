import React from "react";
import ScrollReelTestimonials from "./ui/ScrollReelTestimonials";
import CircularTestimonials from "./ui/CircularTestimonials";
const testimonials = [
  {
    id: 1,
    quote:
      "The team at AuraDent made my dental experience comfortable and stress-free. My smile has never looked better.",
    name: "Sarah Mitchell",
    designation: "Teeth Whitening Patient",
    src: "https://t3.ftcdn.net/jpg/08/40/41/52/240_F_840415264_pznQBMnhyIekqw6wZpPwwpc2iRFzbYcz.jpg",
  },
  {
    id: 2,
    quote:
      "Professional, friendly, and highly skilled dentists. I received excellent care from my first appointment.",
    name: "James Anderson",
    designation: "Dental Implant Patient",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    quote:
      "I finally found a dental clinic I trust. The staff is caring and the results are amazing.",
    name: "Emily Johnson",
    designation: "Cosmetic Dentistry Patient",
    src: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    quote:
      "The modern equipment and attention to detail exceeded my expectations. Highly recommended clinic.",
    name: "Michael Roberts",
    designation: "Root Canal Treatment Patient",
    src: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 5,
    quote:
      "My teeth whitening treatment was incredible. The entire process was easy and completely painless.",
    name: "Jessica Williams",
    designation: "Smile Makeover Patient",
    src: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 6,
    quote:
      "AuraDent provides outstanding dental care with a warm atmosphere and wonderful professionals.",
    name: "David Thompson",
    designation: "General Dentistry Patient",
    src: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    id: 7,
    quote:
      "From consultation to treatment, everything was handled with great care and professionalism.",
    name: "Sophia Martinez",
    designation: "Orthodontic Treatment Patient",
    src: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    id: 8,
    quote:
      "The dentists explained every step clearly and helped me feel confident throughout my treatment.",
    name: "Daniel Wilson",
    designation: "Cavity Treatment Patient",
    src: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 9,
    quote:
      "Excellent service, beautiful clinic, and amazing results. I would recommend AuraDent to everyone.",
    name: "Olivia Brown",
    designation: "Veneers Treatment Patient",
    src: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: 10,
    quote:
      "A truly exceptional dental experience with caring professionals who prioritize patient comfort.",
    name: "William Davis",
    designation: "Emergency Dental Care Patient",
    src: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];
const Testimonials = () => {
  return (
    <section className="px-10 py-16" id="testimonials">
      {/* <ScrollReelTestimonials testimonials={testimonials} /> */}
      <div className="text-center lg:text-start lg:flex space-y-4 justify-between mb-12">
        <h1 className="font-bold text-4xl lg:w-95">
          {" "}
          Testimonials From Our <span className="text-teal-600">Patients</span>
        </h1>
        <p className="text-gray-500 font-medium max-w-md">
          Our team of seasoned professionals is committed to delivering
          outstanding dental care that exceeds your expectations.
        </p>
      </div>
      <CircularTestimonials
        testimonials={testimonials}
        colors={{
          name: "#000",
          designation: "#009689",
          testimony: "#000",
          arrowBackground: "#111827",
          arrowForeground: "#ffffff",
          arrowHoverBackground: "#009689",
        }}
      />{" "}
    </section>
  );
};

export default Testimonials;
