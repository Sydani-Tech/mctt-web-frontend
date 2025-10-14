/* eslint-disable @typescript-eslint/no-explicit-any */
import PageLayout from "@/components/Common/PageLayout";
import { useState } from "react";
import { Formik, Form } from "formik";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { useNavigate } from "react-router";
import SuccessModal from "@/utils/SuccessModal";
import { syringeSteps } from "./syringeSteps";
import { logisicsValidationSchemas } from "./validations";
import { Step } from "./Steps";
import { getInitialValues } from "@/utils/utils";

const LogisticsForm = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState(false);

  const steps = syringeSteps.map((s) => (
    <Step title={s.title} prefix={s.prefix} />
  ));

  const handleNext = async (validateForm: any, setTouched: any) => {
    const formErrors = await validateForm();
    if (Object.keys(formErrors).length) {
      setTouched(
        Object.keys(formErrors).reduce((acc: any, key) => {
          acc[key] = true;
          return acc;
        }, {})
      );
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step === 0) {
      navigate(-1);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <PageLayout>
      <div className="flex flex-col gap-6 h-full max-w-[768px] mx-auto">
        <SuccessModal
          linkTo="logistics"
          successType="Logistics"
          onClose={() => setSuccessful(false)}
          isOpen={successful}
        />

        <Formik
          initialValues={getInitialValues()}
          validationSchema={logisicsValidationSchemas[step]}
          onSubmit={(values) => {
            console.log("Final Submit:", values);
          }}
        >
          {({ validateForm, setTouched }) => (
            <Form className="flex flex-col min-h-[82vh] pb-10">
              <div className="flex-1">{steps[step]}</div>

              <div className="w-full pt-10 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="gap-2 flex items-center justify-cener px-4 py-3 border-[2px] border-main text-main font-bold rounded-lg hover:cursor-pointer hover:bg-main/4 transition duration-300"
                >
                  <IoCaretBack />
                  <span className="uppercase font-bold">Back</span>
                </button>

                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => handleNext(validateForm, setTouched)}
                    className="gap-2 flex items-center justify-cener px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300"
                  >
                    <span className="uppercase font-bold">Next</span>
                    <IoCaretForward />
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={() => setSuccessful(true)}
                    className="gap-2 flex items-center justify-cener px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300"
                  >
                    Submit
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </PageLayout>
  );
};

export default LogisticsForm;
