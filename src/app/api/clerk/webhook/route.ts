// api/clerk/webhook - each folder represents a segment in the link

import { db } from "@/server/db"

//clerk will send a POST request to this proxy 
export const POST = async (req: Request) => {
  const { data } = await req.json()
  console.log("webhook received", data)
  const emailAddress = data.email_addresses[0].email_address
  const firstName = data.first_name
  const lastName = data.last_name
  const imageURL = data.image_url
  const id = data.id

  //send information recieved from Clerk DB to our DB
  await db.user.create({
    data: {
        id: id,
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName,
        imageURL: imageURL
    }
  })
  
    return new Response('Webhook recieved', { status: 200 })
}