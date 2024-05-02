import React, { useState, useEffect } from 'react';
import axiosInstance from '../../services/AxiosConfig';
import { Heart } from 'lucide-react';

const UserFavourites = () => {
  const [favouriteCourses, setFavouriteCourses] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const favouriteCoursesResponse = await axiosInstance.get('http://localhost:8080/api/favourites/getAll');
        const fetchedFavouriteCourses = favouriteCoursesResponse.data;

        const localUserId = localStorage.getItem('userId');

        const userFavouriteCourses = fetchedFavouriteCourses.filter(course => course.userId == localUserId);

        const courseIds = userFavouriteCourses.map(course => course.courseId);

        const coursesData = await Promise.all(courseIds.map(async courseId => {
          const courseResponse = await axiosInstance.get(`http://localhost:8080/api/courses/${courseId}`);
          return courseResponse.data;
        }));

        // Filter out duplicate courses based on IDs
        const uniqueCoursesData = [];
        const courseIdSet = new Set();
        coursesData.forEach(course => {
          if (!courseIdSet.has(course.courseId)) {
            uniqueCoursesData.push(course);
            courseIdSet.add(course.courseId);
          }
        });

        // Filter out courses with missing or undefined values for any required field
        const filteredCoursesData = uniqueCoursesData.filter(course => 
          course.courseName && 
          course.courseInstructor && 
          course.courseDuration &&
          course.courseImgUrl &&
          course.courseId
        );

        setFavouriteCourses(filteredCoursesData);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFavourites();
  }, []);


  return (
    <div className='flex flex-col pt-10 pl-72 h-full font-Montserrat ml-2 overflow-y-auto'>
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 mt-24  pb-2">My Favourite Courses</h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {favouriteCourses.map(course => (
          <div key={course.id} className="border-2 text-center bg-opacity-55 bg-white border-gray-300 rounded-md p-4 h-96 w-[400px]"> {/* Adjust width here */}
            <img src={course.courseImgUrl} alt={course.courseName} className=" border border-white w-full mb-2 h-[180px]" />
            <h3 className="text-lg font-semibold mb-1">
              {course.courseName.includes("FREE") ? (
                <span style={{ color: 'green' }}>{course.courseName}</span>
              ) : (
                course.courseName
              )}
            </h3>
            <p className="text-base mb-1">Instructor: {course.courseInstructor}</p>
            <p className="text-base mb-1"> {course.courseDuration}</p>
            <div className="flex items-center justify-center h-[60px] space-x-4 mt-2">
              <button className='text-2xl mb-1 border px-4  text-white bg-green-700 flex items-center'>
                <span>Continue</span>
              </button>
              <button className={`text-2xl mb-1  px-4 py-1 text-red-500 flex items-center`}>
                <Heart size={24} fill='red' /> {/* Heart icon */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserFavourites;
