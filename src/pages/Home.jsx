import React from "react";
import { MostPopular, Veggie, Desserts } from "./index";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MostPopular />
      <Veggie />
      <Desserts />
    </motion.div>
  );
}

export default Home;
