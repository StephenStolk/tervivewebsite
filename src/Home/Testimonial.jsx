import React from "react";
import { motion } from "framer-motion";

// Array of team members with details
const teamMembers = [
  {
    name: "Aditya Kumar Jha",
    image: "/path/to/aditya-image.jpg", // Replace with actual image paths
    testimonial:
      "Tervive has been a journey towards making a meaningful impact on both the environment and people's lives. Every step we take brings us closer to a greener tomorrow.",
  },
  {
    name: "Vidushi Agnihotri",
    image: "/path/to/vidushi-image.jpg",
    testimonial:
      "Working with Tervive has been an enriching experience. Our goal is to provide sustainable solutions that improve the health of our planet and its people.",
  },
  {
    name: "Sakshi Biyani",
    image: "/path/to/sakshi-image.jpg",
    testimonial:
      "At Tervive, we believe in the power of small actions. Together, we aim to create a cleaner, healthier, and more sustainable future.",
  },
  {
    name: "Shikhar Burman",
    image: "/path/to/shikhar-image.jpg",
    testimonial:
      "Being part of Tervive has been a great opportunity to innovate and contribute to something larger than ourselves—our environment.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-green-50 py-16 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-900 mb-12"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              {/* Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 object-cover mb-6 border-4 border-green-900"
              />

              {/* Member Name */}
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                {member.name}
              </h3>

              {/* Testimonial Text */}
              <p className="text-center text-green-900 text-lg italic">
                "{member.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
