import * as Yup from "yup";
import { syringeSteps } from "./syringeSteps";

export const logisicsValidationSchemas = syringeSteps.map((step) =>
  Yup.object({
    [`${step.prefix}Annual`]: Yup.number()
      .typeError("Must be a number")
      .required("Required"),
    [`${step.prefix}Monthly`]: Yup.number()
      .typeError("Must be a number")
      .required("Required"),
    [`${step.prefix}Total`]: Yup.number()
      .typeError("Must be a number")
      .required("Required"),
  })
);
