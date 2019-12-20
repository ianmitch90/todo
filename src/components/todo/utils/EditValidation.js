import * as yup from "yup";

// you can store constants higher up that way if you have a app wide change to validation you can implement it there or you can make local ones like im doing here to help readability
const validationMessages = {
  STRING: "Must be a string k thanks"
};

//im exporting the schema to improve readability where it is used, it should be noted that some yup options allow you to run ur own custom validation functions/regex so this helps brevity when used elsewhere
export const EditFormSchema = yup.object().shape({
  title: yup
    .string(validationMessages.STRING)
    .min(2, "Your Title is too Short!")
    .max(10, "Uh try again, too long!")
    .required("You may not have a title, but this needs one."),
  description: yup
    .string(validationMessages.STRING)
    .ensure()
    .strict()
    .when("title", {
      is: val => val === "bob",
      then: yup
        .string()
        .required("Explain yourself bob!")
        .min(80),
      otherwise: yup.string().notRequired()
    })
    .max(50, "At this point you need an IOS press release")
});
