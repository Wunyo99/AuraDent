import { BadgeCheck, Microscope, UserRoundCheck } from "lucide-react";
const features = [
  {
    icon: <BadgeCheck className=" text-teal-600" size={45} />,
    title: "Satisfaction Guarantee",
    description:
      "We're committed to delivering exceptional dental care and ensuring every patient leaves with confidence.",
  },
  {
    icon: <Microscope className=" text-teal-600" size={45} />,
    title: "Advanced Technology",
    description:
      "State-of-the-art digital equipment provides precise diagnoses and comfortable treatments.",
  },
  {
    icon: <UserRoundCheck className=" text-teal-600" size={45} />,
    title: "Professional Dentists",
    description:
      "Our experienced and licensed dental professionals provide personalized care for every smile.",
  },
];
const WhyChooseUs = () => {
  return (
    <section className="px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((feature) => (
          <div
            key={feature}
            className="border rounded-xl p-4 flex flex-col hover:-translate-y-2 transition hover:shadow-lg justify-center items-center gap-5"
          >
            <div className="">{feature.icon}</div>
            <div className="text-center">
              <h4 className="text-xl font-medium text-teal-600">
                {feature.title}
              </h4>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
