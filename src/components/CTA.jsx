import React from 'react'
import styles from '../style'

const ClientTestimonialCard = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-slate-50`}>
      <div className="bg-white rounded-[20px] p-8 shadow-2xl w-full max-w-[900px] border border-gray-200">
        <div className="flex-1 flex flex-col">
          {/* Header Card */}
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl mb-6 border border-gray-300">
            <h2 className={`${styles.heading2} text-black font-bold`}>
              Protecting Patient Data in Every Facility
            </h2>
            <p className={`${styles.paragraph} max-w-[600px] mt-4 text-black`}>
              KemGen supports small to mid-sized hospitals and clinics with high-end security
              that’s simple to integrate and highly effective in safeguarding sensitive health records.
            </p>
          </div>

          {/* Testimonials Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">EM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black">Dr. Elizabeth Muthoni</h4>
                  <p className="text-sm text-black">Director, Nairobi Wellness Centre</p>
                </div>
              </div>
              <p className="text-black">
                KemGen’s solutions have transformed the way we manage security and compliance. Patient trust has never been higher.
              </p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">KO</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black">Kevin Otieno</h4>
                  <p className="text-sm text-black">IT Manager, Kisumu Medical Hub</p>
                </div>
              </div>
              <p className="text-black">
                We finally have peace of mind knowing our patient records are protected with top-notch cybersecurity.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className={`${styles.paragraph} text-black`}>
              Trusted by healthcare providers across The United States Of America.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientTestimonialCard
