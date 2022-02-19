window.addEventListener("DOMContentLoaded", (event) => {
  console.log("hello from javascript!");
});

const form = document.getElementById("select-form-watch-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const myShowListId = formData.get("watch-status-select");
  const showId = formData.get("show-id-input");

  const myShowListId = e.target.value;
  // console.log("SHOW ID=================", showId);
  // console.log("LIST ID=================", myShowListId);
  try {
    const res = await fetch(`/shows/${showId}`, {
      method: "POST",
      myShowListId = myShowListId,
      showId = showId,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw res;
    }
  } catch (err) {
    handleErrors(err);
  }

  if (data.message === "Success") {
    //change innerhtml for the text (we need to add this)
    //to show users that they changed it
  } else {

  }
});


// query the join table and look for the listId and showId,

  // send a fetch route with matching path, method will be post,
  // have to send body with the necessary info, like the ids
  // maybe probably, unless we put id in route, might cause prob
  // just put in body)

  // if put in body, content type is application.json
  // then, response will be saved in res (line 51)
  // in the route, do the logic that we need
  // check if the relationship is in the join table, if it is,
  // destroy it, if not, create it

  //send message forward, send a message, res.json() with whatever
  //message (like success, or any other info, like data for name of table)
  // res.json() the name of the list that they put it on
  // query select an empty div, a designated area for this
  // select the div to change inner html to say whatever list it's on,
  //retrieve from res.json()








// const watchStatus = document.getElementById("watch-status-select");

// watchStatus.addEventListener("click", async (e) => {
//   e.preventDefault();

// gets the value number of option
//   const res = e.target.value;
//   console.log(watchListIndex);
//   const showId = e.target.id
//   const res = await fetch(`/shows/${showId}`, {
//     method: "POST",
//   });

//   const res = e.target.value;

//   const data = await res.json();
//   const data = await res.json();
//   const url = window.document.location.href;
//   const urlArray = url.split("");
//   const showId = urlArray[urlArray.length - 1];
//   console.log(e.target.value);

//   if (req.session.user) {
//     userId = req.session.user.userId;
//     console.log(userId);
//   }
// });

// const form = document.getElementById("select-form-watch-status");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const listId = formData.get("watch-status-select");
//   const showId = formData.get("show-id-input");

//   const myShowListId = e.target.value;
//   // console.log("SHOW ID=================", showId);
//   // console.log("LIST ID=================", listId);

//   // const url = window.document.location.href;
//   // const urlArray = url.split("");
//   // const showId = urlArray[urlArray.length - 1];
//   // console.log(showId);

//   // if ( if no relationship in join table ) {
//   const res = await fetch(`/shows/${showId}`, {
//     method: "POST",
//   });

// // query the join table and look for the listId and showId,

//   // send a fetch route with matching path, method will be post,
//   // have to send body with the necessary info, like the ids
//   // maybe probably, unless we put id in route, might cause prob
//   // just put in body)

//   // if put in body, content type is application.json
//   // then, response will be saved in res (line 51)
//   // in the route, do the logic that we need
//   // check if the relationship is in the join table, if it is,
//   // destroy it, if not, create it

//   //send message forward, send a message, res.json() with whatever
//   //message (like success, or any other info, like data for name of table)
//   // res.json() the name of the list that they put it on
//   // query select an empty div, a designated area for this
//   // select the div to change inner html to say whatever list it's on,
//   //retrieve from res.json()

//   // const data = await res.json();

//     if (data.message === "Success") {
//       //change innerhtml for the text (we need to add this) to show users that they changed it
//     } else {

//     }
//   }

//   // if (myShowListId > 0) {
//   //   const res = await fetch(`/shows/${showId}`, {
//   //     method: "PUT",
//   //   });
//   //   const data = await res.json();

//   //   //   if (data.message === "Success") {
//   //   //     //change innerhtml for the text (we need to add this) to show users that they changed it
//   //   //   }
//   // }

//   //   console.log(data)
// });
