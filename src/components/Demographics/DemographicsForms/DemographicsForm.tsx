/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PageLayout from "@/components/Common/PageLayout";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";

import StepOne from "./StepOne";
// import StepTwo from "./StepTwo";
import { demographicValidationSchemas, initialValues } from "./validations";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
// import StepFour from "./StepFour";
import SuccessModal from "@/utils/SuccessModal";

import { useDemo } from "@/components/context/DemographicsContext";
import AuthWrapper from "@/components/Common/AuthWrapper";
import { UserTypeEnum } from "@/types/enum";
import { apiRequest } from "@/utils/apiRequest";
import { useNavigate } from "react-router";

const DemographicsForm = () => {
  const [step] = useState(0);
  const { setDemographicData } = useDemo();
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState(false);

  const steps = [
    <StepOne />,
    // <StepTwo />,
    // <StepThree />,
    // // <StepFour />,
    // <StepFive />,
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleSubmit = async (values: any) => {
    console.log(values);
    setDemographicData((prev) => [
      ...prev,
      {
        ...values,
        createdAt: new Date().toISOString(),
      },
    ]);
    try {
      const req = await apiRequest({
        method: "POST",
        path: "/api/method/slmctt.req.save_health_facility",
        data: values,
      });

      console.log(req);
      setSuccessful(true);
      // navigate("/dashboard");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <PageLayout>
      <AuthWrapper
        allowedTypes={[UserTypeEnum.ENUMERATOR, UserTypeEnum.DESK_USER]}
      >
        <div className="flex flex-col gap-6 h-full max-w-[768px] mx-auto">
          <SuccessModal
            linkTo="demographics"
            successType="Demographics"
            onClose={() => setSuccessful(false)}
            isOpen={successful}
          />
          <h1 className="text-base lg:text-2xl font-medium text-main leading-none tracking-[0.02em]">
            Health facility
          </h1>
          <div className="">
            <Formik
              initialValues={initialValues}
              validationSchema={demographicValidationSchemas[step]}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col min-h-[92vh] md:min-h-[74vh] pb-6 md:pb-10">
                  <div className="flex-1">{steps[step]}</div>

                  <div className="w-full pt-10 flex justify-between">
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="gap-2 flex items-center justify-cener px-4 py-3 border-[2px] border-main text-main font-bold rounded-lg hover:cursor-pointer hover:bg-main/4 transition duration-300"
                    >
                      <IoCaretBack />
                      <span className="uppercase font-bold">Back</span>
                    </button>
                    <div className="flex items-center gap-5">
                      {/* <button
                      type="button"
                      className="gap-2 flex items-center justify-cener px-4 py-3 border border-main text-main font-bold rounded-lg hover:cursor-pointer hover:bg-main hover:text-[#F5F5F5] transition duration-300"
                    >
                      <span className="uppercase font-bold">Save to draft</span>
                    </button> */}
                      {/* {step < steps.length - 1 ? (
                        <button
                          type="button"
                          onClick={() =>
                            handleNext({
                              validateForm,
                              setTouched,
                              errors,
                              values,
                              setFieldValue,
                            })
                          }
                          className="gap-2 flex items-center justify-cener px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300"
                        >
                          <span className="uppercase font-bold">Next</span>
                          <IoCaretForward />
                        </button>
                      ) : ( */}
                      {isSubmitting ? (
                        <div className="h-12 w-[128px] items-center justify-center flex bg-main rounded-lg">
                          <span className="load_btn"></span>
                        </div>
                      ) : (
                        <button
                          type="submit"
                          // onClick={() => setSuccessful(true)}
                          className="gap-2 flex items-center justify-cener px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300"
                        >
                          <span className="uppercase font-bold">Submit</span>
                          <IoCaretForward />
                        </button>
                      )}
                      {/* )} */}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </AuthWrapper>
    </PageLayout>
  );
};

export default DemographicsForm;
