import * as Yup from "yup";

export default Yup.object({
  placement: Yup.string().required("Please enter the participant's placement"),
  number: Yup.string().required("Please enter the participant's number"),
  name: Yup.string().required("Please enter the participant's name"),
  school: Yup.string().required("Please enter the participant's school"),
  position: Yup.string().required("Please enter the participant's position"),
});
