/*
FEATURES OF OUR APP
* Create an account(Signup)
* Login
* Create profile/Update profile
* Feed page => explore other users 
* send connection request
* see our matches
* see request we have sent/received
* update your profile
*/

/*
TECH PLANNING
* 2 Microservices - frontend and backend
*/

/*
LLD
#) DB Design
#) API Design

DB DESIGN
* User:- firstname, lastname, email, password, age, gender
* connection request:- from userID, to userID, status = pending/rejected/approved/ignored

API DESIGN
* Signup - POST
* Login - POST
* Profile - GET
* create profile - POST
* update profile - PATCH
* send connection request - POST
* review request - POST
* to see requests - GET
* to see all connections - GET
*/