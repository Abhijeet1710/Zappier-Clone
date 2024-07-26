## TODOS
1. Send the user a verification email, make them verify email before signing them up
 - Add a new field in the DB called verify, and only if user is verified should they be ablt to login
2. Let user reset their password through email
3. Solana reconcilliation side quest - If the users solana txn fails/takes a long time/is submitted to the blockchain, but your node goes down. What happens then? how can u prevent sending them money twice when the worker comes back up
4. Use react-flow for the UI, make it prettier
 - If you are using react-flow, can you create parallel actions.

# Migrate DB schema
- npx prisma migrate dev --name init (Only once in any module)
- npx prisma generate (Run in all modules)
- npx prisma studio (Postgres DB UI)
- npm run seed (Only once)

    ref: https://github.com/Abhijeet1710/PaytmClone

# Docker / Platform
    docker-compose up -d

# .env for all
    DATABASE_URL="postgres://postgres:mysecretpassword@localhost/postgres"


# Kafka
Ref: https://medium.com/@amberkakkar01/getting-started-with-apache-kafka-on-docker-a-step-by-step-guide-48e71e241cf2

/opt/kafka/bin/kafka-console-producer.sh --broker-list localhost:9092 --topic zap-events
