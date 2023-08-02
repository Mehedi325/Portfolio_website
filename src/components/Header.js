import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}

        <SocialIcon
          url="https://www.facebook.com/mehedi.masum1997/"
          fgColor="white"
          bgColor="transparent"
          className="headericons"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/mehedi325/"
          fgColor="white"
          bgColor="transparent"
          className="headericons"
        />
        <SocialIcon
          url="https://github.com/Mehedi325/"
          fgColor="white"
          bgColor="transparent"
          className="headericons"
        />
        <SocialIcon
          url="https://open.spotify.com/user/31el4j54smlohpgtg3bd7zf7eaem?si=b4803716b21743e7"
          fgColor="white"
          bgColor="transparent"
          className="headericons"
        />

        <SocialIcon
          url="https://dsc.bio/mehedi325"
          bgColor="transparent"
          fgColor="white"
          className="headericons"
        />
      </motion.div>

      <Link to="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer headericons"
        >
          <SocialIcon
            className="cursor-pointer headericons"
            network="email"
            fgColor="white"
            bgColor="transparent"
          />
          <p className="uppercase hidden tracking-[2px] md:inline-flex text-sm text-white">
            Get In Touch of mm
          </p>
        </motion.div>
      </Link>
    </div>
  );
}

export default Header;
