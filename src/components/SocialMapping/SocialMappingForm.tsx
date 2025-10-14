import { Formik, Form } from "formik";
import SuccessModal from "@/utils/SuccessModal";
import { socialMappingInitValues, socialMappingSchema } from "./validations";
import { highRiskCommunities } from "@/typings/social-mapping";
import CustomSelect from "@/utils/CustomSelect";
import CustomInput from "@/utils/CustomInput";
import YesNoField from "@/utils/YesOrNoField";
import { useEffect, useState } from "react";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { useDemo } from "../context/DemographicsContext";

const SocialMappingForm = ({
  close,
  index,
}: {
  close: () => void;
  index: string;
}) => {
  const [successful, setSuccessful] = useState(false);
  const { setDemographicData } = useDemo();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
          Social Mapping
        </h1>
      </div>
      <div className="">
        <Formik
          initialValues={socialMappingInitValues}
          validationSchema={socialMappingSchema}
          onSubmit={(values) => {
            console.log(values);
            // setSocialMapData((prev) => [...prev, values]);
            setDemographicData((prev) =>
              prev.map((item, idx) =>
                idx === Number(index)
                  ? {
                      ...item,
                      socialMappingData: {
                        ...values,
                        createdAt: new Date().toISOString(),
                      },
                      updatedAt: new Date().toISOString(),
                    }
                  : item
              )
            );

            console.log("Final Submit:", values);
            setSuccessful(true);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-6 p-4">
              <CustomSelect
                label="1. What type of high-risk community is this?"
                placeholder="Select Community"
                value={values?.community}
                name="community"
                onChange={(val) => setFieldValue("community", val)}
                options={highRiskCommunities}
              />

              <CustomInput
                isRequired={true}
                type="text"
                name={`villageName`}
                label="2. Village / Site Name"
              />

              <CustomInput
                isRequired={true}
                type="number"
                name={`totalPopulation`}
                label="3. Total Population"
              />

              <YesNoField
                name="hasBarriers"
                label="4. Any barriers to full immunization?"
                isRequired={true}
              />

              {values.hasBarriers === "yes" && (
                <>
                  <CustomInput
                    isRequired={true}
                    type="text"
                    name={`accessBarriers`}
                    label="5. Access Barriers (what are the access barriers that affect full immunization?)"
                    as="textarea"
                    rows={3}
                  />
                  <CustomInput
                    isRequired={true}
                    type="text"
                    name={`accessRecommendations`}
                    label="6. Recommendations (Access)"
                    rows={3}
                    as="textarea"
                  />
                  <CustomInput
                    isRequired={true}
                    type="text"
                    name={`useBarriers`}
                    label="7. Use Barriers (What are the use barriers that affect full immunization?)"
                    as="textarea"
                    rows={3}
                  />

                  <CustomInput
                    isRequired={true}
                    type="text"
                    rows={3}
                    name={`useRecommendations`}
                    label="8. Recommendations (Use)"
                    as="textarea"
                  />
                </>
              )}

              <CustomInput
                isRequired={false}
                type="text"
                name={`responsiblePerson`}
                label="9. Responsible Person"
              />
              <CustomInput
                isRequired={false}
                type="text"
                name={`comment`}
                label="10. Comment"
                as="textarea"
              />
              <div className="w-full pt-10 flex justify-between">
                <button
                  type="button"
                  onClick={close}
                  className="gap-2 flex items-center justify-cener px-4 py-3 border-[2px] border-main text-main font-bold rounded-lg hover:cursor-pointer hover:bg-main/4 transition duration-300"
                >
                  <IoCaretBack />
                  <span className="uppercase font-bold">Back</span>
                </button>

                <button
                  type="submit"
                  onClick={() => console.log(values)}
                  className="gap-2 flex items-center justify-cener px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300"
                >
                  <span className="uppercase font-bold">Submit</span>
                  <IoCaretForward />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SocialMappingForm;
