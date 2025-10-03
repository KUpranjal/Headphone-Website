import React from 'react'
import Icons1 from "../../assets/icons/obj1.png"
import Icons2 from "../../assets/icons/obj2.png"
import Icons3 from "../../assets/icons/obj3.png"

const serviceData = [
  {
    id: 1,
    title: "Security",
    icons: Icons1,
    desc: "Encrypted firmware, secure pairing, authentication, AES encryption, anti-tampering, encrypted signals, secure boot, physical protection, privacy",
    delay: 0.5
  },
  {
    id: 2,
    title: "Guarantee",
    icons: Icons2,
    desc: "Warranty coverage, quality assurance, refund policy, repair services, satisfaction guarantee, product replacement, limited warranty, customer support, defect protection, manufacturer guarantee.",
    delay: 0.8
  },
  {
    id: 3,
    title: "Affordability",
    icons: Icons3,
    desc: "Cost-effective, budget-friendly, value-priced, economical, low-cost, competitive pricing, accessible, affordable quality, cost-efficient, price-cons",
    delay: 1.1
  }
]

const Services = () => {
  return (
    <>
      <section className='bg-gray-100 font-sans py-8'>
        <div className="container py-14 ">
          <h1 className=' text-3xl font-bold text-center pb-10'>Services</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {serviceData.map((data) => (
            <div key={data.id} className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg'>
              <img src={data.icons} alt={data.title} className='w-[100px] mb-4' />
              <div className='text-center space-y-2'>
                <h1 className='text-2xl font-bold'>
                  {data.title}
                </h1>
                <p className='text-center text-sm text-black/75'>
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
