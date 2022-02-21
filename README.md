# Express Project Skeleton

Use this project skeleton as a starting point for structuring your app. Things to note

- Sequelize configuration has not yet been added -- you will need to set that up yourself
- You may find yourself wanting to use javascript -- js files can be added in `public/javascripts` and should be appended to the Pug templates as needed
- CSS files can go in `public/stylesheets` and also will need to be added to Pug templates

## 7. Bonus Features

- Display a list of recent commonly used tags.
- Users can search for other users to view all of their reviews.
- Users can create and delete lists

### Comments

- Logged in users can post comments on reviews.
- Logged in users can edit and delete their own comments.
- All users can view comments on reviews.

### Likes

- Logged in users can “like” and “dislike” reviews and comments.
- Logged in users can remove their own like/dislike from reviews and comments.
- All users can see how many users have liked a review or comment.

### Tags(genres)

- Logged in users can add genre tags to their reviews via dropdown menu.
- All users can click on tags to view a list of recent reviews that contain that tag.
