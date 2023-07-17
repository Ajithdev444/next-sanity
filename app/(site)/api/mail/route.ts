import { NextResponse } from "next/server";
import mail from "@sendgrid/mail";
mail.setApiKey(process.env.SENDGRID_API_KEY || "");

type ResponseData = {
    status?: string;
    message?: string;
}

export async function POST(request: Request) {
   let response: ResponseData = {}
   const body = await request.json()
   console.log(body)
    const msg = `Name: ${body.name}\r\n Email: ${body.email}\r\n Message: ${body.message}`
    console.log(msg)

    const data = {
      to: "ajithdevwaywedesign@gmail.com",
      from: "batmantimes1998@gmail.com",
      subject: `${body.name.toUpperCase()} sent you a message from Contact Form`,
      text: `Email => ${body.email}`,
      html: msg.replace(/\r\n/g, "<br>"),
    };
    console.log(data)
      await mail
      .send(data)
      .then(() => {
        response = {
            status: "success",
            message: "message sent successfully, we will contact shortly",
        }
      })
     .catch ((error) => {
      response = {      
        status: "error",
         message: `There was an error sending your message. ${error}`,
      }
    })
  return NextResponse.json(response);
}