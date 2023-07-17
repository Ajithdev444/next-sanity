import React from 'react'
import { getTeams } from '@/sanity/sanity-utils'
import Link from 'next/link'



export default async function Team() {
    const teams = await getTeams()

  return (
    <div>
        {teams.map((team) => ( 
            <div key={team._id} className="flex gap-2">
                <div>{team.number}.</div>
                <div>
                <Link href={`/teams/${team.slug}`}><h1>{team.name}</h1></Link>
                <h3>Location:{team.location}</h3>
                <h3>Department:{team.department}</h3>
                </div>
            </div>

        ))}

    </div>
  )
}

