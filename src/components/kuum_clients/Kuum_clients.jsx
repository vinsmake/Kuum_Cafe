import React, { useState } from "react";
import "./kuum_clients.css";

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
                    <label className="item" htmlFor="t-1">
                        <img src="https://dummyimage.com/150" alt="picture" />
                        <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                        <h2>- Princy, Web Developer</h2>
                    </label>
                    <label className="item" htmlFor="t-2">
                        <img src="https://dummyimage.com/150" alt="picture" />
                        <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                        <h2>- Princy, Web Developer</h2>
                    </label>
                    <label className="item" htmlFor="t-3">
                        <img src="https://dummyimage.com/150" alt="picture" />
                        <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                        <h2>- Princy, Web Developer</h2>
                    </label>
                    <label className="item" htmlFor="t-4">
                        <img src="https://dummyimage.com/150" alt="picture" />
                        <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                        <h2>- Princy, Web Developer</h2>
                    </label>
                    <label className="item" htmlFor="t-5">
                        <img src="https://dummyimage.com/150" alt="picture" />
                        <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                        <h2>- Princy, Web Developer</h2>
                    </label>
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
