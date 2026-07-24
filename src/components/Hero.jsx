import { MoveRight, Search } from "lucide-react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="h-screen flex items-center justify-center md:justify-start overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/06/48/55/72/240_F_648557265_JIjNtL5RdUZ8AHdgBh7PkIMQqdinaOgB.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl px-6 md:px-15 text-center md:text-start space-y-10 z-10"
        >
          <h1 className="text-4xl md:text-8xl text-white font-bold">
            Seemless <span className="text-teal-700">Dental Care</span>
          </h1>

          <p className="text-white/90 font-medium text-xl">
            Premium dental care designed around your comfort, health, and
            confidence.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
            <a
              to="/jobs"
              className="flex items-center gap-2 bg-white text-teal-700 py-3 px-5 rounded-full font-bold hover:bg-teal-700 cursor-pointer hover:text-white duration-300"
            >
              <span>Book Appointment</span>
              <MoveRight />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
