/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import LocationSelector from "../Demographics/DemographicsForms/LocationSelector";
import { apiRequest } from "@/utils/apiRequest";
import CustomInput from "@/utils/CustomInput";
import CustomSelect from "@/utils/CustomSelect";
import { UserTypeEnum } from "@/types/enum";

const userTypes = [
  {
    label: "Enumerator",
    value: UserTypeEnum.ENUMERATOR,
  },
  {
    label: "EPI",
    value: UserTypeEnum.EPI,
  },
  {
    label: "OIC",
    value: UserTypeEnum.OIC,
  },
  {
    label: "ADMIN",
    value: UserTypeEnum.ADMIN,
  },
];

const userSchema = Yup.object().shape({
  fullName: Yup.string().required("This is required"),
  phoneNumber: Yup.string().required("This is required"),
  email: Yup.string().email().required("This is required"),
  password: Yup.string().required("This is required"),
  region: Yup.string().required("This is required"),
  userType: Yup.string().required("This is required"),
  district: Yup.string().required("This is required"),
  chiefdom: Yup.string().required("This is required"),
  phu: Yup.string().required("This is required"),
});

const Registration = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  const handleSubmit = async (values: any, { setFieldError }: any) => {
    try {
      await apiRequest({
        method: "POST",
        path: "/auth/create",
        data: values,
      });
      //   await queryClient.invalidateQueries({ queryKey: [USER_DETAILS] });
      //   setUser(req.data.user);
      //   navigate("/dashboard");
    } catch (error: any) {
      if (error.message.includes("Account")) {
        setFieldError("email", error.message);
      }
      if (error.message.includes("password")) {
        setFieldError("password", error.message);
      }
      console.log(error);
    }
  };
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
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
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
                Create and assign user
              </h2>

              <Formik
                initialValues={{
                  region: "",
                  district: "",
                  chiefdom: "",
                  phu: "",
                  fullName: "",
                  email: "",
                  phoneNuber: "",
                  password: "",
                  userType: "",
                }}
                validationSchema={userSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, values, setFieldValue }) => (
                  <Form className="flex flex-col flex-1">
                    <div className="pr-2 space-y-4">
                      <CustomInput name="email" label="Email" isRequired />
                      <CustomInput
                        name="fullName"
                        label="Full Name"
                        isRequired
                      />
                      <CustomInput
                        name="password"
                        label="Password"
                        type="password"
                        isRequired
                      />
                      <CustomInput
                        name="phoneNumber"
                        label="Phone Nuber"
                        type="tel"
                        isRequired
                      />
                      <CustomSelect
                        name="userType"
                        label="User Role"
                        placeholder="Select UserRole"
                        value={values.userType}
                        onChange={(val) => {
                          setFieldValue("userType", val);
                        }}
                        options={userTypes}
                      />
                      <LocationSelector />
                    </div>

                    <div className="mt-6 flex w-full items-center justify-center gap-3 pt-4">
                      {isSubmitting ? (
                        <div className="flex h-14 pt-1 w-rull items-center justify-center">
                          <span className="loader_spinner"></span>
                        </div>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`gap-2 w-full flex items-center justify-center uppercase px-4 py-3 font-bold rounded-lg transition duration-300 ${
                            isSubmitting
                              ? "bg-main/10 text-gray-300 cursor-not-allowed"
                              : "bg-main text-[#F5F5F5] hover:cursor-pointer hover:bg-main/80"
                          }`}
                        >
                          Create
                        </button>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Registration;
