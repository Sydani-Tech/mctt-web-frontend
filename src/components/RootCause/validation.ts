import * as Yup from "yup";

// validation for one problem block
const problemSchema = Yup.object().shape({
  problem: Yup.string().required("Problem is required"),
  rootCause: Yup.string().required("Root cause is required"),
  solutionLimited: Yup.string().required(
    "Solution with limited resources is required"
  ),
  solutionExtra: Yup.string().required(
    "Solution needing additional resources is required"
  ),
  responsible: Yup.string().required(
    "Responsible person and timeline is required"
  ),
});

// schema for all sections
export const rootCauseAnalysisSchema = Yup.object().shape({
  reachingTarget: Yup.array()
    .of(problemSchema)
    .min(1, "At least one problem is required"),
  supportiveSupervision: Yup.array()
    .of(problemSchema)
    .min(1, "At least one problem is required"),
  engagingCommunities: Yup.array()
    .of(problemSchema)
    .min(1, "At least one problem is required"),
  monitoringData: Yup.array()
    .of(problemSchema)
    .min(1, "At least one problem is required"),
  planningResources: Yup.array()
    .of(problemSchema)
    .min(1, "At least one problem is required"),
  coldChain: Yup.array()
    .of(problemSchema)
    .min(1, "At least one problem is required"),
  integration: Yup.array()
    .of(problemSchema)
    .min(1, "At least one problem is required"),
  surveillance: Yup.array()
    .of(problemSchema)
    .min(1, "At least one problem is required"),
});
