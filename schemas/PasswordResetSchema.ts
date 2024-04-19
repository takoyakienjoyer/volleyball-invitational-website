import * as Yup from "yup";

export default Yup.object({
  currentPassword: Yup.string().required("Please enter your password"),
  newPassword: Yup.string().required("Please enter your new password"),
  confirmPassword: Yup.string()
    .required("Please confirm your new password")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});
