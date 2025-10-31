import React from 'react'
import { FaTruck, FaShieldAlt, FaHeadset, FaTags } from "react-icons/fa";

const features = [
  { icon: <FaTruck />, title: "Return & Refund", desc: "Money back guarantee" },
  { icon: <FaShieldAlt />, title: "Secure Payment", desc: "30% off by subscribing" },
  { icon: <FaHeadset />, title: "Quality Support", desc: "Always online 24/7" },
  { icon: <FaTags />, title: "Daily Offers", desc: "20% off by subscribing" },
];
export default function Details() {
  return (
    <div className='d-flex flex-row justify-content-around p-5 mx-5 my-5' style={{
        backgroundColor:"#FFE8E2",
        height:"300px"
    }}>
        <div className='row'>
            {features.map((item,index)=>(
                 <div className="col-md-3 mb-4 d-flex" key={index}>
              <div
                className="p-4 rounded shadow-sm"
                style={{ color: "#FF6B5C" }}
              >
             <div className='d-flex flex-row gap-4'> 
                <div className="fs-1 mb-3">{item.icon}</div>
               <div> <h5 className="fw-bold text-dark">{item.title}</h5>
                <p className="text-secondary fw-bold">{item.desc}</p></div></div>
              </div>
            </div>
            ))}
        </div>

        
    </div>
  )
}
