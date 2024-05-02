import React from 'react';

const UserPayments = () => {
    document.body.style.overflow = "hidden";

  const courses = [
    { slNo: 1, name: 'React Basics', duration: '4 weeks', fee: '$100', paymentStatus: 'Paid' },
    { slNo: 2, name: 'JavaScript Fundamentals', duration: '6 weeks', fee: '$120', paymentStatus: 'Failed' },
    { slNo: 3, name: 'HTML & CSS Mastery', duration: '3 weeks', fee: '$80', paymentStatus: 'Paid' },
    { slNo: 4, name: 'Node.js Essentials', duration: '8 weeks', fee: '$150', paymentStatus: 'Paid' },
    { slNo: 5, name: 'Python Programming', duration: '10 weeks', fee: '$180', paymentStatus: 'Failed' },
    { slNo: 6, name: 'Java Fundamentals', duration: '7 weeks', fee: '$130', paymentStatus: 'Paid' },
    { slNo: 7, name: 'Data Structures and Algorithms', duration: '12 weeks', fee: '$200', paymentStatus: 'Paid' },
    { slNo: 8, name: 'Machine Learning Basics', duration: '8 weeks', fee: '$170', paymentStatus: 'Failed(Refund Initiated)' },
    { slNo: 9, name: 'Web Development with Django', duration: '9 weeks', fee: '$160', paymentStatus: 'Paid' },
    { slNo: 10, name: 'Mobile App Development with React Native', duration: '10 weeks', fee: '$190', paymentStatus: 'Paid' },

  ];

  return (
    <div className='flex items-center font-Montserrat text-2xljustify-center h-full w-full'>
    <div className="overflow-hidden absolute top-1/3 left-1/4">
      <h1 className=''>Payment History</h1>
            <table className=" w-full  border  border-gray-300 m-auto">
          <thead className='bg-indigo-500 text-white'>
            <tr>
              <th className="border border-gray-300 px-11 py-2">#</th>
              <th className="border border-gray-300 px-11 py-2">Course Name</th>
              <th className="border border-gray-300 px-11 py-2">Duration</th>
              <th className="border border-gray-300 px-11 py-2">Fee</th>
              <th className="border border-gray-300 px-11 py-2">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.slNo}>
                <td className="border border-gray-300 px-11 py-2">{course.slNo}</td>
                <td className="border border-gray-300 px-11 py-2">{course.name}</td>
                <td className="border border-gray-300 px-11 py-2">{course.duration}</td>
                <td className="border border-gray-300 px-11 py-2">{course.fee}</td>
                <td className={`border border-gray-300 px-11 py-2 ${course.paymentStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>{course.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
  );
};

export default UserPayments;
