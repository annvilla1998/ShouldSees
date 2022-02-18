window.addEventListener("DOMContentLoaded", (event) => {
  console.log("hello from javascript!");
});

const watchStatus = document.getElementById("watch-status-select");

watchStatus.addEventListener("click", async (e) => {
  e.preventDefault();

  // gets the value number of option
  const watchListIndex = e.target.value;
  // console.log(watchListIndex);
});
