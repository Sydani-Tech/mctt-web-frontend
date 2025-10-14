/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { useNavigate } from "react-router";
import SuccessModal from "@/utils/SuccessModal";

import type {
  FormikErrors,
  FormikTouched,
  FormikValues,
  FormikHelpers,
} from "formik";
import { markNestedTouched } from "@/utils/utils";
import { useDemo } from "@/components/context/DemographicsContext";
import { initialValues, programAnalysisValidationSchemas } from "./validations";
import StepOne from "./StepOne";
import type { DemographicData } from "@/typings/demographics";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import { useAuth } from "@/components/context/AuthContext";

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

const ProgramAnalysis = ({
  data,
  index,
  closeProgram,
}: {
  data: DemographicData;
  index: string;
  closeProgram: () => void;
}) => {
  const [step, setStep] = useState(0);
  const { setDemographicData } = useDemo();
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState(false);
  const steps = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
    <StepFive />,
    <StepSix />,
  ];
  console.log(steps.length);
  const { user } = useAuth();

  // const handleNext = async <Values extends FormikValues>({
  //   validateForm,
  //   setTouched,
  //   values,
  //   setFieldValue,
  // }: HandleNextArgs<Values>) => {
  //   const formErrors = await validateForm();

  //   if (Object.keys(formErrors).length) {
  //     setTouched(markNestedTouched(formErrors), true);
  //     return;
  //   }

  //   setStep((prev) => {
  //     if (prev === 4 && values.dropOutRate.penta1) {
  //       const p1 = Number(values.dropOutRate.penta1);
  //       const p3 = Number(values.dropOutRate.penta3);

  //       if (p1 > 0 && p3 >= 0) {
  //         const dropoutRate = ((p1 - p3) / p1) * 100;

  //         if (dropoutRate >= 10 && p1 < 85) {
  //           setFieldValue("problemsRelatingToAccess", "yes");
  //           setFieldValue("problemsRelatingToUtilization", "yes");
  //         } else {
  //           setFieldValue("problemsRelatingToAccess", "no");
  //           setFieldValue("problemsRelatingToUtilization", "no");
  //         }
  //       }
  //     }
  //     return prev + 1;
  //   });
  // };

  const handleNext = async <Values extends FormikValues>({
    validateForm,
    setTouched,
    values,
    setFieldValue,
    submitForm,
  }: HandleNextArgs<Values> & { submitForm: () => void }) => {
    const formErrors = await validateForm();

    if (Object.keys(formErrors).length) {
      setTouched(markNestedTouched(formErrors), true);
      return;
    }

    // Custom dropoutRate logic on step 4
    if (step === 4 && values.dropOutRate?.penta1) {
      const p1 = Number(values.dropOutRate.penta1);
      const p3 = Number(values.dropOutRate.penta3);

      if (p1 > 0 && p3 >= 0) {
        const dropoutRate = ((p1 - p3) / p1) * 100;

        if (dropoutRate >= 10 && p1 < 85) {
          setFieldValue("problemsRelatingToAccess", "yes");
          setFieldValue("problemsRelatingToUtilization", "yes");
        } else {
          setFieldValue("problemsRelatingToAccess", "no");
          setFieldValue("problemsRelatingToUtilization", "no");
        }
      }
    }

    // Final step → submit, otherwise advance
    if (step >= steps.length - 1) {
      submitForm();
    } else {
      setStep((prev) => prev + 1);
    }
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
    <div className="flex flex-col gap-6 h-full max-w-[768px] mx-auto">
      <SuccessModal
        linkTo={`demographics/details/${index}`}
        successType="Demographics Details"
        onClose={() => {
          setSuccessful(false);

          closeProgram();
        }}
        isOpen={successful}
      />
      <div className="flex items-center justify-between w-full">
        <h1 className="text-base lg:text-2xl font-medium text-main leading-none tracking-[0.02em]">
          Program Analysis
        </h1>
        <span>x</span>
      </div>
      <div className="flex gap-10">
        <div className="">
          <h3 className="font-medium">
            Health Facility: <span className="text-main">{user?.phu}</span>
          </h3>
          <h3 className="font-medium">
            Targeted Population(Surviving Infants):
            <span className="text-main"> {data?.survivingInfants}</span>
          </h3>
        </div>
      </div>
      <div className="">
        <Formik
          initialValues={initialValues}
          validationSchema={programAnalysisValidationSchemas[step]}
          onSubmit={(values) => {
            setDemographicData((prev) =>
              prev.map((item, idx) =>
                idx === Number(index)
                  ? {
                      ...item,
                      programAnalysis: {
                        ...values,
                        createdAt: new Date().toISOString(),
                      },
                      updatedAt: new Date().toISOString(),
                    }
                  : item
              )
            );
            setSuccessful(true);
            console.log("Final Submit:", values);
          }}
        >
          {({
            validateForm,
            setTouched,
            errors,
            values,
            setFieldValue,
            submitForm,
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
                <button
                  type="button"
                  onClick={() =>
                    handleNext({
                      validateForm,
                      setTouched,
                      errors,
                      values,
                      setFieldValue,
                      submitForm,
                    })
                  }
                  className="gap-2 flex items-center justify-center px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300"
                >
                  <span className="uppercase font-bold">
                    {step < steps.length - 1 ? "Next" : "Submit"}
                  </span>
                  <IoCaretForward />
                </button>

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
                ) : (
                  <button
                    type="submit"
                    // onClick={() => setSuccessful(true)}
                    className="gap-2 flex items-center justify-cener px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300"
                  >
                    <span className="uppercase font-bold">Submit</span>
                    <IoCaretForward />
                  </button>
                )} */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProgramAnalysis;
