/* eslint-disable @typescript-eslint/no-explicit-any */
import PageLayout from "@/components/Common/PageLayout";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { useNavigate } from "react-router";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import SuccessModal from "@/utils/SuccessModal";

import type { FormikErrors, FormikTouched, FormikValues } from "formik";
import {
  houseHoldValidationSchemas,
  initialValues,
} from "./initialValuesAndValidations";
import { useHouseHolds } from "@/components/context/HouseHoldsContext";
import AuthWrapper from "@/components/Common/AuthWrapper";
import { UserTypeEnum } from "@/types/enum";

type HandleNextArgs<Values extends FormikValues> = {
  validateForm: (values?: Values) => Promise<FormikErrors<Values>>;
  setTouched: (
    touched: FormikTouched<Values>,
    shouldValidate?: boolean
  ) => void;
  errors: FormikErrors<Values>;
  values: Values;
};

const HouseHoldForm = () => {
  const [step, setStep] = useState(0);
  const { setHouseHolds } = useHouseHolds();
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState(false);

  const steps = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
    <StepFive />,
  ];

  const handleNext = async <Values extends FormikValues>({
    validateForm,
    setTouched,
    errors,
    values,
  }: HandleNextArgs<Values>) => {
    console.log(errors);
    const formErrors = await validateForm();
    console.log(values);
    if (Object.keys(formErrors).length) {
      const touchedAll = Object.keys(formErrors).reduce((acc, key) => {
        acc[key as keyof Values] = true as any;
        return acc;
      }, {} as FormikTouched<Values>);

      setTouched(touchedAll, true);
      return;
    }

    setStep((prev) => {
      return prev + 1;
    });
  };

  const handlePrev = () => {
    if (step === 0) {
      navigate(-1);
    } else {
      setStep((prev) => {
        return prev - 1;
      });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  return (
    <PageLayout>
      <AuthWrapper allowedTypes={[UserTypeEnum.ENUMERATOR]}>
        <div className="flex flex-col gap-6 h-full max-w-[768px] mx-auto">
          <SuccessModal
            linkTo="house-holds"
            successType="Household"
            onClose={() => setSuccessful(false)}
            isOpen={successful}
          />
          <h1 className="text-base lg:text-2xl font-medium text-main leading-none tracking-[0.02em]">
            Household
          </h1>
          <div className="">
            <Formik
              initialValues={initialValues}
              validationSchema={houseHoldValidationSchemas[step]}
              enableReinitialize={true}
              onSubmit={(values) => {
                setHouseHolds((prev) => [
                  ...prev,
                  {
                    ...values,
                    createdAt: new Date().toISOString(),
                  },
                ]);
                setSuccessful(true);
              }}
            >
              {({ validateForm, setTouched, errors, values }) => (
                <Form className="flex flex-col min-h-[76vh] md:min-h-[74vh] pb-6 md:pb-10">
                  <div className="flex-1">{steps[step]}</div>

                  <div className="w-full pt-10 flex justify-between">
                    <button
                      type="button"
                      onClick={() => handlePrev()}
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
                      {step < steps.length - 1 ? (
                        <button
                          type="button"
                          onClick={() =>
                            handleNext({
                              validateForm,
                              setTouched,
                              errors,
                              values,
                            })
                          }
                          className="gap-2 flex items-center justify-cener px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300"
                        >
                          <span className="uppercase font-bold">Next</span>
                          <IoCaretForward />
                        </button>
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

export default HouseHoldForm;
