import { Formik, Form } from "formik";
import SuccessModal from "@/utils/SuccessModal";
import CustomSelect from "@/utils/CustomSelect";
import CustomInput from "@/utils/CustomInput";
import { useEffect, useState } from "react";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
// import { useDemo } from "@/components/context/DemographicsContext";
import YesNoField from "@/utils/YesOrNoField";
import PageLayout from "@/components/Common/PageLayout";
// import { useDemo } from "../context/DemographicsContext";

const sessionTypes = [
  {
    label: "Fixed (F)",
    value: "Fixed (F)",
  },
  {
    label: "Outreach  (O)",
    value: "Outreach  (O)",
  },
  {
    label: "Mobile (M)",
    value: "Mobile (M)",
  },
];

const SessionPlanForm = () => {
  const [successful, setSuccessful] = useState(false);
  //   const { setDemographicData } = useDemo();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-col gap-6 h-full max-w-[768px] mx-auto">
        <SuccessModal
          //   linkTo={`demographics/details/${index}`}
          successType="Demographics Details"
          onClose={() => {
            // close();
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
            initialValues={{
              sessionPerWeek: "",
              distanceToVacinationPost: "",
              sessionType: "",
              otherKeyMNCHActivities: "",
              infantsVaccinated: "",
              areThereHighRiskPopulations: "",
            }}
            //   initialValues={socialMappingInitValues}
            //   validationSchema={socialMappingSchema}
            onSubmit={(values) => {
              console.log(values);
              // setSocialMapData((prev) => [...prev, values]);
              // setDemographicData((prev) =>
              //   prev.map((item, idx) =>
              //     idx === Number(index)
              //       ? {
              //           ...item,
              //           socialMappingData: {
              //             ...values,
              //             createdAt: new Date().toISOString(),
              //           },
              //           updatedAt: new Date().toISOString(),
              //         }
              //       : item
              //   )
              // );

              console.log("Final Submit:", values);
              setSuccessful(true);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form className="space-y-6 p-4">
                <div className="flex gap-2 flex-col">
                  <label className="text-base lg:text-lg">
                    Distance from Health Facility
                  </label>
                  <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
                    {/* {data?.distanceClosestToHealthFacility} */}
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="text-base lg:text-lg">
                    Total population
                  </label>
                  <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
                    {/* {data?.totalPopulation} */}
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="text-base lg:text-lg">Live Births</label>
                  <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
                    {/* {data?.numberOfBirths} */}
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="text-base lg:text-lg">
                    Surviving Infants
                  </label>
                  <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
                    {/* {data?.survivingInfants} */}
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="text-base lg:text-lg">Pregnant Women</label>
                  <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
                    {/* {data?.pregnantWomen} */}
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="text-base lg:text-lg">
                    Women of Child Bearing age (22.2%)
                  </label>
                  <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
                    {/* {data?.womenOfChildBearingAge} */}
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="text-base lg:text-lg">
                    Women of Child Bearing age (22.2%)
                  </label>
                  <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
                    {/* {data?.womenOfChildBearingAge} */}
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="text-base lg:text-lg">
                    Children aged from 12-23 month
                  </label>
                  <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
                    {/* {data?.["12To23Months"]} */}
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="text-base lg:text-lg">
                    Children aged from 24-59 month
                  </label>
                  <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
                    {/* {data?.["24To59Months"]} */}
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <div className="flex flex-col gap-0.5">
                    <label className="text-base lg:text-lg">
                      HPV target (%)
                    </label>
                    <span className="text-sm text-gray-400">
                      Percentage/number of children due for HPV vaccine from the
                      total population
                    </span>
                  </div>
                  <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
                    {/* {data?.hpvTarget} */}
                  </div>
                </div>
                <CustomInput
                  isRequired={true}
                  type="text"
                  name={`distanceToVacinationPost`}
                  label="Distance to vaccination post (km)"
                  description="The distance of the post from the health facility in km"
                />
                <CustomInput
                  isRequired={true}
                  type="text"
                  name={`otherKeyMNCHActivities`}
                  label="What other key MNCH activities is to be integrated"
                  description="The distance of the post from the health facility in km"
                />
                <CustomSelect
                  label="What type of session do you conduct?"
                  placeholder="Select Session type"
                  value={values?.sessionType}
                  name="sessionType"
                  onChange={(val) => setFieldValue("sessionType", val)}
                  options={sessionTypes}
                />

                <CustomInput
                  isRequired={true}
                  type="text"
                  name={`otherKeyMNCHActivities`}
                  label="What other key MNCH activities is to be integrated"
                  description="eg. Vit A or Albendazole)"
                />

                <YesNoField
                  name="areThereHighRiskPopulations"
                  label="Are these high risk populations?"
                  isRequired={true}
                />

                <CustomInput
                  isRequired={true}
                  type="number"
                  name="infantsVaccinated"
                  label="How many infants were vaccinated by each vaccinator"
                />

                {/* <CustomSelect
                label="What type of session do you conduct?"
                placeholder="Select Session type"
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
              /> */}
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
    </PageLayout>
  );
};

export default SessionPlanForm;
