import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/AxiosConfig";
import { Heart } from "lucide-react";

function UserDashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch purchased courses for the current user
        const purchasedCoursesResponse = await axiosInstance.get(
          "http://localhost:8080/api/purchased-courses/getAll"
        );
        const purchasedCourses = purchasedCoursesResponse.data;

        // Get the user ID from localStorage
        const localUserId = localStorage.getItem("userId");

        // Filter purchased courses for the current user
        const userCourses = purchasedCourses.filter(
          (course) => course.userId == localUserId
        );

        // Extract course IDs
        const courseIds = userCourses.map((course) => course.courseId);

        // Fetch course details for each course ID
        const coursesData = await Promise.all(
          courseIds.map(async (courseId) => {
            const courseResponse = await axiosInstance.get(
              `http://localhost:8080/api/courses/${courseId}`
            );
            return courseResponse.data;
          })
        );

        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToFavorites = async (courseId) => {
    try {
      const localUserId = localStorage.getItem("userId");
      await axiosInstance.post("http://localhost:8080/api/favourites/add", {
        userId: localUserId,
        courseId,
      });
      // Optionally, you can update state or show a message after successfully adding to favorites
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  return (
    <div className="flex flex-col pt-10 pl-72 h-full font-Montserrat ml-2 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 mt-24  pb-2">
        My Courses
      </h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {courses
          // Filter out courses with missing or undefined values for any required field
          .filter(course => 
            course.courseName && 
            course.courseInstructor && 
            course.courseDuration &&
            course.courseImgUrl &&
            course.courseId
          )
          // Map over filtered courses to create JSX elements
          .map((course) => (
            <div
              key={course.id}
              className="border-2 text-center bg-opacity-55 bg-white border-gray-300 rounded-md p-4 h-96 w-[400px]"
            >
              <img
                src={course.courseImgUrl}
                alt={course.courseName}
                className=" border border-white w-full mb-2 h-[180px]"
              />
              <h3 className="text-lg font-semibold mb-1">
                {course.courseName?.includes("FREE") ? (
                  <span style={{ color: "green" }}>{course.courseName}</span>
                ) : (
                  course.courseName
                )}
              </h3>
              <p className="text-base mb-1">
                Instructor: {course.courseInstructor}
              </p>
              <p className="text-base mb-1"> {course.courseDuration}</p>
              <div className="flex items-center justify-center h-[60px] space-x-4 mt-2">
                <button className="text-2xl mb-1 border px-4  text-white bg-green-700 flex items-center">
                  <span>Continue</span>
                </button>
                <button
                  className={`text-2xl mb-1  px-4 py-1 text-red-500 flex items-center`}
                  onClick={() => handleAddToFavorites(course.courseId)}
                >
                  <Heart size={24} color="red" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserDashboard;
