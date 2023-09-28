#### 2. Create and seed the database
Run the following command to create your SQLite database file.
 This also creates the User and Post tables that are defined in prisma/schema.prisma:

`npx prisma migrate dev --name init`