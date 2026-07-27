"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "AuraDent made my dental experience comfortable and completely stress-free. My smile has improved tremendously.",
    by: "Sarah Mitchell, Teeth Whitening Patient",
    imgSrc: "https://t4.ftcdn.net/jpg/05/02/21/45/240_F_502214525_loKRM8wbH7YiDJ6bc7X750Rmi6sLLdLy.jpg",
  },
  {
    tempId: 1,
    testimonial:
      "The dentists were professional, caring, and explained every step of my treatment clearly.",
    by: "James Anderson, Dental Implant Patient",
    imgSrc: "https://t3.ftcdn.net/jpg/01/91/67/52/240_F_191675274_IebQK5pVaGmgZvprpIevKIPTovsRZZJi.jpg",
  },
  {
    tempId: 2,
    testimonial:
      "I finally found a dental clinic I can trust. The results exceeded my expectations.",
    by: "Emily Johnson, Cosmetic Dentistry Patient",
    imgSrc: "https://t4.ftcdn.net/jpg/04/13/55/45/240_F_413554591_BQzOaigFwRTgpoXU8WLY6hhQZYzijQek.jpg",
  },
  {
    tempId: 3,
    testimonial:
      "My orthodontic treatment was smooth and effective. The team helped me achieve my perfect smile.",
    by: "Michael Roberts, Orthodontic Treatment Patient",
    imgSrc: "https://t4.ftcdn.net/jpg/02/98/28/89/240_F_298288984_8i0PB7s9aWPzi1LeuNGGrnjXkmXRpcZn.jpg",
  },
  {
    tempId: 4,
    testimonial:
      "The clinic is modern, welcoming, and the staff always makes me feel comfortable during visits.",
    by: "Jessica Williams, General Dentistry Patient",
    imgSrc: "https://t4.ftcdn.net/jpg/01/51/99/37/240_F_151993709_v5gg5HClRhAMFSnXsWy9LOl1vaBwsiEe.jpg",
  },
  {
    tempId: 5,
    testimonial:
      "My root canal treatment was painless and handled with exceptional care by the dental team.",
    by: "David Thompson, Root Canal Patient",
    imgSrc: "https://t4.ftcdn.net/jpg/03/39/77/65/240_F_339776593_IxrL77zig5FSERdAPp8cwm4Ys7bQTz9c.jpg",
  },
  {
    tempId: 6,
    testimonial:
      "AuraDent provided excellent care for my child with patience, kindness, and professionalism.",
    by: "Sophia Martinez, Pediatric Dentistry Patient",
    imgSrc: "https://t3.ftcdn.net/jpg/09/68/82/12/240_F_968821260_kZ9csP8a6hkvTJ0sAB0HXc8TuzD5lNDE.jpg",
  },
  {
    tempId: 7,
    testimonial:
      "The emergency care I received was quick, professional, and helped relieve my dental pain immediately.",
    by: "Daniel Wilson, Emergency Dental Care Patient",
    imgSrc: "https://t3.ftcdn.net/jpg/06/16/55/08/240_F_616550819_rnEcH9vVVcep0dZgvAd3k8nn840uAueP.jpg",
  },
  {
    tempId: 8,
    testimonial:
      "I loved my smile makeover journey. The results look natural and boosted my confidence.",
    by: "Olivia Brown, Smile Makeover Patient",
    imgSrc: "https://t3.ftcdn.net/jpg/04/17/85/08/240_F_417850826_ZQ98ggEKoZcqFjfLSgmBwYPHu1Tc4MGU.jpg",
  },
  {
    tempId: 9,
    testimonial:
      "From consultation to treatment, AuraDent provided exceptional service and outstanding dental care.",
    by: "William Davis, Dental Cleaning Patient",
    imgSrc: "https://t4.ftcdn.net/jpg/01/15/85/23/240_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg",
  },
];


function TestimonialCard({
  position,
  testimonial,
  handleMove,
  cardSize,
}) {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-teal-600 text-primary-foreground border-gray-200"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,

        clipPath:
          "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",

        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,

        boxShadow: isCenter
          ? "0px 8px 0px 4px hsl(var(--border))"
          : "none",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />

      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(",")[0]}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />


      <h3
        className={cn(
          "text-base sm:text-xl font-medium",
          isCenter
            ? "text-primary-foreground"
            : "text-foreground"
        )}
      >
        "{testimonial.testimonial}"
      </h3>


      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter
            ? "text-primary-foreground/80"
            : "text-muted-foreground"
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
}



export default function StaggerTestimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] =
    useState(testimonials);


  const handleMove = (steps) => {
    const newList = [...testimonialsList];


    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();

        if (!item) return;

        newList.push({
          ...item,
          tempId: Math.random(),
        });
      }
    } else {

      for (let i = steps; i < 0; i++) {
        const item = newList.pop();

        if (!item) return;

        newList.unshift({
          ...item,
          tempId: Math.random(),
        });
      }
    }


    setTestimonialsList(newList);
  };



  useEffect(() => {

    const updateSize = () => {

      const { matches } =
        window.matchMedia("(min-width: 640px)");

      setCardSize(matches ? 365 : 290);
    };


    updateSize();

    window.addEventListener(
      "resize",
      updateSize
    );


    return () =>
      window.removeEventListener(
        "resize",
        updateSize
      );

  }, []);



  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{
        height: 600,
      }}
    >

      {testimonialsList.map((testimonial, index) => {

        const position =
          testimonialsList.length % 2
            ? index -
              (testimonialsList.length + 1) / 2
            : index -
              testimonialsList.length / 2;


        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );

      })}



      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">

        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-teal-600 hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          <ChevronLeft />
        </button>


        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-teal-600 hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          <ChevronRight />
        </button>

      </div>

    </div>
  );
}