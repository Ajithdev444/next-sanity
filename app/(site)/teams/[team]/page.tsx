"use client"
import React from 'react'
import { getTeam } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import { useState } from 'react'
type Props = {
 params :{ team : string}
}

export default async function Team({ params}: Props) {
    const [values, setValues] = useState({
        name:"",
        email:"",
        subject:"",
        phone:"",
        message:"",
    })

    const handleChange = (e:any) => setValues({...values,[e.target.name]: e.target.value})
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try {
            await fetch("http://localhost:3000/api",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            })
            
        } catch (error) {
            
        }
    }

    const { name, email, subject, phone, message } = values
    const slug = params.team
    const team = await getTeam(slug)
  return (
    <div className='p-10'>
        <h1 className='text-xl'>{team.name}</h1>
        <div className='flex flex-col gap-4 max-w-xl'>
        <div>
            <h3 className='mb-2'>QUALIFICATIONS</h3>
            <div><PortableText value={team.qualifications}/></div>
        </div>

        <div>
            <h3 className='mb-2'>ABOUT THE JOB</h3>
            <div><PortableText value={team.aboutthejob}/></div>
        </div>

        <div>
            <h3 className='mb-2'>RESPONSIBILITIES</h3>
            <div><PortableText value={team.responsibilities}/></div>
        </div>
        </div>

        <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder="Your Name"
                    className="border p-4"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    type="text"
                  />
                  <input
                    placeholder="Your E-mail"
                    className="border p-4"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    type="email"
                  />
                  <input
                    placeholder="Subject"
                    className="border p-4"
                    name='subject'
                    value={subject}
                    onChange={handleChange}
                    type="text"
                  />
                  <input
                    placeholder="Your Phone"
                    className="border p-4"
                    name='phone'
                    value={phone}
                    onChange={handleChange}
                    type="number"
                  />
                </div>
                <div className="grid grid-cols-1 mt-4 mb-4">
                  <input
                    placeholder="Message"
                    className="border p-4 pb-28"
                    name='message'
                    value={message}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#94A3B8]  hover:bg-[#EF4444] hover:text-white duration-300 px-10 py-6 md:px-20 md:py-8 font-bold text-xs tracking-widest">
                    SUBMIT APPLICATION
                  </button>
                </div>
              </form>
        
    </div>
  )
}

