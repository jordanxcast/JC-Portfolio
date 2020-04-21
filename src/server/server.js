import Firebase from "./firebase";
var database = Firebase.database();

export const writeContactsData = (full_name, email, subject, message, cb) => {
  // console.log("!!!", full_name, email, subject, message);
  return database.ref("contact/" + full_name).set(
    {
      full_name,
      email,
      subject,
      message,
    },
    function (error) {
      if (error) {
        console.log("an error occurred when trying to submit");
        cb("error", error);
      } else {
        console.log("successfully submitted");
        //data save successully
        cb("successful");
      }
    }
  );
};
