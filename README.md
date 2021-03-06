# Movie Fan Club App

We're going to create a movie fan club web app. Users (fans) can search for all the imdb movies, add celebrities and movies. This is a very selective club. Only users that have signed up can access the database and add documents to it.

### Component 1
Import the movie database and use form to query the database. Use handlebars to display the result. In addition, make a separate page with a form that enables users to insert new movies into the database.

### Component 2
Create a new celebrity collection with the following fields:
*   Firstname
*   Lastname
*   Nationality
User have to be able to add new celebrities and search for them.

### Component 3
Create a log in system! First you've to create an user collection that has at least the following fields:

* username
* password

Create a sign up page with a form that enables visitors to become users. You'll also need a log in page that checks if an user provided the correct credentials. If so, `res.redirect` the user to another part of the website. If not, `res.redirect` the user to the sign up page and tell him that he smells and nobody loves him. 

### Component 4
This log in system is almost 'real'. If an user is requesting a page, we want to know if the user is authorized to do so. In the previous step we checked if the user provided the right credentials. Now we also want to let the other pages know that this user is authorized. Unfortunately,the HTTP protocol is not very helpfull, because it doesn't save any data between pages. It resets all the data on every refresh and when we navigate to a new page.

Cookies to the resque! With cookies we can store data between pages. Check the express documentation how to set a cookie: https://expressjs.com/en/4x/api.html#res.cookie. To read the cookie, you need to dive into https://expressjs.com/en/4x/api.html#req.cookies and install cookieparser: https://www.npmjs.com/package/cookie-parser.

The basic flow is as follows:

1. If logged in succesfully set the cookie
2. In every route except for the login and signup route check if the cookie was set.
    If cookie was set: show page (render it)
    If not `res.redirect` the user to the sign up page

### Component 5
What's the fun in logging in if you can't log out Create a logout route that clears your cookie. Remember "RTFM": https://expressjs.com/en/api.html#res.clearCookie.

### Component 6
Oh oh, your code is getting chaotic! We've to clean up that mess. Create a routes folder and make a module out of every route and require it in your root file (app.js). Do the same with the mongoose models. That's better isn't it? No more scrolling to find the code you're looking for. This [resource](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#Routes_primer) is helpfull.

### Component 7
It's time to increase the readability of your code further by using promises. Rewrite all your code in such a way, that mongoose is no longer using callback to handle asynchronous code, but promises. 

#### Suggested readings:

From the learning platform of week 4
*   Express | GET Methods - Route Params & Query String
*   Express | POST Method - Request Body

The World Wide Web
*   https://mongoosejs.com/docs/models.html
*   https://expressjs.com/en/4x/api.html#res.cookie
*   https://expressjs.com/en/4x/api.html#req.cookies
*   https://www.npmjs.com/package/cookie-parser

