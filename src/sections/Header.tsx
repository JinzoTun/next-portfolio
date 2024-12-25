"use client";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <div className="w-full flex justify-center items-center fixed z-10 top-3">
      <motion.nav
        className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a href="#home"className="nav-item">home</a>
        <a href="#projects"className="nav-item">Projects</a>
        <a href="#about"className="nav-item">about</a>
        <a href="#contact"className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">contact</a>
      </motion.nav>
    </div>
)};
