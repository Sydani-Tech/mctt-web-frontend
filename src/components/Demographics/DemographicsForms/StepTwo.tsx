/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "@/components/context/AuthContext";
import CustomInput from "@/utils/CustomInput";
import YesNoField from "@/utils/YesOrNoField";
import { useFormikContext, FieldArray } from "formik";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function StepTwo() {
  const { values } = useFormikContext<any>();
  const {
    areThereOpinionLeaders,
    opinionLeaders,
    schools,
    faithBasedInstitutions,
    areThereFaithBasedInstitutions,
    areThereTraditionalAuthorities,
    traditionalAuthorities,
    areThereGroupsOrOrganizations,
    groupsOrOrganizations,
    areThereInfluencersOrOpinionLeaders,
    influencersOrOpinionLeaders,
    // isFacilityAvailable,
  } = values;

  const { user } = useAuth();
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <h1 className="pt-4 text-base lg:text-2xl font-medium leading-none tracking-[0.02em]">
          Health Facility
        </h1>
        <div className="flex gap-2 flex-col">
          <label className="text-base lg:text-lg">
            7. Name of Health Facility
          </label>
          <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
            {user?.phu}
          </div>
        </div>
        <CustomInput
          isRequired={true}
          name="distanceClosestToHealthFacility"
          label="8. Distance to closest facility"
        />

        {/* <CustomInput
          isRequired={true}
          name="nameOfHealthFacility"
          label="What is the name of the heath facility?"
        /> */}
        {/* <CustomInput
          isRequired={true}
          name="howManyHealthFacilities"
          type="number"
          label="9. How many health facilities are there?"
        /> */}
      </div>
      <div className="space-y-4">
        <h1 className="pt-4 text-base lg:text-2xl font-medium leading-none tracking-[0.02em]">
          Schools
        </h1>
        <CustomInput
          isRequired={true}
          name="howManySchools"
          type="number"
          label="9. How many schools are in this village?"
        />
        <FieldArray
          name="schools"
          render={(arrayHelpers) => (
            <div className="space-y-6 rounded-xl">
              {schools.map((_: any, index: number) => (
                <div
                  key={index}
                  className="p-4 space-y-4 border-main/50 border p-6 rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium text-gray-700 mb-2">
                      School {index + 1}
                    </h2>
                    <div
                      onClick={() => arrayHelpers.remove(index)}
                      className="flex text-gray-900 hover:cursor-pointer hover:text-gray-400 transition duration-300 gap-1.5 items-center"
                    >
                      <RiDeleteBin6Line />
                      <span className="">Delete</span>
                    </div>
                  </div>
                  <CustomInput
                    isRequired={false}
                    name={`schools[${index}].nameOfSchool`}
                    label="Name of  School"
                  />

                  <CustomInput
                    isRequired={false}
                    name={`schools[${index}].headMaster`}
                    label="Head Master/mistress name"
                  />
                  <CustomInput
                    isRequired={false}
                    name={`schools[${index}].headMasterContact`}
                    type="number"
                    label="Contact details of head master/mistress"
                  />
                  <CustomInput
                    isRequired={false}
                    name={`schools[${index}].strengthOfOpportunities`}
                    label="Strengths and opportunities for working with the school"
                  />
                </div>
              ))}

              <button
                type="button"
                className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
                onClick={() =>
                  arrayHelpers.push({
                    nameOfSchool: "",
                    headMaster: "",
                    headMasterContact: "",
                    strengthOfOpportunities: "",
                  })
                }
              >
                + Add School
              </button>
            </div>
          )}
        />
      </div>
      <div className="space-y-4">
        <h1 className="pt-4 text-base lg:text-2xl font-medium leading-none tracking-[0.02em]">
          Opinion leaders' form
        </h1>

        <YesNoField
          name="areThereOpinionLeaders"
          label="10. Are there any opinion leaders in this village?"
          isRequired={true}
        />

        {areThereOpinionLeaders === "yes" && (
          <FieldArray
            name="opinionLeaders"
            render={(arrayHelpers) => (
              <div className="space-y-6 rounded-xl">
                {opinionLeaders.map((_: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 space-y-4 border-main/50 border p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-medium text-gray-700 mb-2">
                        Opinion Leader {index + 1}
                      </h2>
                      <div
                        onClick={() => arrayHelpers.remove(index)}
                        className="flex text-gray-900 hover:cursor-pointer hover:text-gray-400 transition duration-300 gap-1.5 items-center"
                      >
                        <RiDeleteBin6Line />
                        <span className="">Delete</span>
                      </div>
                    </div>
                    <CustomInput
                      isRequired={false}
                      name={`opinionLeaders[${index}].nameOfLeader`}
                      label="Name of leader"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`opinionLeaders[${index}].contactOfLeader`}
                      label="Contact details of leader"
                      type="number"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`opinionLeaders[${index}].strengthOfWorkingWithLeader`}
                      label="Strengths and opportunities for working with the opinion leader"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`opinionLeaders[${index}].potentialContribution`}
                      label="Potential contribution and action for program"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
                  onClick={() =>
                    arrayHelpers.push({
                      nameOfLeader: "",
                      contactOfLeader: "",
                      strengthOfWorkingWithLeader: "",
                      potentialContribution: "",
                    })
                  }
                >
                  + Add Leader
                </button>
              </div>
            )}
          />
        )}
      </div>
      <div className="space-y-4">
        <h1 className="pt-4 text-base lg:text-2xl font-medium leading-none tracking-[0.02em]">
          Faith based institution
        </h1>

        <YesNoField
          name="areThereFaithBasedInstitutions"
          label="11. Are there any  faith based Institutions eg:churches, Mosques etc. in this village?"
          isRequired={true}
        />

        {areThereFaithBasedInstitutions === "yes" && (
          <FieldArray
            name="faithBasedInstitutions"
            render={(arrayHelpers) => (
              <div className="space-y-6 rounded-xl">
                {faithBasedInstitutions.map((_: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 space-y-4 border-main/50 border p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-medium text-gray-700 mb-2">
                        Institution {index + 1}
                      </h2>
                      <div
                        onClick={() => arrayHelpers.remove(index)}
                        className="flex text-gray-900 hover:cursor-pointer hover:text-gray-400 transition duration-300 gap-1.5 items-center"
                      >
                        <RiDeleteBin6Line />
                        <span className="">Delete</span>
                      </div>
                    </div>
                    <CustomInput
                      isRequired={false}
                      name={`faithBasedInstitutions[${index}].nameOfInstitution`}
                      label="Name of institution"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`faithBasedInstitutions[${index}].nameOfLeader`}
                      label="Name of Pastor/Sheikh and contact details"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`faithBasedInstitutions[${index}].strengthAndOpportunities`}
                      label="Strengths and opportunities for each group"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
                  onClick={() =>
                    arrayHelpers.push({
                      nameOfInstitution: "",
                      nameOfLeader: "",
                      strengthAndOpportunities: "",
                    })
                  }
                >
                  + Add institution
                </button>
              </div>
            )}
          />
        )}
      </div>
      <div className="space-y-4">
        <h1 className="pt-4 text-base lg:text-2xl font-medium leading-none tracking-[0.02em]">
          Traditional Authorities
        </h1>

        <YesNoField
          name="areThereTraditionalAuthorities"
          label="12. Are there any traditional authorities in this village?"
          isRequired={true}
        />

        {areThereTraditionalAuthorities === "yes" && (
          <FieldArray
            name="traditionalAuthorities"
            render={(arrayHelpers) => (
              <div className="space-y-6 rounded-xl">
                {traditionalAuthorities.map((_: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 space-y-4 border-main/50 border p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-medium text-gray-700 mb-2">
                        Traditional Authority {index + 1}
                      </h2>
                      <div
                        onClick={() => arrayHelpers.remove(index)}
                        className="flex text-gray-900 hover:cursor-pointer hover:text-gray-400 transition duration-300 gap-1.5 items-center"
                      >
                        <RiDeleteBin6Line />
                        <span className="">Delete</span>
                      </div>
                    </div>
                    <CustomInput
                      isRequired={false}
                      name={`traditionalAuthorities[${index}].name`}
                      label="Name of Tradaitional authority head"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`traditionalAuthorities[${index}].contactDetails`}
                      label="Contact details of traditional authority head"
                      type="number"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`traditionalAuthorities[${index}].strengthAndOpportunities`}
                      label="Strengths and opportunities for associated with this traitional authority"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
                  onClick={() =>
                    arrayHelpers.push({
                      name: "",
                      contactDetails: "",
                      strengthAndOpportunities: "",
                    })
                  }
                >
                  + Add Traditional Ruler
                </button>
              </div>
            )}
          />
        )}
      </div>
      <div className="space-y-4">
        <h1 className="pt-4 text-base lg:text-2xl font-medium leading-none tracking-[0.02em]">
          Groups and organizations within the community
        </h1>

        <YesNoField
          name="areThereGroupsOrOrganizations"
          label="13. Are there any groups and organization in this village?"
          isRequired={true}
        />

        {areThereGroupsOrOrganizations === "yes" && (
          <FieldArray
            name="groupsOrOrganizations"
            render={(arrayHelpers) => (
              <div className="space-y-6 rounded-xl">
                {groupsOrOrganizations.map((_: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 space-y-4 border-main/50 border p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-medium text-gray-700 mb-2">
                        Group/organization {index + 1}
                      </h2>
                      <div
                        onClick={() => arrayHelpers.remove(index)}
                        className="flex text-gray-900 hover:cursor-pointer hover:text-gray-400 transition duration-300 gap-1.5 items-center"
                      >
                        <RiDeleteBin6Line />
                        <span className="">Delete</span>
                      </div>
                    </div>
                    <CustomInput
                      isRequired={false}
                      name={`groupsOrOrganizations[${index}].name`}
                      label="Name of groups and organization"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`groupsOrOrganizations[${index}].contactDetails`}
                      label="Contact details of group leader"
                      type="number"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`groupsOrOrganizations[${index}].strengthAndOpportunities`}
                      label="Strengths and opportunities for associated with this traitional authority"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
                  onClick={() =>
                    arrayHelpers.push({
                      name: "",
                      contactDetails: "",
                      strengthAndOpportunities: "",
                    })
                  }
                >
                  + Add Traditional Ruler
                </button>
              </div>
            )}
          />
        )}
      </div>
      <div className="space-y-4">
        <h1 className="pt-4 text-base lg:text-2xl font-medium leading-none tracking-[0.02em]">
          Other influencers and opinion leaders in the village
        </h1>

        <YesNoField
          name="areThereInfluencersOrOpinionLeaders"
          label="14. Are there any influencers and opinion leaders  in this village?"
          isRequired={true}
        />

        {areThereInfluencersOrOpinionLeaders === "yes" && (
          <FieldArray
            name="influencersOrOpinionLeaders"
            render={(arrayHelpers) => (
              <div className="space-y-6 rounded-xl">
                {influencersOrOpinionLeaders.map((_: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 space-y-4 border-main/50 border p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-medium text-gray-700 mb-2">
                        Influencers and opinion leaders {index + 1}
                      </h2>
                      <div
                        onClick={() => arrayHelpers.remove(index)}
                        className="flex text-gray-900 hover:cursor-pointer hover:text-gray-400 transition duration-300 gap-1.5 items-center"
                      >
                        <RiDeleteBin6Line />
                        <span className="">Delete</span>
                      </div>
                    </div>
                    <CustomInput
                      isRequired={false}
                      name={`influencersOrOpinionLeaders[${index}].name`}
                      label="Name of other influencers and opinion Leaders"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`influencersOrOpinionLeaders[${index}].contactDetails`}
                      label="Contact details of other influencers and opinion Leaders "
                      type="number"
                    />
                    <CustomInput
                      isRequired={false}
                      name={`influencersOrOpinionLeaders[${index}].strengthAndOpportunities`}
                      label="Strengths and opportunities for each influencers and opinion leaders"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
                  onClick={() =>
                    arrayHelpers.push({
                      name: "",
                      contactDetails: "",
                      strengthAndOpportunities: "",
                    })
                  }
                >
                  + Add Traditional Ruler
                </button>
              </div>
            )}
          />
        )}
      </div>
    </div>
  );
}
