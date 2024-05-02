import React, { useState } from 'react';

const initialPayments = [
  { id: 1, amount: 100, status: 'Approved' },
  { id: 2, amount: 200, status: 'Pending' },
  { id: 3, amount: 300, status: 'Pending' }
];

const AdminPayments = () => {
  const [payments, setPayments] = useState(initialPayments);

  const approvePayment = (id) => {
    const updatedPayments = payments.map(payment => {
      if (payment.id === id) {
        return {
          ...payment,
          status: 'Approved'
        };
      }
      return payment;
    });

    setPayments(updatedPayments);
  };

  const rejectPayment = (id) => {
    const updatedPayments = payments.map(payment => {
      if (payment.id === id) {
        return {
          ...payment,
          status: 'Rejected'
        };
      }
      return payment;
    });

    setPayments(updatedPayments);
  };

  return (
    <div className="container mx-auto font-Montserrat mt-8">
      <table className="table-auto border-collapse border border-black-800 mx-auto">
        <thead>
          <tr>
            <th className="border border-gray-800 px-4 py-2">ID</th>
            <th className="border border-gray-800 px-4 py-2">Amount</th>
            <th className="border border-gray-800 px-4 py-2">Status</th>
            <th className="border border-gray-800 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td className="border border-gray-800 px-4 py-2">{payment.id}</td>
              <td className="border border-gray-800 px-4 py-2">{payment.amount}</td>
              <td className="border border-gray-800 px-4 py-2">{payment.status}</td>
              <td className="border border-gray-800 px-4 py-2">
                {payment.status === 'Pending' && (
                  <>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => approvePayment(payment.id)}>Approve</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => rejectPayment(payment.id)}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPayments;
