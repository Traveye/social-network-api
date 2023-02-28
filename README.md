# Backend - Social Network API

### Table of Contents
* [Goals](#goals)
* [Implementation](#implementation)
* [Credits](#credits)
* [Usage](#usage)
* [License](#licene)

## Goals
Given the below user story: 
- AS A social media startup I WANT an API for my social network that uses a NoSQL database SO THAT my website can handle large amounts of unstructured data

The following are the goals of the social network API:
- Start the server and sync Mongoose models with MongoDB database.
- Test the API GET routes for users and thoughts in Insomnia and verify that the data for each route is displayed in a formatted JSON.
- Test the API POST, PUT, and DELETE routes in Insomnia and verify that users and thoughts can be successfully created, updated, and deleted in the database.
- Test the API POST and DELETE routes in Insomnia and verify that reactions can be successfully created and deleted for thoughts, and friends can be added and removed from a user's friend list.


## Implementation

To build this site, I used the following technologies:
- Express
- NodeJS
- MongoDB
- Mongoose

I first created a connection form the server to the MongoDB. Then using Mongoose and Expreess I built models for the Users, their Thoughts which also included a subdocument for Reactions. These models were then assigned to CRUD routes in the route folders. 

You can view a demo of the routes in Insomnia [here](https://drive.google.com/file/d/1-pTntrQQXInt0S7y0AdlE3RtTMVZco94/view) and check out the repository [here](https://github.com/Traveye/social-network-api)


## Credits
N/A

## Usage
N/A

## License
MIT