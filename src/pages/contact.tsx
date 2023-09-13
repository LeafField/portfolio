import React from "react";
import { motion } from "framer-motion";
import Form from "../components/contact-page/Form";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Form />
    </motion.div>
  );
};

export default Contact;
