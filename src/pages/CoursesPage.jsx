import React from 'react'
import { Link } from 'react-router';

function CoursesPage({ courses }) {
  if (!Array.isArray(courses) || courses.length === 0) {
    return <p>No courses available.</p>;
  }
  return (
    <div>
        <div className='font-bold text-3xl mb-20'>
            <h3 className='mb-3'>Pick your next mission</h3>
            <hr/>
        </div>
        <div className='min-h-screen flex flex-col'>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 min-h-[300px]">
                {courses.map((course) => (
                <div key={course.id} className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={course.banner}/>
                        <div className="p-4">
                            <h2 className="text-xl  font-semibold">{course.title}</h2>
                            <p className="text-gray-600">BDT. {course.price}/month</p>
                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"><Link to={`/courses/${course.id}`}>Course Details</Link></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>  
    </div>
  )
}

export default CoursesPage
