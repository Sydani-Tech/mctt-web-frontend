import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/logo.svg";
import LoadingGif from "../../assets/welcome-splash.gif";
import InstallPrompt from "@/utils/InstallPrompt";

const Home = () => {
  const [showGif, setShowGif] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const gifTimer = setTimeout(() => {
      setShowGif(false);
      setShowLoader(true);
    }, 2000);

    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
    }, 2600);

    return () => {
      clearTimeout(gifTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  const isLoading = showGif || showLoader;

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <InstallPrompt />
      <AnimatePresence>
        {showGif && (
          <motion.div
            key="gif"
            className="absolute inset-0 flex items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={LoadingGif}
              alt="Welcome..."
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loader"
            className="absolute inset-0 flex items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="loader"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          key="content"
          className="bg-[#F5F5F5] gap-20 h-full flex-col w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col">
            <img src={Logo} className="max-w-[300px] max-h-[366px]" alt="" />
            <h2 className="text-[#333333] text-[32px] font-bold leading-none tracking-[0.02em]">
              MICRO COVERAGE
            </h2>
            <h1 className="text-[95px] text-[#0D47A1] font-bold leading-none tracking-[0.02em]">
              trackr
            </h1>
          </div>
          <Link
            to={"/login"}
            className="bg-main h-12 w-[300px] hover:bg-main/80 rounded-lg flex items-center justify-center hover:cursor-pointer transition duration-300 uppercase"
          >
            <span className="text-white font-semibold text-xl">Continue</span>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
