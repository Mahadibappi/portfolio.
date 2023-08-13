import React from "react";
import "./testimonial.css";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import person1 from "../assets/person-1.png";
import person2 from "../assets/person-2.png";
import person3 from "../assets/person-3.jpeg";

const testemonial = [
  {
    id: 1,
    name: " Seth Ivan",
    img: person2,
    text: " He did amazing work i prefer more his work clean and understanding.",
  },
  {
    id: 2,
    name: " Riley Gilbert",
    img: person1,
    text: "Mahadi is a very good coder i am satisfied by his work go ahead.",
  },

  {
    id: 3,
    name: "Wade Dave ",
    img: person3,
    text: "Nice job you have done your project is very good it's full fill my requirements.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Here's What People are Saying About My Work.</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testemonial.map(({ id, name, img, text }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="client_image">
                <img src={img} alt="person one" />
              </div>
              <div className="client_name">{name}</div>
              <small className="client_review">{text}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
