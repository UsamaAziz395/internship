import React, { useState } from 'react'
import Singapore from '../../assets/Singapore.png'

const Blogs = [
  {
    id: 1,
    image: Singapore,
    name: 'Willim Seklo',
    residence: 'Apartment',
    title: 'New Apartment Nice in the Best Canadian Cities',
    date: 'July 10, 2022',
    more: 'Read More',
  },
  {
    id: 2,
    image: Singapore,
    name: 'Willim Seklo',
    residence: 'Apartment',
    title: 'New Apartment Nice in the Best Canadian Cities',
    date: 'July 10, 2022',
    more: 'Read More',
  },
  {
    id: 3,
    image: Singapore,
    name: 'Willim Seklo',
    residence: 'Apartment',
    title: 'New Apartment Nice in the Best Canadian Cities',
    date: 'July 10, 2022',
    more: 'Read More',
  },
  {
    id: 4,
    image: Singapore,
    name: 'Willim Seklo',
    residence: 'Apartment',
    title: 'New Apartment Nice in the Best Canadian Cities',
    date: 'July 10, 2022',
    more: 'Read More',
  },
  {
    id: 5,
    image: Singapore,
    name: 'Willim Seklo',
    residence: 'Apartment',
    title: 'New Apartment Nice in the Best Canadian Cities',
    date: 'July 10, 2022',
    more: 'Read More',
  },
  {
    id: 6,
    image: Singapore,
    name: 'Willim Seklo',
    residence: 'Apartment',
    title: 'New Apartment Nice in the Best Canadian Cities',
    date: 'July 10, 2022',
    more: 'Read More',
  },
    {
    id: 7,
    image: Singapore,
    name: 'Willim Seklo',
    residence: 'Apartment',
    title: 'New Apartment Nice in the Best Canadian Cities',
    date: 'July 10, 2022',
    more: 'Read More',
  },
  {
    id: 8,
    image: Singapore,
    name: 'Willim Seklo',
    residence: 'Apartment',
    title: 'New Apartment Nice in the Best Canadian Cities',
    date: 'July 10, 2022',
    more: 'Read More',
  },
  {
    id: 9,
    image: Singapore,
    name: 'Willim Seklo',
    residence: 'Apartment',
    title: 'New Apartment Nice in the Best Canadian Cities',
    date: 'July 10, 2022',
    more: 'Read More',
  },
]

function Blog() {

  const [viewall,setViewall] =useState(false);


  return (
    <section className="w-full px-5 sm:px-8 md:px-12 lg:px-20 py-12">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[#0061E0] text-sm font-semibold">
          NEWS AND BLOGS
        </h2>

        <h1 className="font-bold text-2xl sm:text-3xl pt-4">
          Latest News Feeds
        </h1>
      </div>

      {/* Blog Cards */}

    
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 pt-10">
  {Blogs .slice(0, viewall ? Blogs.length : 6)
        .map((blog) => (
          <div
            key={blog.id}
            className="w-full max-w-[320px] sm:w-[300px] shadow-md overflow-hidden"
          >

            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover"
            />

            {/* Author / Residence */}
            <div className="flex justify-between text-sm text-gray-500 px-4 pt-3">
              <p>{blog.name}</p>
              <h3>{blog.residence}</h3>
            </div>

            {/* Title */}
            <div className="font-semibold px-4 pt-3">
              <h2 className="leading-6">
                {blog.title}
              </h2>
            </div>

            {/* Date / Read More */}
            <div className="text-gray-500 pt-4 px-4 pb-4 text-sm flex justify-between gap-3">

              <h3>
                {blog.date}
              </h3>

              <h3 className="text-[#0061E0] cursor-pointer whitespace-nowrap">
                {blog.more}
              </h3>

            </div>

          </div>

        ))};
      
      
      </div>


      
      

      {/* View All Button */}

      
      <div className="flex justify-center mt-10">
        <button className="h-10 w-28 border border-[#0061E0] rounded-full text-[#0061E0] hover:bg-[#0061E0] hover:text-white transition"
    onClick={() => setViewall(!viewall)}
      

        >
        

          {viewall ? 'View less' : 'View all'}
        </button>
      </div>

    </section>
  )
}

export default Blog


