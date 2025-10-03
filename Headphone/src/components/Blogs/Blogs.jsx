import React from 'react'
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";

const BlogData = [
    {
        id: 1,
        title: "Bose QuietComfort",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptates natus aspernatur blanditiis veniam in aliquam delectus repellat excepturi. Itaque eligendi, nostrum perferendis hic optio aut asperiores repudiandae doloremque est.",
        img: Blogs1,
    },
    {
        id: 2,
        title: "Sony WH-1000XM4",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptates natus aspernatur blanditiis veniam in aliquam delectus repellat excepturi. Itaque eligendi, nostrum perferendis hic optio aut asperiores repudiandae doloremque est.",
        img: Blogs2,
    },
    {
        id: 3,
        title: "Anker Soundcore Space Q45",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptates natus aspernatur blanditiis veniam in aliquam delectus repellat excepturi. Itaque eligendi, nostrum perferendis hic optio aut asperiores repudiandae doloremque est.",
        img: Blogs3,
    },
    {
        id: 4,
        title: "Skullcandy",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptates natus aspernatur blanditiis veniam in aliquam delectus repellat excepturi. Itaque eligendi, nostrum perferendis hic optio aut asperiores repudiandae doloremque est.",
        img: Blogs4,
    }
]

const Blogs = () => {
  return (
    <section className='bg-gray-50 flex justify-center' > 
      <div className='container py-14'>
          <h1 className='text-3xl font-bold text-center font-serif pb-8'>Blogs</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
              {BlogData.map((data) => {
                  return (
                    <div key={data.id} className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300'>
                     
                      <img src={data.img} alt={data.title} />
                      <div className='text-lg  font-sans mt-4'>
                          <h1 className='text-xl font-bold line-clamp-2'>{data.title}</h1>
                          <p className='line-clamp-2'>{data.desc}</p>
                      </div>
                    </div>
                  )
              })}
          </div>
      </div>
    </section>
  )
}

export default Blogs
