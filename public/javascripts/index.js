window.addEventListener("DOMContentLoaded", (event) => {
  console.log("hello from javascript!");
});

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

const watchStatus = document.getElementById("watch-status-select");

watchStatus.addEventListener("click", async (e) => {
  e.preventDefault();

  const myShowListId = e.target.value;
  console.log(e.target.value);

  const url = window.document.location.href;
  const urlArray = url.split("");
  const showId = urlArray[urlArray.length - 1];
  // console.log(showId);

  if (myShowListId === "none") {
    const res = await fetch(`/shows/${showId}`, {
      method: "POST",
    });
  }

  if (myShowListId > 0) {
    const res = await fetch(`/shows/${showId}`, {
      method: "PUT",
    });
  }

  const data = await res.json();
  //   console.log(data)

  if (data.message === "Success") {
    //change innerhtml for the text (we need to add this) to show users that they changed it
  }
});
