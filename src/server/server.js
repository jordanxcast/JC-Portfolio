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

export const writeBlogEntry = (newEntry) => {
  const { blogTitle, blogSummary, blogDate, blogContent } = newEntry;
  return database
    .ref("blogEntries/" + newEntry.blogTitle)
    .set({ blogTitle, blogSummary, blogDate, blogContent });
};

export function readBlogEntries(returnCallback) {
  database
    .ref("blogEntries/")
    .once("value")
    .then(function (snapshot) {
      let blogArr = blogEntriesToArr(snapshot);
      console.log(blogArr, "blog arr in read blog entries");
      return returnCallback(blogArr);
    });
}

function blogEntriesToArr(snapshot) {
  var returnArr = [];

  snapshot.forEach(function (childSnapshot) {
    var item = childSnapshot.val();
    item.key = childSnapshot.key;

    returnArr.push(item);
  });

  return returnArr;
}

export const writeLogin = (user, pass, successfulUser) => {
  //write login data to firebase
};
