import React, { useState } from 'react';
import Button from './Button';
import styles, { layout } from '../style';

const PaymentModal = ({ amount, onClose, onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    routingNumber: '',
    accountName: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      amount,
      paymentMethod,
      details: paymentMethod === 'card' ? cardDetails : bankDetails
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-black">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Pay ${amount}/month</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black mb-2">Payment Method</label>
            <div className="flex gap-4 text-black">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="mr-2"
                />
                Credit/Debit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                  className="mr-2"
                />
                Bank Transfer
              </label>
            </div>
          </div>

          {paymentMethod === 'card' ? (
            <>
              <div className="mb-4">
                <label className="block text-black mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                  className="w-full p-2 border rounded text-black"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-black mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                    className="w-full p-2 border rounded text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-black mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                    className="w-full p-2 border rounded text-black"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                  className="w-full p-2 border rounded text-black"
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-black mb-2">Account Number</label>
                <input
                  type="text"
                  value={bankDetails.accountNumber}
                  onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value})}
                  className="w-full p-2 border rounded text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">Routing Number</label>
                <input
                  type="text"
                  value={bankDetails.routingNumber}
                  onChange={(e) => setBankDetails({...bankDetails, routingNumber: e.target.value})}
                  className="w-full p-2 border rounded text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">Account Name</label>
                <input
                  type="text"
                  value={bankDetails.accountName}
                  onChange={(e) => setBankDetails({...bankDetails, accountName: e.target.value})}
                  className="w-full p-2 border rounded text-black"
                  required
                />
              </div>
            </>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-black"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Pay ${amount}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SecurityPackageCard = ({ price, description, services, isRecommended, onSelect }) => (
  <div 
    className={`
      bg-gradient-to-r from-indigo-500 to-blue-500 
      p-8 rounded-lg text-black w-[380px] min-h-[600px] 
      transition-all duration-300 
      hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30 
      hover:from-indigo-600 hover:to-blue-600
      flex-shrink-0 relative overflow-hidden cursor-pointer
      ${isRecommended ? 'border-4 border-yellow-500' : ''}
    `}
    onClick={() => onSelect(price)}
  >
    {isRecommended && (
      <div className="absolute inset-0 bg-yellow-500 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    )}
    
    <h3 className="font-poppins font-semibold text-[24px] leading-[32px] mb-4">
      ${price}/month
    </h3>
    <p className="font-poppins font-normal text-[16px] leading-[24px] mb-4">
      {description}
    </p>

    <div className="mt-4">
      <h5 className="font-poppins font-semibold text-[18px] mb-2">Services Included:</h5>
      <ul className="list-disc ml-6 space-y-2 text-black">
        {services.map((service, index) => (
          <li key={index} className="font-poppins font-normal text-[16px] hover:text-white transition-colors duration-200">
            {service}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="mt-6">
      <Button styles='w-full hover:bg-white hover:text-blue-600 transition-colors duration-300' />
    </div>
    {isRecommended && (
      <span className="text-yellow-500 font-semibold mt-4 block text-center animate-pulse">
        Recommended
      </span>
    )}
  </div>
);

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePackageSelect = (price) => {
    setSelectedPackage(price);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = (paymentData) => {
    console.log('Payment submitted:', paymentData);
    setShowPaymentModal(false);
    alert(`Payment of $${paymentData.amount} submitted successfully!`);
  };

  const enterpriseServices = [
    'Continuous full-scope testing',
    'Advanced API pentesting',
    'Cloud security audit',
    'Free Penetration Testing',
    'Red Team testing',
    'Threat intelligence',
    '24/7 incident response',
    'Executive reports',
    'Security training'
  ];

  const advancedProtectionServices = [
    'Manual penetration testing',
    'API security testing',
    'Free Penetration Testing',
    'Cloud security assessment',
    'Phishing simulations',
    'Compliance validation',
    'Dark web monitoring',
    'Detailed test reports'
  ];

  const essentialSecurityServices = [
    'Vulnerability scanning',
    'Free Penetration Testing',
    'Automated assessment',
    'Compliance guidance',
    'Recommendations report'
  ];

  return (
    <section className={layout.section}>
      {showPaymentModal && (
        <PaymentModal
          amount={selectedPackage}
          onClose={() => setShowPaymentModal(false)}
          onSubmit={handlePaymentSubmit}
        />
      )}
      
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-black`}>
          Find security for your healthcare facilities <br className='sm:block hidden'/> in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
          Protect your healthcare business with our security packages.
        </p>

        <div className="flex overflow-x-auto pb-4 gap-6 mt-10 w-full hide-scrollbar">
          <SecurityPackageCard 
            price={1500} 
            description="Enterprise Security for large hospitals and health-tech enterprises." 
            services={enterpriseServices}
            onSelect={handlePackageSelect}
          />
          <SecurityPackageCard 
            price={1000} 
            description="Advanced Protection for medium-sized clinics and startups." 
            services={advancedProtectionServices}
            isRecommended={true}
            onSelect={handlePackageSelect}
          />
          <SecurityPackageCard 
            price={500} 
            description="Essential Security for small clinics and private practices." 
            services={essentialSecurityServices}
            onSelect={handlePackageSelect}
          />
        </div>
      </div>
    </section>
  );
};

export default Packages;
