import React from "react";
import { RiArrowUpLine,RiBarChartGroupedFill } from "react-icons/ri";
import Head from "next/head";
import HeaderComponent from "@/components/HeaderComponent";
import { getTeams } from '@/sanity/sanity-utils'
import Link from 'next/link'

export default async function Team() {
    const teams = await getTeams()
  return (
    <>
      <Head>
        <title>Join Our Team</title>
        <meta name="description" content="Join Our Team - Rodney Hunt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/Rodney-Hunt-Company-logo.jpg"
          className="object-cover"
        />
      </Head>
      <div>
        <HeaderComponent heading="JOIN OUR TEAM" />
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row p-4 lg:p-20 gap-10">
            <div className="w-full lg:w-2/3">
              <p className="pb-5 text-[#4B5573] leading-6 tracking-wider">
                We are so proud of the work we do with the world’s most precious
                resource – WATER! None of this would be possible without our
                amazing team and our unique culture.Working at Rodney Hunt is
                about being a part of something bigger than yourself. A
                cornerstone of our enterprise is to create an exciting and
                engaging customer experience, while making an honest and
                quantifiable positive impact on the water and wastewater
                landscape. We act as one team, believing in each other and what
                we can achieve together.
              </p>

              <p className="pb-5 text-[#4B5573] leading-6 tracking-wider">
                We are passionate about our work and expect everyone to have the
                energy of an army and are looking for highly motivated
                individuals with an innate intellectual fire to delve outside
                the box, roll up their sleeves and get the job done. Rodney Hunt
                offers flexible work hours, paid time off, company matching 401K
                (100% up to 6%), health/dental/vision insurance, life insurance
                (premium paid by the company), short term disability, employee
                cash awards, maternity leave and other benefits. For recent
                college grads, Rodney Hunt offers a tuition reimbursement
                program of $ 3,000.00 upon completion of 3 years of employment.
                Other career development opportunities and platforms are also
                available.
              </p>
              <p className="pb-5 text-[#4B5573] tracking-widest">
                Please see below for a list of current openings. Email your
                resume to
                <span className="text-[#EF4444]"> hr@rodneyhunt.com .</span>
              </p>
              <p className="pb-5 text-[#4B5573] tracking-widest">
                Thank you for considering a career at Rodney Hunt!
              </p>
            </div>
            <div className="w-full h-96 lg:w-1/3 bg-red-400">         
            </div>
          </div>
           
          <div className="sm:px-16 flex flex-col gap-10 py-20 px-6">
          {teams.map((team) => (
            <div key={team._id} className="flex gap-5 ">
              <div className="font-medium">{team.number}</div>
              <div className="flex flex-col gap-4">
                <Link href={`/teams/${team.slug}`}><h4 className="text-2xl font-medium tracking-widest">
                  {team.name}
                </h4>
                </Link>
                <div className="flex flex-col gap-4 text-[#4B5573] tracking-wider">
                  <div className="flex items-center gap-3">
                    <RiArrowUpLine/>
                    <h5>Location: {team.location}</h5>
                  </div>
                  <div className="flex items-center gap-3">
                    <RiBarChartGroupedFill/>
                    <h5>Department: {team.department}</h5>
                  </div>
                </div>
              </div>
            </div>
             ))}
          </div>
        </div>

        <div className="bg-[#F3F4F5]">
          <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 p-4 md:p-40 xl:p-30 gap-10 2xl:gap-20 ">
              <div className="max-w-md 2xl:max-w-4xl text-center">
                <p className="text-lg text-[#4b5563] text-justify tracking-widest">
                  &quot;I&apos;ve worked for Rodney Hunt almost continuously
                  since 1977. There s a renewed enthusiasm and the Company s
                  identity is more than a ticker symbol; it s that of a gate
                  manufacturer eager to take on specialty applications.
                  Engineering, Rodney Hunt s hallmark, is center stage. That
                  attitude will serve the clients well as the industry
                  experiences increased emphasis on environmental resiliency
                  projects.&quot;
                </p>
                <div className="italic text-base text-[#868e96] pt-2">
                  - Rob Kibler, Head of Engineering
                </div>
              </div>
              <div className="max-w-md 2xl:max-w-4xl">
                <p className="text-lg text-[#4b5563] text-justify tracking-widest">
                  &quot;Since my first day at Rodney Hunt in 1969, I have had
                  the opportunity to not only make RH Gates in the foundry, but
                  get my B.S Engg degree from U Mass Amherst, manage all levels
                  of Sales and Engineering, be a voting/life member of AWWA and
                  on the Board of Directors for the Company. How many people in
                  the water industry can make that claim? I enjoy working for a
                  company that has been around since 1840. Rodney Hunt is still
                  going strong and continues to be the most complete
                  manufacturer of water control gates in the world with several
                  facilities throughout the world, including our original iconic
                  location in Orange, MA where we have been since 1840.&quot;
                </p>
                <div className="italic text-base text-[#868e96] pt-2">
                  - Paul E. Brunelle, National Sales Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



