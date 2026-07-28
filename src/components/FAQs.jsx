import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const items = [
  {
    value: "item-1",
    trigger: "How often should I visit the dentist?",
    content:
      "We recommend visiting the dentist every six months for routine checkups and cleanings. Regular visits help detect problems early and maintain excellent oral health.",
  },
  {
    value: "item-2",
    trigger: "Is dental treatment painful?",
    content:
      "Our team focuses on providing comfortable, pain-free treatments using modern techniques and advanced technology. We ensure every patient feels relaxed throughout their visit.",
  },
  {
    value: "item-3",
    trigger: "What dental services do you offer?",
    content:
      "We offer a wide range of services including general dentistry, teeth whitening, dental implants, orthodontics, cosmetic dentistry, root canals, and emergency dental care.",
  },
  {
    value: "item-4",
    trigger: "How long does a dental appointment take?",
    content:
      "Appointment times vary depending on the treatment. Routine checkups usually take around 30 to 60 minutes, while advanced procedures may require more time.",
  },
  {
    value: "item-5",
    trigger: "Do you accept dental insurance?",
    content:
      "Yes, we work with many insurance providers and offer flexible payment options. Contact our clinic to learn more about your coverage and available plans.",
  },
  {
    value: "item-6",
    trigger: "What should I do during a dental emergency?",
    content:
      "If you experience severe tooth pain, a broken tooth, or any dental emergency, contact us immediately. Our team provides prompt care to relieve pain and protect your oral health.",
  },
  {
    value: "item-7",
    trigger: "How can I improve my smile?",
    content:
      "We offer several smile enhancement options including teeth whitening, veneers, orthodontics, and cosmetic treatments. Our dentists will recommend the best solution based on your goals.",
  },
  {
    value: "item-8",
    trigger: "At what age should children visit the dentist?",
    content:
      "Children should have their first dental visit around their first birthday or when their first tooth appears. Early visits help establish healthy habits and prevent future problems.",
  },
];

const FAQs = () => {
  return (
    <section
      className="py-16 text-white bg-cover bg-center bg-teal-50"
      id="faqs"
    >
      <div className="container z-20 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="mt-4 text-black text-4xl font-semibold">
            Frequently <span className="text-teal-600">Asked Questions</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-black">
            Get answers to the most common questions about our dental
            treatments, appointments, and services.
          </p>
        </motion.div>

        <motion.div
                  initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="mx-auto max-w-4xl space-y-2"
          >
            {items.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="rounded-l border border-gray-200 bg-gray-200 px-6 transition hover:border-teal-600"
              >
                <AccordionTrigger className="py-6 text-black text-left text-lg hover:no-underline">
                  {item.trigger}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-base leading-7 text-black">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>{" "}
        </motion.div>
      </div>
    </section>
  );
};
export default FAQs;
