
# Zappier-X -Workflow automation tool for everyone :

## About Zappier-X :

- Zappier-X is a tool where you can create workflows and configure triggers for those workflows.
- We will run those workflows whenever trigger gets hit.


## Use case :

- Trigger : Webhook (Github Comment)
- Lets say you want to send an email to someone as soon as you add any comment to a PR.
- You can create a workflow where trigger would be an webhook And action would be email.
- In addition to this you can configure reciever email dynamically by setting metadata while creating an email action.
- We'll send email to receiver added in comment of a PR as soon as you add an comment to a PR.

## Tech Stack used to build this project :

- FrontEnd : ReactJs, TailwindCSS
- BackEnd : NodeJs, Express server
- Database : Postgres
- Queue : Kafka Pub/Sub

## Modules :

- FrontEnd - reacjs code of zappier-x
- Primary Backend - express server for user actions.
- Hooks - express server which will run on webhook/trigger hit.
- Processor - Long Poll the database and push actions in kafka to run the action in workflow in order.
- Worker - Listens to kafka topic and processes the action, This is the actual code which processes the action. Ex. sending an email.

## Design Diagrams :
![zappier_design drawio (2)](https://github.com/user-attachments/assets/0c0ca2ae-13e8-489b-8473-928dcb0d5bd4)

## Local Setup :

Prerequisites : Docker

- Clone the repo.
- Install dependencies in all modules. ``` npm install ```
- Add in .env in all modules : ```DATABASE_URL="postgres://postgres:mysecretpassword@localhost/postgres"```
- Resources setup (Postgres, Kafka) : 
    Run docker-compose.yaml using command : ```docker-compose up -d```
- Migrate DB :
  
    ```
    npx prisma migrate dev --name init (Only once in any module)

    npx prisma generate (Run in all modules)
    
    npm run seed (Only once) 
    
    npx prisma studio (Optional, for viewing DB tables and data)
    ```
    
