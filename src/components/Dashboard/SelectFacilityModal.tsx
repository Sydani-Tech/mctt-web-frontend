import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LocationSelector from "../Demographics/DemographicsForms/LocationSelector";
import { useApp } from "../context/AppContext";

const FacilitySchema = Yup.object().shape({
  region: Yup.string().required("This is required"),
  district: Yup.string().required("This is required"),
  chiefdom: Yup.string().required("This is required"),
  phu: Yup.string().required("This is required"),
});

export default function FacilityModal({ isOpen }: { isOpen: boolean }) {
  const { setLocationData } = useApp();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="bg-white w-full max-w-md flex-1 overflow-y-auto h-screen md:h-[80vh] p-6 md:rounded-2xl shadow-lg relative flex flex-col">
                <h2 className="text-xl font-semibold mb-4">
                  Select Assigned Health Facility
                </h2>

                <Formik
                  initialValues={{
                    region: "",
                    district: "",
                    chiefdom: "",
                    phu: "",
                  }}
                  validationSchema={FacilitySchema}
                  onSubmit={(values, { resetForm }) => {
                    resetForm();
                    setLocationData(values);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="flex flex-col flex-1">
                      <div className="pr-2 space-y-4">
                        <LocationSelector />
                      </div>

                      <div className="mt-6 flex w-full gap-3 pt-4">
                        {/* <button
                          type="submit"
                          disabled={!isValid || !dirty || isSubmitting}
                          className={`gap-2 w-full flex items-center justify-center uppercase px-4 py-3 font-bold rounded-lg transition duration-300 ${
                            !isValid || !dirty || isSubmitting
                              ? "bg-main/10 text-gray-300 cursor-not-allowed"
                              : "bg-main text-[#F5F5F5] hover:cursor-pointer hover:bg-main/80"
                          }`}
                        >
                          {isSubmitting ? "Submitting..." : "save"}
                        </button> */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`gap-2 w-full flex items-center justify-center uppercase px-4 py-3 font-bold rounded-lg transition duration-300 ${
                            isSubmitting
                              ? "bg-main/10 text-gray-300 cursor-not-allowed"
                              : "bg-main text-[#F5F5F5] hover:cursor-pointer hover:bg-main/80"
                          }`}
                        >
                          {isSubmitting ? "Submitting..." : "save"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
