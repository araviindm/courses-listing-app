## Courses Listing App

It's a minimal front end consisting of a course listing, course details, and a student dashboard.

## To run the app locally

npm i  
npm run dev

## For the env variable

contact - araviindm@gmail.com

## Note

- I fetched the courses from Mongodb. (I have five entries in my DB)
- For the student I have the API to fetch using id, since setting up auth is out of the scope of this project, I hardcoded a studentId to local storage and fetch the student for that studentId (For example if you set studentId(key) equal to 2 (value) you'll get that student info). The default value will be 1.
