/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import SuccessModal from "@/utils/SuccessModal";

import type {
  FormikErrors,
  FormikTouched,
  FormikValues,
  FormikHelpers,
} from "formik";
import { markNestedTouched } from "@/utils/utils";
import { useDemo } from "@/components/context/DemographicsContext";
import type { DemographicData } from "@/typings/demographics";
import {
  logisticsValidations,
  logisticsValidationSchemas,
} from "./logistics-validations";
import { numberedVaccineFields } from "./LogisticsFields";
import { Step } from "./Steps";
import OtherSuppliesStep from "./OtherSupplies";
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

const LogisticsAndSupplies = ({
  data,
  index,
  close,
}: {
  data: DemographicData;
  index: string;
  close: () => void;
}) => {
  const [step, setStep] = useState(0);
  const { setDemographicData } = useDemo();
  const [successful, setSuccessful] = useState(false);
  const { user } = useAuth();
  const steps = [
    ...numberedVaccineFields.map((config, index) => (
      <Step key={index} {...config} />
    )),
    <OtherSuppliesStep key="otherSupplies" />,
  ];

  const handleNext = async <Values extends FormikValues>({
    validateForm,
    setTouched,
  }: HandleNextArgs<Values>) => {
    const formErrors = await validateForm();

    if (Object.keys(formErrors).length) {
      setTouched(markNestedTouched(formErrors), true);
      return;
    }

    setStep((prev) => {
      return prev + 1;
    });
  };
  const handlePrev = (values: any) => {
    if (step === 0) {
      // navigate(-1);
      close();
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
          close();
          setSuccessful(false);
        }}
        isOpen={successful}
      />
      <div className="flex items-center justify-between w-full">
        <h1 className="text-base lg:text-2xl font-medium text-main leading-none tracking-[0.02em]">
          Logistics & Supplies
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
          initialValues={logisticsValidations}
          validationSchema={logisticsValidationSchemas[step]}
          onSubmit={(values) => {
            setDemographicData((prev) =>
              prev.map((item, idx) =>
                idx === Number(index)
                  ? {
                      ...item,
                      logisticsAndSuppliesData: {
                        ...values,
                        createdAt: new Date().toISOString(),
                      },
                      updatedAt: new Date().toISOString(),
                    }
                  : item
              )
            );

            console.log("Final Submit:", values);
          }}
        >
          {({ validateForm, setTouched, errors, values, setFieldValue }) => (
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LogisticsAndSupplies;
