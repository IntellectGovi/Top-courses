import React, { useEffect } from 'react'
import Filter from './Components/Filter';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import { filterData , apiUrl } from './data';
import { useState } from 'react';
import { toast } from 'react-toastify';


const App = () => {

  const[courses , setCourses] = useState(null);
  const[loading , setLoading] = useState(true);
  const[category , setCategory] = useState("All");

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      // console.log(output.data);
      setCourses(output.data);
    }
    catch (err) {
      // console.log(err);
      toast.error("Something Went Wrong");
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className="flex flex-col ">
      <Navbar />
      <div
        className="bg-bgDark2 min-h-screen">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />

        <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap items-center justify-center">
          {
            loading ? <Spinner /> : <Cards courses={courses} category={category} />
          }
        </div>
      </div>
    </div>
  )
};

export default App