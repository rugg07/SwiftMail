import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: "test@gmail.com",
        firstName: "Test",
        lastName: "User",
    }
})
console.log("User created successfully");