# Frontend Exercise

## Deployed

## About

This is a project assigned to me as part of a job interview process. I received a wireframe and instructions to create a CRUD application in React, without the delete functionality.

### Reflections

I thoroughly enjoyed this project, especially the JavaScript CRUD logic and the CSS styling. The one element I struggled with was testing. I successfully wrote unit tests for several components, but I wanted to run unit tests on some of my custom Hooks as well. I discovered the React Hooks Testing Library, which pointed me in the right direction, but I'll need some more time learning the tech before I'm able to implement it. These are the tests I had in mind.

* submitJob should create a job object from the job values passed to it. 
    * Should generate a new key and date for new jobs and use the old key and date for revised jobs.
    * Should alert if title or location fields are left blank.
* addJob should add the job object to the end of the jobs array and assign the array as the new jobs state variable
* editJob should replace the old version of the job with the new one and assign the new array to the jobs state variable

## Instructions for Use

### Adding a job

1. Click the blue Add job button to add a new job to the listings.
2. Fill in the form with information about the job's title, location, sponsorship, and status. All fields are required.
3. Click the blue Add job button in the bottom right corner. You will see your new job displayed on the listings page.

### Editing an existing job

1. Click the white Edit button next to the job you'd like to edit.
2. Edit any or all of the form fields with the changes you'd like to make.
3. Click the blue Save button in the bottom right corner. You will see the job updated on the listings page.

## Technologies

* HTML
* CSS
* JavaScript
* React.js
* React Router
* Jest
* React Testing Library