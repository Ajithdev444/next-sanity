import React from 'react'
import { getGallerys } from '@/sanity/sanity-utils'
import Image from 'next/image'


export default async function page() {
    const gallerys = await getGallerys()
  return (
    <div>
        {gallerys.map((gallery) => (
            <div key={gallery._id} className="flex">
               
                <div>
                    {gallery.image && (
                        <Image src={gallery.image} alt={gallery.name} width={200} height={200}
                        className="object-cover rounded-lg border border-gray-500"/>
                    )}
                </div>
                <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500
           to-purple-600 bg-clip-text text-transparent bg-black">{gallery.name}</div>
            </div>
            
        ))}
    </div>
  )
}

