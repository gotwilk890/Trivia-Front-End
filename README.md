# READ ME

Study Buddy is a full stack application designed for the user to create a study guide and then be able to test themselves with a quiz.

  - [Study Buddy]
  - [Git Hub Front-End]
  - [Git Hub Back-End]

This is a full stack CRUD application written for a project.  This is still a work in progress.

### USER STORIES
- As a user I would like to create a username and password to access my content.
- As a user I would like to be able to login with previous credentials.
- As a user I would like to have my saved content loaded once I login.
- As a user I would like to logout
- As a user I would like to create a guide
- As a user I would like to update the name of my guide
- As a user I would like to delete my guide
- As a user I would like to be able to see all my guides
- As a user I would like to be able to add questions and answers to a guide
- As a user I would like to be able to update my questions and answers in a guide
- As a user I would like to be able to delete questions and answers from my guide
- As a user I would like to be able to see my questions in the guide.
- As a user I would like to be able to take a quiz with my quide
- As a user I would like to know how I did on my quiz.

Wireframes
- [Login](images/userstorylogin.png)
- [Guides](images/userstoryguides.png)
- [Quiz](images/userstoryquiz.png)



### Building the App

I started with planning out the data models that would be used in the back end of the application. It was decided that I would have a table for users, guides, and quizzes.
I began with writing my models and routes and testing them with curl and postman to ensure the data could be reached.

From there I began creating a very raw HTML site and began connecting the database in the back end to the front-end with ajax calls. Once the calls were solidified I began one by one attaching the functionality to a bootstrap template.

### Tools
- Ruby on Rails
- Postman
- Curl Commands
- Javascript
- Ajax
- Bootstrap
- HTML
- CSS
- Jquery
- Handlebars

### Struggles
- Storing hidden ID data in handlebars and accessing the hidden data.
- Using click handlers on elements that were not present during document ready. (Handlebars elements)
- Scaling back and applying what was needed for the project. I caught myself thinking ahead of myself often.

### Future additions
I would like to be able to add in the question and answer creation. Then taking the stored data and setting up a randomized quiz based on guide questions. Creating a small game out of the quiz to help show where a user may be struggling and to make it fun to study.


   [Study Buddy]: <http://gotwilk890.github.io/Trivia-Front-End/>
   [Git Hub Front-End]: <https://github.com/gotwilk890/Trivia-Front-End>
   [Git Hub Back-End]: <https://github.com/gotwilk890/Trivia-Back-End>

