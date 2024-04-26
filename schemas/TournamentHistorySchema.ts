import * as Yup from "yup";

export default Yup.object({
  tournamentDescription: Yup.string().required("Please enter the tournament description"),
  tournamentChampions: Yup.string().required("Please enter the tournament champions"),
  tournamentMVPs: Yup.string().required("Please enter the tournament MVPs"),
});
