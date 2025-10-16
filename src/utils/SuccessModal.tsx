/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import SuccessDone from "@/assets/done-img.svg";
import { useNavigate } from "react-router";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  successType?: string;
  linkTo?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  linkTo,
}: SuccessModalProps) {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate(`/${linkTo}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mx-auto p-6 lg:p-16 w-full h-full"
          >
            <div className="w-full h-full shadow-light-1 flex justify-center items-center border border-main rounded-2xl">
              <div className="max-w-[343px] flex items-center justify-center gap-7 flex-col">
                <div className="flex flex-col gap-7 items-center justify-center">
                  <h1 className="text-[#1A1F3D] font-medium tracking-[-0.02em] text-[44px]">
                    Successful
                  </h1>
                  <img src={SuccessDone} alt="done-image" />
                  <span className="text-[#1A1F3D] font-medium tracking-[-0.02em] text-[22px]">
                    You have completed this form
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="uppercase gap-2 w-full text-center flex items-center justify-center px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300"
                >
                  Back
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
