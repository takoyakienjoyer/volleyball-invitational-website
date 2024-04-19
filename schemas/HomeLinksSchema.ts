import * as Yup from "yup";

export default Yup.object({
  scheduleAndResults: Yup.string().required("Please enter the link to the schedule and results"),
  spectatorTickets: Yup.string().required("Please enter the link to the spectator tickets"),
});
