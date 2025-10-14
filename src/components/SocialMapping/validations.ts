/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SocialMappingForm } from "@/typings/social-mapping";
import * as Yup from "yup";

export const socialMappingInitValues: SocialMappingForm = {
  community: "",
  villageName: "",
  totalPopulation: 1,
  hasBarriers: "" as any,
  accessBarriers: "",
  accessRecommendations: "",
  useBarriers: "",
  useRecommendations: "",
  // source: "",
  responsiblePerson: "",
  comment: "",
};

export const socialMappingSchema = Yup.object({
  community: Yup.string().required("Select a community"),
  villageName: Yup.string().required("Village / Site name is required"),
  totalPopulation: Yup.number().required("Population required").min(0),
  hasBarriers: Yup.string().oneOf(["yes", "no"]).required("Select Yes or No"),
  accessBarriers: Yup.string().when("hasBarriers", {
    is: "yes",
    then: (s) => s.required("Provide access barriers"),
  }),
  accessRecommendations: Yup.string().when("hasBarriers", {
    is: "yes",
    then: (s) => s.required("Provide recommendations for access barriers"),
  }),
  useBarriers: Yup.string().when("hasBarriers", {
    is: "yes",
    then: (s) => s.required("Provide use barriers"),
  }),
  useRecommendations: Yup.string().when("hasBarriers", {
    is: "yes",
    then: (s) => s.required("Provide recommendations for use barriers"),
  }),
  // source: Yup.string().nullable(),
  responsiblePerson: Yup.string().nullable(),
  comment: Yup.string().nullable(),
});
