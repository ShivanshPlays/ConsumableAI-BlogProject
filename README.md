Instructions for setting up this project locally:

1. clone the repo from github

2. start a local postgres instance using docker or pgadmin

3. create a top level .env file in the backend folder and paste your postgres url
    syntax: DATABASE_URL="your db url"

4. run the following commands after that:
    cd backend    
    npx prisma migrate dev (this will migrate your db and generate the prisma client)
    npx prisma generate (this will generate your prisma client if it was skipped in the last command)
    npx prisma db seed (this will seed the database to put dummy blogs in the database)
    node index.js (this will start the backend service at localhost:3000)
    cd ..

5. cd Next_Frontend 
   touch .env      (goto frontend folder and create a .env file there)
   now set the backend url as the localhost url 
   NEXT_PUBLIC_backend_url="http://localhost:3000"

   npm run dev  (this will start your frontend)

If you followed all the steps correctly, the application will start running with dummy data.
