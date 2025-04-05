import React from 'react';
import { threat } from '../assets';
import styles, { layout } from '../style';

const securityPoints = [
  {
    title: 'Patient Data Protection',
    description: 'Ensure sensitive medical information is encrypted and only accessible to authorized personnel.',
  },
  {
    title: 'Compliance with Regulations',
    description: 'Meet HIPAA and local health laws with robust cybersecurity protocols and data handling policies.',
  },
  {
    title: 'Prevent Cyber Attacks',
    description: 'Guard against threats like ransomware and phishing that target hospitals and clinics.',
  },
  {
    title: 'Build Trust with Patients',
    description: 'Secure systems build confidence among patients, fostering loyalty and peace of mind.',
  },
];

const Card = ({ title, description }) => (
  <div className='bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/10'>
    <h3 className='text-white text-xl font-semibold mb-2'>{title}</h3>
    <p className='text-white text-sm'>{description}</p>
  </div>
);

const HealthcareSecurity = () => {
  return (
    <section id='security' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Why <span className='text-gradient'>Healthcare Security</span> Matters
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          As healthcare systems digitize, protecting medical data is no longer optional — it's essential. KemGen equips healthcare providers with tools to stay safe in an evolving digital world.
        </p>

        <div className='grid sm:grid-cols-2 gap-4 mt-8'>
          {securityPoints.map((point, index) => (
            <Card key={index} title={point.title} description={point.description} />
          ))}
        </div>
      </div>

      <div className={layout.sectionImg}>
        <img
          src={threat}
          alt='healthcare security'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>
    </section>
  );
};

export default HealthcareSecurity;
