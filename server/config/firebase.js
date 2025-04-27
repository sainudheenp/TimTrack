const admin = require('firebase-admin')
const ServiceAccount = require('./timtrack-6db41-firebase-adminsdk-fbsvc-7ebdbeed16.json')


const firebaseAdmin  =admin.initializeApp({
    credential: admin.credential.cert(ServiceAccount),
})


// const createActivity = async (req, res) => {
//     try {
//         const tokenId = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwOTg1NzhjNDg4MWRjMDVlYmYxOWExNWJhMjJkOGZkMWFiMzRjOGEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2FpbnVkaGVlbiBQIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0x3Z3d0a1FZVWFSVVNrWGc0YWt6OHRrX3MySXNaOXBfcXFDd3pzak55Mm4xaV9wdz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90aW10cmFjay02ZGI0MSIsImF1ZCI6InRpbXRyYWNrLTZkYjQxIiwiYXV0aF90aW1lIjoxNzQ1NzQ3NTI5LCJ1c2VyX2lkIjoiTzFwU3RYclpRWmVuQlQ4TklNSzV6aGVhWUpGMiIsInN1YiI6Ik8xcFN0WHJaUVplbkJUOE5JTUs1emhlYVlKRjIiLCJpYXQiOjE3NDU3NDc1MjksImV4cCI6MTc0NTc1MTEyOSwiZW1haWwiOiIwMDAyc2FpbnVkaGVlbnZmdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMTIxMzI1NzE4MjE4MDY4MjY5NCJdLCJlbWFpbCI6WyIwMDAyc2FpbnVkaGVlbnZmdEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.OCGZAp9m2yC3BTd84VXJMeh1Skvv0aq3icwUrqEFQkGL8y1JguNzEYfEw1fR6t5AFb6nIZR1bBvz9YgkaNJqXFjSkjXHE8i3bziuyWoBx9ppR4YtQB6O4W5Gpw0RrO0qOTG-7YxrHfVn_VaSWHj_dL6ucXZRBXPtm_cbktAIkbhkXRSR3XG3u6iALTWhrwnIlHhSpQkVBqycZdAAQ6EaY7Semav58odzZFj417UKl5eBB7aQX235EVhxwTud-lDjCnrGFf1cuqsjqZU8tGDy9-Nd-HuoVmhfd6FqXH-xqPz6dOf_tLJ-aYkzWz7efdLGIdQNhqe3rcNxxJIGOGvmvw'
//         //if tokn res40
//         console.log("HEI")
//         const decodedToken = await admin.auth().verifyIdToken(tokenId);
//         console.log("DEVO ", decodedToken)
//         const firebaseUserId = decodedToken.uid;

//         const newDoc = new Activity({

//             activityName: "test",
//             activityDuration: 2323,
//             projectName: "dsfdsf",
//             userId: firebaseUserId
//         })

//         await newDoc.save()


//     } catch (error) {
//         console.log(error)
//     }
// }

// createActivity()
