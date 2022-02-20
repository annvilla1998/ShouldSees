// window.addEventListener("DOMContentLoaded", (event) => {
// });
console.log("hello from javascript!");

const form = document.getElementById("select-form-watch-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const updatedShowListId = formData.get("watch-status-select");
  const showId = formData.get("show-id-input");

  // console.log("SHOW ID=================", showId);
  console.log("LIST ID=================", updatedShowListId);
  const body = { updatedShowListId, showId };
  try {
    const res = await fetch(`/shows/${showId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw res;
    }
    const data = await res.json();
    console.log("!!!!!!!!!!!!!!DATA:", data.message);
    console.log("!!!!!!!!!!!!!!newListEntry:", data.newListEntry);
    console.log(
      "!!!!!!!!!!!!!!NAAAAAAMEEEEEEE:",
      data.newListEntry.MyShowList.listName
    );

    if (data.message === "Success") {
      //change innerhtml for the text (we need to add this)
      //to show users that they changed it
      //query select the div where the list name will go (make this in pug)
      //when insert html, css style will appear but if not there, css wont show
      //set inner html of div to list name that you get from res ()
      // SET INNER HTML TO data.newListEntry.MyShowList.listName
      const nameDiv = document.querySelector(".watch-list-display");
      nameDiv.innerHTML = data.newListEntry.MyShowList.listName;
    }
  } catch (err) {
    handleErrors(err);
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

//   const updatedShowListId = e.target.value;
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
