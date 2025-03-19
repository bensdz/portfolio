/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import SectionWrapper from "./hoc/SectionWrapper";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import EarthCanvas from "./canvas/Earth";
import Lanyard from "./animations/Lanyard/Lanyard";

const Contact = ({ mobile }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!form.name) {
      setLoading(false);
      setSuccess(false);
      setError("Name is required");
      return;
    }
    if (!form.email) {
      setLoading(false);
      setSuccess(false);
      setError("Email is required");
      return;
    }
    if (!form.message) {
      setLoading(false);
      setSuccess(false);
      setError("Message is required");
      return;
    }
    if (formRef.current) {
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Farouk",
            from_email: form.email,
            to_email: "itisbens@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_USER_ID
        )
        .then(() => {
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
          setError("");
          setSuccess(true);
        })
        .catch((e) => {
          setLoading(false);
          setSuccess(false);
          console.log(e);
          setError("An error occurred. Please try again");
        });
    } else {
      setLoading(false);
      setError("Form reference is not available");
    }
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#1a1a1a] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-[#212121] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>

          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-[#212121] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              name="message"
              rows={7}
              value={form.message}
              onChange={handleChange}
              placeholder="Type Your Message Here"
              className="bg-[#212121] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="py-4 px-6 rounded-lg font-bold border-gradient "
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {success && (
            <p className="text-green-500 font-medium">
              Message sent successfully
            </p>
          )}
          {error && <p className="text-red-500 font-medium">{error}</p>}
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        {/* <Lanyard
            position={[0, 0, 15]}
            gravity={[0, -40, 0]}
            fov={20}
            transparent
            scale={1}
          /> */}
        <EarthCanvas mobile={mobile} />
      </motion.div>
    </div>
  );
};
const WrappedContact = SectionWrapper(Contact, "contact");

Contact.propTypes = {
  mobile: PropTypes.bool,
};

export default WrappedContact;
