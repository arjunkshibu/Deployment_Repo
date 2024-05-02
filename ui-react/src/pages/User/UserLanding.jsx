import React, { useEffect, useState } from 'react';
import axiosInstance from '../../services/AxiosConfig';
import UserTopBar from '../../components/User/UserTopBar';
import UserSidebar from '../../components/User/UserSideBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { razorpayconfig, testuserconfig } from '../../services';
import { BadgeCheck } from 'lucide-react';

const UserLanding = () => {
  const [courses, setCourses] = useState([]);
  const [usdToInrRate, setUsdToInrRate] = useState(null);
  const navigate = useNavigate();
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      navigate('/login');
    }

    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:8080/api/courses/getAll');
        setCourses(response.data); 
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();

    // Fetch USD to INR exchange rate
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://open.er-api.com/v6/latest/USD');
        const rates = response.data.rates;
        const inrRate = rates.INR;
        setUsdToInrRate(inrRate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };
    fetchExchangeRate();

    const fetchPurchasedCourses = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await axiosInstance.get(`http://localhost:8080/api/purchased-courses/${userId}`);
          setPurchasedCourses(response.data);
        } catch (error) {
          console.error('Error fetching purchased courses:', error);
        }
      }
    };

    fetchPurchasedCourses();
  }, []);

  const handlePaymentSuccess = async (courseId, userId) => {
    try {
      // Send a request to the backend to add the purchased course
      await axiosInstance.post('http://localhost:8080/api/purchased-courses/add', { courseId, userId });
      const response = await axiosInstance.get('http://localhost:8080/api/courses/getAll');
      setCourses(response.data);
      const filteredCourses = courses.filter(course => !purchasedCourses.find(pCourse => pCourse.courseId === course.courseId));
      setCourses(filteredCourses);
    } catch (error) {
      console.error('Error adding purchased course:', error);
    }
  };

  const handlePayment = async (coursePrice, courseId) => {
    // Check if the course is free
    if (coursePrice === 0) {
      // Get userId from localStorage
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('User ID not found in localStorage');
        return;
      }
      try {
        // Call function to add purchased course to the backend directly
        await handlePaymentSuccess(courseId, userId);
      } catch (error) {
        console.error('Error adding purchased course:', error);
      }
      return; // Exit the function since the course is free
    }
    
    // If the course is not free, proceed with Razorpay payment
    // Otherwise, the function will exit early and not reach this point
    const amountInPaise = Math.round(coursePrice * usdToInrRate * 100);
    const options = {
      key: razorpayconfig.key,
      key_secret: razorpayconfig.key_secret,
      amount: amountInPaise,
      currency: razorpayconfig.currency,
      name: razorpayconfig.name,
      handler: (res) => {
        alert(res.razorpay_payment_id);
        // Get userId from localStorage
        const userId = localStorage.getItem('userId');
        if (!userId) {
          console.error('User ID not found in localStorage');
          return;
        }
        // Call function to add purchased course to the backend
        handlePaymentSuccess(courseId, userId);
      },
      prefill: {
        name: testuserconfig.name,
        email: testuserconfig.email,
        contact: testuserconfig.contact
      },
      notes: {
        address: " office",
      },
      theme: {
        color: '#f5f5f7'
      }
    };
    
    if (window.Razorpay) {
      const pay = new window.Razorpay(options);
      pay.open();
    } else {
      console.error('Razorpay script not loaded or initialized');
    }
  };

  return (
    <div className="flex flex-col bg-gray-200 font-Montserrat h-full overflow-y-auto">
      <UserTopBar />
      <div className="flex flex-1">
        <div className="flex-shrink-0">
          <UserSidebar />
        </div>
        <div className="flex flex-col flex-1 mt-8 mx-auto overflow-y-auto"> 
          <h2 className="text-3xl mt-20 font-semibold mb-4 text-center">Explore our courses</h2>
          <div className="grid grid-cols-4 font-sans gap-4 p-4">
            {courses.map(course => (
              <div key={course.id} className="border-2 text-center bg-white border-gray-300 rounded-md p-4 h-96">
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
                <div className="flex justify-center font-semibold text-green-700 items-center">
                  <BadgeCheck />
                  <p className="ml-1">Professional Certification</p>
                </div>
                <div className="flex items-center justify-center">
                  {purchasedCourses.some(pCourse => pCourse.courseId === course.courseId) ? (
                    <span className="text-2xl mb-1 mt-3 bg-green-200 w-full text-green-600">Purchased</span>
                  ) : (
                    <button
                      className={`text-2xl mb-1 mt-3 border rounded-md px-4 ${course.coursePrice === 0 ? 'bg-green-500' : 'bg-blue-600'} text-white flex items-center`}
                      onClick={() => handlePayment(course.coursePrice, course.courseId)} // Pass course.coursePrice and courseId as arguments
                    >
                      <span className="mr-1">$</span>{course.coursePrice}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLanding;
