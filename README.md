# alx-files_manager
***Files manager: This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination and background processing.
The objective is to build a simple platform to upload and view files:
* User authentication via a token
* List all files
* Upload a new file
* Change permission of a file
* View a file
* Generate thumbnails for images

## General :house:
* how to create an API with Express
* how to authenticate a user
* how to store data in MongoDB
* how to store temporary data in Redis
* how to setup and use a background worker

## Requirements :page_with_curl:
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the js extension
* Your code will be verified against lint using ESLint

## Tasks and Files :heavy_check_mark:
| Files            | Description                     |
| ---------------- | ------------------------------- |
| **0. Redis utils** | Inside the folder utils, create a file redis.js that contains the class RedisClient.  |
| **1. MongoDB utils**  | Inside the folder utils, create a file db.js that contains the class DBClient.  |
| **2. First API**     | Inside server.js, create the Express server:  |
| **3. Create a new user**  | Now that we have a simple API, it’s time to add users to our database.  |
| **4. Authenticate a user**     | In the file routes/index.js, add 3 new endpoints:  |
| **5. First file**     | In the file routes/index.js, add a new endpoint:  |
| **6. Get and list file**   | In the file routes/index.js, add 2 new endpoints:   |
| **7. File publish/unpublish**   | In the file routes/index.js, add 2 new endpoints:  |
| **8. File data**     | In the file routes/index.js, add one new endpoint:   |
| **9. Image Thumbnails**  | Update the endpoint POST /files endpoint to start a background processing for generating thumbnails for a file of type image:  |
| **10. Tests!** | Create tests for redisClient and dbClient.   |
| **11. New user - welcome email** | Update the endpoint POST /users endpoint to start a background processing for sending a “Welcome email” to the user:  |

## Author :black_nib:
* Dibor Solomon

