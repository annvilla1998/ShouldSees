# **Shouldsees**, a clone of GoodReads

This is a clone of Good Reads called **Shouldsees**. **Shouldsees** is a website where users can keep track of shows that they want to watch, are currently watching, and have watched. Users can view a show's information, as well as reviews left by other users, to help them formulate the decision of if they want to watch the show or not. Users can also leave reviews and ratings of shows to share their opinions and help other users decide if the show is worth watching or not.

## How to start development environment

To start the development environment, run `npm install` and `npm start`. View the `.env.example` to assist in development environment creation.

## Technologies used

**Shouldsees** utilizes javascript, express, and sequelize. Pug is used to render the HTML of the site, as well as CSS for styling. Csurf and bcrypt are used for user protection, and general security of the site. Faker was used in development to assist in creation of example users.

## Link to live site

https://shouldsees.herokuapp.com/

## Link to Wiki docs

https://github.com/annvilla1998/ShouldSees/wiki

## Two features that show off the team’s technical abilities

`Watch Status` is a _dynamic_ feature that allows users to add shows to lists, or change shows from one list to another, on a show’s page, without having to refresh the page. The `Watch Status` will dynamically change the text displayed on the screen, so users have confirmation on which list they changed the show to. This feature shows off our team’s technical abilities because it utilizes a join table and event listeners to share information between the front end and back end. The join table is used to create and destroy relationships between two tables in our database, and the event listener grabs information from the pug, sends it to the back end for processing, and then sends the new information back to the front end to display.

`Deleting a review` is another _dynamic_ feature that allows users to delete their review from a show’s page without having to refresh or reload the page. This feature utilizes event listeners to tell the back end to destroy the review from the database when a user clicks delete, and then remove the review from the show’s page’s HTML instantaneously, without having the user be redirected.

## Two challenges faced and the way that we solved them

We had trouble with our database many times throughout this project, which led to having to rethink our logic many times. The first time was when we tried to seed our database using `faker` in a while loop for our show’s images, names, descriptions, and a randomly generated number for rating. The issue with that was, every time the page reloaded, a new set of images, names, and descriptions would appear. We soon realized that this would lead to confusion for users of our site, because generally, users expect the information to be static, and not be randomized every time they refresh the page. So, we spent some time gathering information about shows from Rotten Tomatoes to add to our database, to make our site feel more realistic.

The second issue with our database came when we had to utilize the join table to establish relationships between `Shows` and `Show Lists` for our `Watch Status` feature. We originally had a `showListId` on each show, but realized that that was faulty logic, because one show shouldn’t only be connected to a single show list. It took us some time to figure this out, but a lot of our project depended on this crucial information. After adding `showId` and `showListId` to our join table, we were able to properly use the join table to establish and delete relationships with the click of a button that utilized event listeners. After updating our join table model, we were now able to grab information with event listeners from the pug forms, and send it to our backend for processing, and then send it back to the front end for users to see. With that, we completed our `Watch Status` feature!

The challenges that were mentioned here were only two of many, many challenges that we faced in this week that we spent on this project. The issues with our database taught us the importance of thorough planning before starting a project. The database is the backbone of the website, and to run properly, information needs to be properly linked and thought through. Through many failed attempts of implementation, we realized the holes in our plans that we didn’t even know until we came across dead ends of logic. We finished this project with new knowledge, and will continue to use the experience that we gained from problem solving and revising our plans in the future. All of the commented out code in this project are all battle scars that we can look back on to see all the trial and errors that we went through to implement our visions.

## Highlight code snippets

### Dynamic Watch Status Change

```javascript
const form = document.getElementById("select-form-watch-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const updatedShowListId = formData.get("watch-status-select");
  const showId = formData.get("show-id-input");

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

    if (data.message === "Success") {
      const nameDiv = document.querySelector(".watch-list-display");
      nameDiv.innerHTML = data.newListEntry.MyShowList.listName;
    }
  } catch (err) {
    location.reload(true);
  }
});
```

```javascript
router.post(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId);

    const userId = req.session.auth.userId;
    const user = await db.User.findByPk(userId);

    const lists = await MyShowList.findAll({
      where: {
        userId: userId,
      },
      include: {
        model: Show,
      },
    });

    const wantToWatchId = lists[0].id;
    const currentlyWatchingId = lists[1].id;
    const watchedId = lists[2].id;
    const { updatedShowListId } = req.body;

    const joinWantToWatch = await MyShowListShow.findOne({
      where: {
        myShowListId: wantToWatchId,
        showsId: showId,
      },
    });

    const joinCurrentlyWatching = await MyShowListShow.findOne({
      where: {
        myShowListId: currentlyWatchingId,
        showsId: showId,
      },
    });

    const joinWatched = await MyShowListShow.findOne({
      where: {
        myShowListId: watchedId,
        showsId: showId,
      },
    });

    if (joinWantToWatch) {
      joinWantToWatch.destroy();
    }

    if (joinCurrentlyWatching) {
      joinCurrentlyWatching.destroy();
    }

    if (joinWatched) {
      joinWatched.destroy();
    }

    const newListConnection = await db.MyShowListShow.build({
      myShowListId: updatedShowListId,
      showsId: showId,
    });

    await newListConnection.save();

    const finalListConnection = await db.MyShowListShow.findOne({
      where: {
        myShowListId: updatedShowListId,
        showsId: showId,
      },
      include: {
        model: MyShowList,
      },
    });

    res.json({ message: "Success", newListEntry: finalListConnection });
  })
);
```

### Dynamic Delete Review

```javascript
const deleteBtns = document.querySelectorAll(".delete-review-button");

for (let i = 0; i < deleteBtns.length; i++) {
  const btn = deleteBtns[i];
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const reviewId = e.target.id;

    // console.log("DELETE REIVEW JS!!!!!!!!!");

    const res = await fetch(`/shows/review/${reviewId}/delete`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.message === "Success") {
      const reviewToDelete = document.querySelector(
        `#review-container-${reviewId}`
      );
      reviewToDelete.innerHTML = ``;
      reviewToDelete.remove();
    }
  });
}
```

```javascript
router.delete(
  "/review/:id(\\d+)/delete",
  asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const review = await Review.findByPk(reviewId);

    if (req.session.auth.userId === review.userId) {
      await review.destroy();
      res.json({ message: "Success" });
    };

    if (req.session.auth.userId !== review.userId) {
      const err = new Error("Unauthorized");
      err.status = 401;
      err.message = "You are not authorized to delete this review.";
      err.title = "Unauthorized";
      throw err;
    };

    if (!review) {
      next(reviewNotFoundError(req.params.id));
    };
  });
);

```
