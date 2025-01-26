/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from "react";
import SectionWrapper from "./hoc/SectionWrapper";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import EarthCanvas from "./canvas/Earth";

const Contact = ({ mobile }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        className="flex-[0.75] bg-[#0e0b1f] p-8 rounded-2xl"
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
              className="bg-[#151030] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium "
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
              className="bg-[#151030] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium "
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
              className="bg-[#151030] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#1d0257] py-4 px-6 rounded-lg font-medium"
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
        <EarthCanvas mobile={mobile} />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
