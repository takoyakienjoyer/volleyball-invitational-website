import * as Yup from "yup";

export default Yup.object({
  scheduleAndResultsLink: Yup.string().required("Please enter the link to the schedule and results"),
  scheduleLink: Yup.string().required("Please enter the link to the schedule"),
  poolPlayLink: Yup.string().required("Please enter the link to the pool play"),
  bracketPlayLink: Yup.string().required("Please enter the link to the bracket play"),
  spectatorTicketsLink: Yup.string().required("Please enter the link to the spectator tickets"),
});
