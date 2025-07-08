/*
Before building a project, the requirements that we need are:-
* Design:- design document that includes architecture, techstack etc. (Senior Engineer/Engineering Manager job)
* Development (SDE-1, SDE-2)
* Testing (SDET)
* Deployment (Devops Engineer)
* Maintanence
*/

// Water cycle model (SDLC)

/*
Monolith
* One big repository and all developers works in that repository.(frontend, backend, database, authentication, emails etc)
* Since we have to write a lot of code, developer speed is slow.
* Scalability is bad.
* Single deployment(If there is a small change in frontend, the whole project needs to be deployed. It takes a lot of time)
* One tech stack (Suppose we use react for frontend, we have to stick on that....we can't use NextJS in between)
* Complexity is tough for large projects.
* Testing easier.
* Maintanance is tough
*/

/*
MicroServices
* multiple repositories(splits into services like one microservice for frontend, one microservice for backend, one microservice for database, one microservice for authentication etc)
* developer speed is fast(seperate team for each service)
* scalability is good.
* Suppose there is a small change in frontend code, needs deployment for that service only.
* different tech stacks can be used.
* complexity is tough for small projects....for large projects complexity is easy.
* Can be tested independently.
* maintanance is easy.
*/ 