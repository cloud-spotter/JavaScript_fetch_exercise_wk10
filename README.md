# JavaScript_fetch_exercise_wk10
Makers Academy Wk10 JavaScript Web Applications - Phase 3 - Making HTTP requests with fetch

Objectives:
- Understand how the fetch function can be used to make an HTTP request.
- Use the response data received by fetch to modify the page.

Exercise directory given.

**Exercise - displaying the info on the page**
So far, the code only prints the repository data to the console. Add code to the GithubView class so that it also calls the display method.

Update the display method so that it will:

Set the content of the #repo-name element to equal the value of the full_name property from the repo data.
Set the content of the #repo-description element to equal the value of the description property from the repo data.
We also want to display the repo's profile picture:

Add a new element <img> on the page, and add JS code so that it displays the image (the image URL can be found under the property organization.avatar_url). You'll have to research how we can dynamically set the HTML image's source URL with JavaScript.
