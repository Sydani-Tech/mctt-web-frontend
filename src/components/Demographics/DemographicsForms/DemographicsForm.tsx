/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PageLayout from "@/components/Common/PageLayout";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { demographicValidationSchemas, initialValues } from "./validations";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { useNavigate } from "react-router";
import StepThree from "./StepThree";
// import StepFour from "./StepFour";
import StepFive from "./StepFive";
import SuccessModal from "@/utils/SuccessModal";

import type {
  FormikErrors,
  FormikTouched,
  FormikValues,
  FormikHelpers,
} from "formik";
import { getPopulationBreakdown } from "@/utils/utils";
import { useDemo } from "@/components/context/DemographicsContext";
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
  setFieldValue: FormikHelpers<Values>["setFieldValue"];
};

const DemographicsForm = () => {
  const [step, setStep] = useState(0);
  const { setDemographicData } = useDemo();
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState(false);

  const steps = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    // <StepFour />,
    <StepFive />,
  ];

  const handleNext = async <Values extends FormikValues>({
    validateForm,
    setTouched,
    errors,
    values,
    setFieldValue,
  }: HandleNextArgs<Values>) => {
    console.log(errors);
    const formErrors = await validateForm();

    if (Object.keys(formErrors).length) {
      const touchedAll = Object.keys(formErrors).reduce((acc, key) => {
        acc[key as keyof Values] = true as any;
        return acc;
      }, {} as FormikTouched<Values>);

      setTouched(touchedAll, true);
      return;
    }

    setStep((prev) => {
      // if (prev === 0 && values.isFacilityAvailable === "no") {
      //   return prev + 2;
      // }
      if (prev === 2) {
        const populationBreakdown = getPopulationBreakdown(
          values?.totalPopulation
        );
        setFieldValue("numberOfBirths", populationBreakdown.liveBirths);
        setFieldValue("survivingInfants", populationBreakdown.survivingInfants);
        setFieldValue("12To23Months", populationBreakdown.children12_23Months);
        setFieldValue("24To59Months", populationBreakdown.children25_59Months);
        setFieldValue("pregnantWomen", populationBreakdown.pregnantWomen);
        setFieldValue(
          "womenOfChildBearingAge",
          populationBreakdown.womenOfChildBearingAge
        );
        setFieldValue("hpvTarget", populationBreakdown.hpvTarget);
      }
      return prev + 1;
    });
  };

  const handlePrev = (values: any) => {
    if (step === 0) {
      navigate(-1);
    } else {
      setStep((prev) => {
        if (prev === 2 && values.isFacilityAvailable === "no") {
          return prev - 2;
        }
        return prev - 1;
      });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  return (
    <PageLayout>
      <AuthWrapper allowedTypes={[UserTypeEnum.OIC]}>
        <div className="flex flex-col gap-6 h-full max-w-[768px] mx-auto">
          <SuccessModal
            linkTo="demographics"
            successType="Demographics"
            onClose={() => setSuccessful(false)}
            isOpen={successful}
          />
          <h1 className="text-base lg:text-2xl font-medium text-main leading-none tracking-[0.02em]">
            Demographics
          </h1>
          <div className="">
            <Formik
              initialValues={initialValues}
              validationSchema={demographicValidationSchemas[step]}
              onSubmit={(values) => {
                setDemographicData((prev) => [
                  ...prev,
                  {
                    ...values,
                    createdAt: new Date().toISOString(),
                  },
                ]);

                console.log("Final Submit:", values);
              }}
            >
              {({
                validateForm,
                setTouched,
                errors,
                values,
                setFieldValue,
              }) => (
                <Form className="flex flex-col min-h-[92vh] md:min-h-[74vh] pb-6 md:pb-10">
                  <div className="flex-1">{steps[step]}</div>

                  <div className="w-full pt-10 flex justify-between">
                    <button
                      type="button"
                      onClick={() => handlePrev(values)}
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
                              setFieldValue,
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
                          onClick={() => setSuccessful(true)}
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

export default DemographicsForm;
