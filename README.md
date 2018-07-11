# What's in the Food Bank?

A web application to track a food bank's inventory and provide suggestions of recipes based on what is available that week.

It offers dual user and admin views. Admins maintain the inventory and users see availability of items that week and have the opportunity to better meal plan for their household.

### Demo

[Demo deployment](https://rocky-refuge-16506.herokuapp.com/):

## Local Development

### Initial setup
`npm install`

### Start the server
`npm run dev`

### Run the React UI

The React app is configured to proxy backend requests to the local Node server.

In a separate terminal from the API server, start the UI:

###Always change directory, first
`cd react-ui/`

### Initial setup
`npm install`

`npm run start`

#Both of these need to be running in order for the page to upload.

### Future Plans
 1) Take out fetch calls for users on container pages and pass down the user state from app.js<br>
 2) Enable admin authorization on the admin api routes<br>
 3) Change the logo for the favicon to custom logo<br>
 4) Using the search box on meal plan to search through inventory<br>
 5) Reaching out to food banks for further customization<br>
 6)Move the way we enable admins from the front end to the back end in order to secure the information and put the strain of use on the backend
