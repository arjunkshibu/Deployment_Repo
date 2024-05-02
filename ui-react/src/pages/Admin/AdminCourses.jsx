import React, { useState, useEffect } from 'react';
import axiosInstance from '../../services/AxiosConfig';
import { useNavigate } from 'react-router-dom';

function AdminCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState({});
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    courseInstructor: '',
    courseDuration: '',
    coursePrice: '',
    courseImgUrl: '',
  });

  useEffect(() => {
    const isAdmin = localStorage.getItem('role');
    if (isAdmin !== "Admin") {
      navigate('/*');
    } else {
      fetchCourses();
    }
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:8080/api/courses/getAll');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axiosInstance.delete(`http://localhost:8080/api/courses/deletecourses/${id}`);
      await fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleUpdateClick = (course) => {
    setUpdatedCourse(course); // Set the selected course to updatedCourse state
    setShowUpdateModal(true);
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowUpdateModal(false);
    setShowAddModal(false);
    setUpdatedCourse({}); // Reset updatedCourse state
    setNewCourse({
      courseName: '',
      courseInstructor: '',
      courseDuration: '',
      coursePrice: '',
      courseImgUrl: '',
    });
  };

  const handleInputChange = (e, actionType) => {
    const { name, value } = e.target;
    
    if (actionType === 'update') {
      setUpdatedCourse((prevCourse) => ({
        ...prevCourse,
        [name]: value,
      }));
    } else if (actionType === 'add') {
      setNewCourse((prevCourse) => ({
        ...prevCourse,
        [name]: value,
      }));
    }
  };
  
  const handleUpdate = async () => {
    try {
      const response = await axiosInstance.put(`http://localhost:8080/api/courses/putcourses/${updatedCourse.courseId}`, updatedCourse);
      console.log('Course updated:', response.data);
      handleCloseModal(); // Close the modal after successful update
      fetchCourses(); // Fetch courses again after update
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleAddCourse = async () => {
    try {
      const response = await axiosInstance.post('http://localhost:8080/api/courses/post', newCourse);
      console.log('Course added:', response.data);
      handleCloseModal(); // Close the modal after successful addition
      fetchCourses(); // Fetch courses again after addition
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col  h-screen w-full ">
        <h2 className="font-sans text-2xl font-bold p-8">Course List:</h2>
        <div className="flex justify-end mr-8 mb-4">
          <button onClick={handleAddClick} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Add Course</button>
        </div>
        <table className="border-collapse ml-[22%] mr-auto text-center bg-white  justify-center items-center  border-2 border-syn-darl  w-[70%]">
          <thead>
            <tr className='bg-blue-400'>
              <th className="border-2 p-1 border-syn-darl w-16">Course ID</th>
              <th className="border-2 p-1 border-syn-darl">Name</th>
              <th className="border-2 p-1 border-syn-darl">Instructor</th>
              <th className="border-2 p-1 border-syn-darl">Duration</th>
              <th className="border-2 p-1 border-syn-darl">Price</th>
              <th className="border-2 p-1 border-syn-darl w-52">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.courseId}>
                <td className="border-2 border-syn-darl p-1">{course.courseId}</td>
                <td className="border-2 p-1 border-syn-darl">{course.courseName}</td>
                <td className="border-2 p-1 border-syn-darl">{course.courseInstructor}</td>
                <td className="border-2 p-1 border-syn-darl">{course.courseDuration}</td>
                <td className="border-2 p-1 border-syn-darl">{course.coursePrice}</td>
                <td className="border-2 p-1 border-syn-darl">
                  <button
                    className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleUpdateClick(course)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={() => deleteCourse(course.courseId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showUpdateModal && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="relative bg-white rounded-lg p-8 w-1/3">
              <h2 className="text-2xl font-bold mb-4">Update Course</h2>
              <label className="block mb-2">Name:</label>
              <input type="text" name="courseName" value={updatedCourse.courseName} onChange={(e) => handleInputChange(e, 'update')} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <label className="block mb-2">Instructor:</label>
              <input type="text" name="courseInstructor" value={updatedCourse.courseInstructor} onChange={(e) => handleInputChange(e, 'update')} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <label className="block mb-2">Duration:</label>
              <input type="text" name="courseDuration" value={updatedCourse.courseDuration} onChange={(e) => handleInputChange(e, 'update')} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <label className="block mb-2">Price:</label>
              <input type="text" name="coursePrice" value={updatedCourse.coursePrice} onChange={(e) => handleInputChange(e, 'update')} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <label className="block mb-2">Image URL:</label>
              <input type="text" name="courseImgUrl" value={updatedCourse.courseImgUrl} onChange={(e) => handleInputChange(e, 'update')} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <div className="flex justify-end">
                <button onClick={handleUpdate} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
                <button onClick={handleCloseModal} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {showAddModal && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="relative bg-white rounded-lg p-8 w-1/3">
              <h2 className="text-2xl font-bold mb-4">Add Course</h2>
              <label className="block mb-2">Name:</label>
              <input type="text" name="courseName" value={newCourse.courseName} onChange={(e) => handleInputChange(e, 'add')} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <label className="block mb-2">Instructor:</label>
              <input type="text" name="courseInstructor" value={newCourse.courseInstructor} onChange={(e) => handleInputChange(e, 'add')} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <label className="block mb-2">Duration:</label>
              <input type="text" name="courseDuration" value={newCourse.courseDuration} onChange={(e) => handleInputChange(e, 'add')} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <label className="block mb-2">Price:</label>
              <input type="text" name="coursePrice" value={newCourse.coursePrice} onChange={(e) => handleInputChange(e, 'add')} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <label className="block mb-2">Image URL:</label>
              <input type="text" name="courseImgUrl" value={newCourse.courseImgUrl} onChange={(e) => handleInputChange(e, 'add')} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <div className="flex justify-end">
                <button onClick={handleAddCourse} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
                <button onClick={handleCloseModal} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminCourses;
