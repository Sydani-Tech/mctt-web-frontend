/* eslint-disable @typescript-eslint/no-explicit-any */
import MailIcon from "@/assets/icons/MailIcon";
import Logo from "../../assets/logo.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LockIcon from "@/assets/icons/Lock";
import { useNavigate } from "react-router";
// import { useQueryClient } from "@tanstack/react-query";
// import { USER_DETAILS } from "@/hooks/auth";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "@/utils/apiRequest";
import { USER_DETAILS } from "@/hooks/auth";

const Login = () => {
  const initialValues = {
    email: "abc1@sydani.org",
    password: "numerator1@7121",
  };
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // const queryClient = useQueryClient();

  const handleSubmit = async (values: any, { setFieldError }: any) => {
    try {
      const req = await apiRequest({
        method: "POST",
        path: "/api/method/slmctt.req.login",
        data: values,
      });
      await localStorage.setItem(USER_DETAILS, JSON.stringify(req));
      // await queryClient.invalidateQueries({ queryKey: [USER_DETAILS] });
      setUser(req);
      navigate("/dashboard");
    } catch (error: any) {
      if (error.message.includes("Account")) {
        setFieldError("email", error.message);
      }
      if (error.message.includes("password")) {
        setFieldError("password", error.message);
      }
      console.log(error);
    }
  };
  // const handdleSubmit = async (values: any, { setFieldError }: any) => {
  //   try {
  //     // Prepare FormData (multipart/form-data)
  //     const formData = new FormData();
  //     formData.append("email", values.email);
  //     formData.append("password", values.password);

  //     // Make the fetch request
  //     const response = await fetch(
  //       "https://slmctt.sydani.org/api/method/slmctt.req.login",
  //       {
  //         method: "POST",
  //         headers: {
  //           // Authorization: "token f5aa952a551396980d:067d5d7f2b036ad6c7",
  //           // Cookie:
  //           //   "full_name=Numerator%20Uno; sid=f417605a8780e823bca4494d2f9998dfabe045eb3faa164de6aad56b; system_user=yes; user_id=abc1%40sydani.org; user_image=",
  //         },
  //         body: formData,
  //       }
  //     );

  //     // Parse JSON response
  //     const data = await response.json();
  //     console.log(data);

  //     if (!response.ok) {
  //       throw new Error(data.message || "Login failed");
  //     }

  //     // Update app state
  //     await queryClient.invalidateQueries({ queryKey: [USER_DETAILS] });
  //     setUser(data.user);
  //     navigate("/dashboard");
  //   } catch (error: any) {
  //     if (error.message.includes("Account")) {
  //       setFieldError("email", error.message);
  //     }
  //     if (error.message.includes("password")) {
  //       setFieldError("password", error.message);
  //     }
  //     console.error(error);
  //   }
  // };

  return (
    <div className="w-full h-screen gap-6 px-5 flex flex-col items-center justify-center">
      <div className="flex items-center">
        <img src={Logo} className="max-w-[150px] max-h-[154px]" alt="" />
        <div className="flex flex-col -ml-3">
          <h2 className="text-[#333333] text-sm font-bold leading-none tracking-[0.02em]">
            MICRO COVERAGE
          </h2>
          <h1 className="text-[41.3px] text-[#0D47A1]  font-bold leading-none tracking-[0.02em]">
            trackr
          </h1>
        </div>
      </div>

      <h2 className="text-[#333333] text-[32px] font-medium leading-none tracking-[0.02em]">
        Login
      </h2>
      <span className="text-[#8A8A8A] text-[22px] leading-none tracking-[0.02em]">
        Please enter your details to login
      </span>

      <div className="max-w-[460px] w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="space-y-6">
                <div className="flex flex-col gap-2.5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="relative w-full">
                    <MailIcon />
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="pl-16 w-full py-5 border-main/50 border bg-main-gray/5 rounded-lg shadow-sm focus:ring-main focus:border-main"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt- text-sm text-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative w-full">
                    <LockIcon />
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="pl-16 w-full py-5 border-main/50 border bg-main-gray/5 rounded-lg shadow-sm focus:ring-main focus:border-main"
                    />
                  </div>

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>
              </div>
              <div className="w-full flex items-end justify-end">
                <span className="text-main text-end font-medium">
                  Forgot Password?
                </span>
              </div>
              {isSubmitting ? (
                <div className="flex h-14 pt-1 w-rull items-center justify-center">
                  <span className="loader_spinner"></span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-main hover:bg-main/90 text-white font-bold text-lg tracking-wider uppercase py-5 rounded-lg shadow-lg"
                >
                  Login
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
