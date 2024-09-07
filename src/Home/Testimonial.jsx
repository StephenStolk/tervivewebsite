import React from "react";
import { motion } from "framer-motion";

// Import images
import adityaImage from "./aditya.jpg";
import vidushiImage from "./vidushi.png";
import sakshiImage from "./sakshi.jpg";
import shikharImage from "./shikhar.jpg";

// Hardcoded team members with details
const teamMembers = [
  {
    name: "Aditya Kumar Jha",
    image: adityaImage, 
    testimonial:
      "As the founder and CEO of Tervive, Aditya is driven by a deep passion for improving both personal health and the environment. He launched Tervive to empower individuals and communities with the tools and knowledge to create healthier living spaces through personalized plant recommendations. His vision is to bridge the gap between well-being and environmental stewardship, fostering a sustainable future where nature and society thrive together. At Tervive, he leads a dedicated team committed to making this vision a reality.",
  },
  {
    name: "Vidushi Agnihotri",
    image: vidushiImage,
    testimonial:
      "Vidushi Agnihotri, as the Chief Marketing Officer of Tervive, is the driving force behind our brand's growth and community engagement. With a deep understanding of consumer behavior and a passion for sustainability, Vidushi crafts compelling marketing strategies that resonate with our audience and amplify Tervive's mission. Her expertise in building strong, purpose-driven brands helps us connect with individuals and communities who are committed to improving their health and the environment. Through innovative campaigns and strategic partnerships, Vidushi ensures that Tervive’s message reaches and inspires people to make a positive impact.",
  },
  {
    name: "Sakshi Biyani",
    image: sakshiImage,
    testimonial:
      "Sakshi Biyani, as the Chief Financial Officer of Tervive, oversees our financial strategy and ensures the sustainability of our operations. With her keen financial acumen and strategic mindset, Sakshi manages the company’s resources to support our mission of enhancing health and the environment. Her expertise in financial planning and analysis allows Tervive to grow responsibly while making a meaningful impact. Sakshi’s commitment to transparency and efficiency drives our financial success, enabling us to invest in innovative solutions and community-driven initiatives.",
  },
  {
    name: "Shikhar Burman",
    image: shikharImage,
    testimonial:
      "Shikhar Burman, as the Co-Founder and Chief Technical Officer of Tervive, brings a wealth of technical expertise and innovative thinking to our mission. With a strong focus on leveraging technology to address environmental and health challenges, Shikhar leads the development of Tervive’s platform, ensuring it delivers personalized, data-driven solutions that empower users to create healthier and more sustainable living environments. His dedication to cutting-edge technology and sustainable practices drives the continuous evolution of Tervive, making our vision of a greener, healthier world a reality.",
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

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50, // Slide in from left for even indices, right for odd
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`flex flex-col md:flex-row bg-white shadow-lg overflow-hidden`}
            >
              {/* Member Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-48 md:h-64 md:w-64"
                />
              </div>

              {/* Member Info */}
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {member.name}
                </h3>
                <p className="text-green-900 text-sm italic"> {/* Reduced font size */}
                  "{member.testimonial}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
