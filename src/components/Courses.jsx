import CoursesPage from '../pages/CoursesPage'
import React, { useEffect, useState } from 'react'

function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('https://lms-backend-xpwc.onrender.com/api/courses')
    .then((response) => response.json())
    .then((data) => {
      setCourses(data.results);
    })
    .catch((error) => console.error('Error fatching data: ', error))
    }, [])
 
  return <CoursesPage courses={courses}/>
}

export default Courses
