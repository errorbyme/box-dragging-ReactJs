import React from "react";
import { motion } from "framer-motion";

export default function Card({ desc, filesize, close, tag, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 900, bounceDamping: 30 }}
      className="card"
    >
      <h3>
        <i class="fa-solid fa-file"></i>
      </h3>
      <p>{desc}</p>
      <div className="footer">
        <div className="footer-content">
          <h1>{filesize}</h1>
          {close ? (
            <span>
              <i class="fa-solid fa-download"></i>
            </span>
          ) : (
            <span>
              <i class="fa-solid fa-xmark"></i>
            </span>
          )}
        </div>
        {tag.isOpen && (
          <div className={`footer-content2 ${tag.tagColor}`}>
            {tag.tagTitle}
          </div>
        )}
      </div>
    </motion.div>
  );
}
