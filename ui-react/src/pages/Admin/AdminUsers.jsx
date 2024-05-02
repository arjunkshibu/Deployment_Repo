import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../services/AxiosConfig';
import toast, { Toaster } from 'react-hot-toast';


const UsersTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from backend when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:8080/users/getUsers');
      console.log(response)
      setUsers(response.data);
    } catch (error) {
      toast.error('Error fetching users:', error);
    }
  };

  

  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axiosInstance.delete(`http://localhost:8080/users/deleteUser?userId=${id}`);
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-green-700">
                    Success
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    User deleted successfully!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ))
      
        //setUsers(users.filter(user => user.id !== id));
        fetchUsers();
      } catch (error) {
        toast.error('Error deleting user!');
      }
    }
  };


  return (
    <div className="container mx-auto font-Montserrat mt-8">
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <table className="table-auto border-collapse border border-black-800 mx-auto">
        <thead>
          <tr>
            <th className="border border-gray-800 px-4 py-2">ID</th>
            <th className="border border-gray-800 px-4 py-2">Name</th>
            <th className="border border-gray-800 px-4 py-2">Email</th>
            <th className="border border-gray-800 px-4 py-2">Phone</th>
            <th className="border border-gray-800 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.uid}>
              <td className="border border-gray-800 px-4 py-2">{user.uid}</td>
              <td className="border border-gray-800 px-4 py-2">{user.name}</td>
              <td className="border border-gray-800 px-4 py-2">{user.email}</td>
              <td className="border border-gray-800 px-4 py-2">{user.phone}</td>
              <td className="border border-gray-800 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => deleteUser(user.uid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
