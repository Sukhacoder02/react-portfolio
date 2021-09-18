import React from "react";
import "./Testimonial.scss";
import data from "./data";

export default function Testimonial() {
    return (
        <div className="testimonial" id="testimonial">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => {
                    return (
                        <div className={d.featured ? "card featured" : "card"}>
                            <div className="top">
                                <img
                                    className="left"
                                    src="assets/right-arrow.png"
                                    alt=""
                                />
                                <img className="user" src={d.img} alt="" />
                                <img className="right" src={d.icon} alt="" />
                            </div>
                            <div className="center">{d.desc}</div>
                            <div className="bottom">
                                <h3>{d.name}</h3>
                                <h4>{d.title}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
