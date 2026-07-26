const Appointment = () => {
  return (
    <section className="px-5 md:px-10 py-16">
      <div className="space-y-4 py- mb-12">
        <h1 className="font-bold text-4xl">
          {" "}
          Book Your <span className="text-teal-600">Appointment</span>
        </h1>
        <p className="text-gray-500 font-medium max-w-xl">
          Schedule your visit with our experienced dental team. Fill out the
          form below and we will contact you to confirm your appointment.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 order-2 lg:order-1 gap-6 justify-center">
          <div class="overflow-hidden rounded-xl group shadow-lg w-full h-65 col-span-1 lg:col-span-2">
            <img
              src="https://t4.ftcdn.net/jpg/18/94/30/75/240_F_1894307593_NtGhzMGScjRvNhHcxACtZuBQfnSxufc9.jpg"
              class="w-full object-cover h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="overflow-hidden rounded-xl group shadow-lg w-full group row-span-1 lg:row-span-2">
            <img
              src="https://t3.ftcdn.net/jpg/00/85/92/46/240_F_85924650_lLH9Qs6TbaGI5Kc4ms3Bx9B87y0vqSDR.jpg"
              class="w-full object-cover h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="overflow-hidden rounded-xl group shadow-lg w-full h-65">
            <img
              src="https://t3.ftcdn.net/jpg/06/06/46/36/240_F_606463645_vLcE3hrRa6fThojwiRbjxHnqNsNY0vTJ.jpg"
              class="w-full object-cover h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="overflow-hidden rounded-xl group shadow-lg w-full h-65">
            <img
              src="https://t4.ftcdn.net/jpg/02/40/98/17/240_F_240981737_n9BLtZw3LV0ySLBmssmlr2ClUwCv51Si.jpg"
              class="w-full object-cover h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="overflow-hidden rounded-xl group shadow-lg w-full h-65">
            <img
              src="https://t3.ftcdn.net/jpg/06/23/15/80/240_F_623158071_bbOk8C3pXUqDVuSLDGaRWRtj1GF5cWYi.jpg"
              class="w-full object-cover h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="overflow-hidden rounded-xl group shadow-lg w-full h-65 col-span-1 lg:col-span-2">
            <img
              src="https://t4.ftcdn.net/jpg/11/44/25/89/240_F_1144258964_qfJCQ07Z6YvsOPNTZqHkcNJ45TAyj7aw.jpg"
              class="w-full object-cover h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 shadow-xl p-5 h-fit lg:sticky lg:top-32 rounded-xl border">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="py-3 px-5 w-full bg-gray-50 border border-gray-200 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  required
                  className="py-3 px-5 w-full bg-gray-50 border border-gray-200 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+233 XX XXX XXXX"
                  required
                  className="py-3 px-5 w-full bg-gray-50 border border-gray-200 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700 font-medium">
                  Select Service
                </label>

                <select
                  className="py-3 px-5 w-full bg-gray-50 border border-gray-200 rounded-xl
        focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-gray-600"
                >
                  <option value="">Choose a service</option>
                  <option value="general">General Dentistry</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="implant">Dental Implants</option>
                  <option value="orthodontics">Orthodontics</option>
                  <option value="pediatric">Pediatric Dentistry</option>
                  <option value="root-canal">Root Canal Therapy</option>
                  <option value="emergency">Emergency Care</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700 font-medium">
                  Preferred Date
                </label>

                <input
                  type="date"
                  className="py-3 px-5 w-full bg-gray-50 border border-gray-200 rounded-xl
        focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-gray-600"
                />
              </div>

              {/* Time */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700 font-medium">
                  Preferred Time
                </label>

                <select
                  className="py-3 px-5 w-full bg-gray-50 border border-gray-200 rounded-xl
        focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-gray-600"
                >
                  <option value="">Select time</option>
                  <option>Morning (8:00 AM - 12:00 PM)</option>
                  <option>Afternoon (12:00 PM - 4:00 PM)</option>
                  <option>Evening (4:00 PM - 6:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700 font-medium">
                Additional Information
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your dental concern..."
                className="py-3 px-5 w-full bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-10 py-3.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition duration-300 shadow-lg shadow-teal-600/20 cursor-pointer"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
