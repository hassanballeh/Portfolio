import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handelChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // template_4lm2o6r
    // service_gw56384
    // gPBKx0X0JXnc_D7Ky
    emailjs
      .send(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEAMPLATE,

        {
          from_name: form.name,
          to_name: "Hassan",
          from_email: form.email,
          to_email: "hassanballeh2003@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_NAME
      )
      .then(() => {
        setLoading(false);
        alert("Thank you, I will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      });
  };
  return (
    <div className="xl:mt-20 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handelChange}
              placeholder="What's your mame"
              className="py-4 bg-tertiary px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handelChange}
              placeholder="What's your email"
              className="py-4 bg-tertiary px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handelChange}
              placeholder="What's your say"
              className="py-4 bg-tertiary px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="py-3 px-8 outline-none w-fit text-white shadow-md shadow-primary rounded-xl bg-tertiary"
          >
            {loading ? "...Sending" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1  xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
