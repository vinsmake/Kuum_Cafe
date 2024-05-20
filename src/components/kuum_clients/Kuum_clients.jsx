import React, { useState } from "react";
import "./kuum_clients.css";
import {kuum_clients} from "../../data.js"

export const Kuum_clients = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState("t-3");

    return (
        <div className="kuum__clients">
            <div className="kuum__clients__slider">
                <input
                    type="radio"
                    name="testimonial"
                    id="t-1"
                    checked={selectedTestimonial === "t-1"}
                    onChange={() => setSelectedTestimonial("t-1")}
                />
                <input
                    type="radio"
                    name="testimonial"
                    id="t-2"
                    checked={selectedTestimonial === "t-2"}
                    onChange={() => setSelectedTestimonial("t-2")}
                />
                <input
                    type="radio"
                    name="testimonial"
                    id="t-3"
                    checked={selectedTestimonial === "t-3"}
                    onChange={() => setSelectedTestimonial("t-3")}
                />
                <input
                    type="radio"
                    name="testimonial"
                    id="t-4"
                    checked={selectedTestimonial === "t-4"}
                    onChange={() => setSelectedTestimonial("t-4")}
                />
                <input
                    type="radio"
                    name="testimonial"
                    id="t-5"
                    checked={selectedTestimonial === "t-5"}
                    onChange={() => setSelectedTestimonial("t-5")}
                />
                <div className="kuum__clients__slider__testimonials">

                {kuum_clients.map((client, index) => (
        <label className="item" htmlFor={`t-${index + 1}`} key={index}>
          <img src={client.image} alt={client.profile} />
          <p>{client.text}</p>
          <h2>- {client.profile}</h2>
        </label>
      ))}
                    
                </div>
                <div className="kuum__clients__slider__dots">
                    <label htmlFor="t-1"></label>
                    <label htmlFor="t-2"></label>
                    <label htmlFor="t-3"></label>
                    <label htmlFor="t-4"></label>
                    <label htmlFor="t-5"></label>
                </div>
            </div>
        </div>
    );
}
