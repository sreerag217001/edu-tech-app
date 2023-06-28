import React from 'react'
import './Plan.css';
function Plan() {
    const pricingData = [
        {
            title: "Regular Member",
            price: "$0",
            duration: '/month',
            color: '#fff',
            features: [
                'Unlimited access to the courses',
                'Customer Support',
                'Personal Mentor',
                'Standared Option',
                '5 classes per week'
            ]
        },
        {
            title: "Premium Member",
            price: "$100",
            duration: '/month',
            color: '#6f55f2',
            features: [
                'Unlimited access to the courses',
                'Customer Support',
                'Personal Mentor',
                'Standared Option',
                '5 classes per week'
            ]
        },
        {
            title: "Standared Member",
            price: "$10",
            duration: '/month',
            color: '#fff',
            features: [
                'Unlimited access to the courses',
                'Customer Support',
                'Personal Mentor',
                'Standared Option',
                '5 classes per week'
            ]
        },
    ];
    return (
        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">
                    Premium Pricing Planning
                </h2>
                <p>Unlock elite tech services with our Premium Pricing Plan and soar ahead of the competition</p>
            </div>
            <div className="pricing-wrapper">
                {
                    pricingData.map((pricingItem, index) => (
                        <div className="pricing-item" key={index}>
                            <div className="pricing-card-top" style={{ background: pricingItem.color }} >
                                <h2 className="section-title">{pricingItem.title}</h2>
                                <h2 className="pricing-section-title">
                                    {pricingItem.price} <span>{pricingItem.duration}</span>
                                </h2>
                            </div>
                            <div className="services">
                                <ul>
                                    {pricingItem.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <button className="register-btn">Join</button>
                            </div>
                        </div>
                    ))
                }




            </div>
        </div>
    )
}

export default Plan