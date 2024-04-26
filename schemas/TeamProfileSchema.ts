import * as Yup from "yup";

export default Yup.object({
  name: Yup.string().required("Please enter the school's name"),
  nickname: Yup.string().required("Please enter the school's nickname"),
  enrollment: Yup.number().required("Please enter the school's enrollment"),
  location: Yup.string().required("Please enter the school's location"),
  colors: Yup.string().required("Please enter the school's colors"),
  conference: Yup.string().required("Please enter the school's conference"),
  headCoach: Yup.string().required("Please enter the school's head coach"),
  stateFinalAppearances: Yup.number().required("Please enter the school's state final appearances"),
  stateChampionships: Yup.number().required("Please enter the school's state championships"),
  currentTournamentRecord: Yup.string().required("Please enter the school's current tournament record"),
  yearsParticipated: Yup.number().required("Please enter the school's years participated"),
  eastInviteRecord: Yup.string().required("Please enter the school's East Invite record"),
  bestFinish: Yup.string().required("Please enter the school's best finish"),
  pastAllTournament: Yup.string().required("Please enter the school's past All-Tournament players"),
  pastMVP: Yup.string().required("Please enter the school's past MVPs"),
  schoolLogo: Yup.mixed()
    .required("Please upload the school's logo")
    .test("fileType", "Unsupported file type", (value: any) => value && value.type.startsWith("image/")),
});
