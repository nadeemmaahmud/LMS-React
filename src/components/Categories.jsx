import CoursesPage from '../pages/CoursesPage'
import React, { useEffect, useState } from 'react'

function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://lms-backend-xpwc.onrender.com/api/categories')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setCategories(data);
    })
    .catch((error) => console.error('Error fatching data: ', error))
    }, [])
    console.log(categories)
 
  return <CoursesPage courses={[]} categories={categories}/>
}

export default Categories
