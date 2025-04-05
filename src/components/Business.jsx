import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Focus on your business, <br className='sm:block hidden'/> 
          we ensure your business and asset safety 24/7.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With KemGen's reliable and cost-effective cybersecurity services,
          we provide robust protection and hassle-free financial management,
          ensuring your business runs smoothly while safeguarding your assets.
        </p>
        {/* Card Section for Texts */}
        <div className="flex flex-wrap mt-10">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-8 rounded-lg text-white flex-1 min-w-[250px] mx-4 my-4">
            <h3 className="font-poppins font-semibold text-[20px] leading-[28px] mb-2">
              Business Security
            </h3>
            <p className="font-poppins font-normal text-[16px] leading-[24px]">
              Our services ensure your business operations are secured and protected from cyber threats.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-8 rounded-lg text-white flex-1 min-w-[250px] mx-4 my-4">
            <h3 className="font-poppins font-semibold text-[20px] leading-[28px] mb-2">
              Asset Protection
            </h3>
            <p className="font-poppins font-normal text-[16px] leading-[24px]">
              We safeguard your assets with continuous monitoring and state-of-the-art encryption.
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-lg text-white flex-1 min-w-[250px] mx-4 my-4">
            <h3 className="font-poppins font-semibold text-[20px] leading-[28px] mb-2">
              24/7 Monitoring
            </h3>
            <p className="font-poppins font-normal text-[16px] leading-[24px]">
              We provide round-the-clock monitoring to ensure that your business is always safe.
            </p>
          </div>
        </div>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
