import * as Yup from "yup";

export default Yup.object({
  email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});
