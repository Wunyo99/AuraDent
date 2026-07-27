import { div } from "framer-motion/client";

const stats = [
  {
    value: "15+",
    label: "Years of Experience",
    bg: "bg-red-200",
    color: "text-red-600",
  },
  {
    value: "5,000+",
    label: "Happy Patients",
    bg: "bg-blue-200",
    color: "text-blue-600",
  },
  {
    value: "98%",
    label: "Patient Satisfaction",
    bg: "bg-green-200",
    color: "text-green-600",
  },
  {
    value: "12",
    label: "Expert Dentists",
    bg: "bg-yellow-200",
    color: "text-yellow-600",
  },
];
const About = () => {
  return (
    <section className="px-10 py-16" id="about">
      <div className="flex items-center justify-center lg:justify-start gap-1">
        <div className="w-8 h-0.5 bg-teal-600"></div>
        <span className="font-semibold tracking-wider text-teal-600 uppercase">
          About Us
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="space-y-4">
          <h4 className="text-4xl text-center lg:text-start md:text-5xl font-bold">
            Short Story About{" "}
            <span className="text-teal-600">AuraDent Clinic</span>
          </h4>
          <p className="text-gray-500">
            At AuraDent, we are passionate about creating healthy, confident
            smiles through exceptional dental care. Our team of skilled
            professionals combines modern technology with personalized treatment
            to provide comfortable and effective solutions for every patient.
            From preventive care to advanced dental procedures, we are committed
            to making your dental experience simple, relaxing, and rewarding.
          </p>
          <div className="grid grid-cols-2 gap-">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center p-4 rounded-x text-center ${stat.bg} `}
              >
                <h5 className={`text-center font-bold text-2xl ${stat.color}`}>
                  {stat.value}
                </h5>
                <p className=" text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/11/77/93/80/240_F_1177938045_Wy1ek0DCs6xW3pdrCtuiVpsr9MdnYDwv.jpg"
            alt=""
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
