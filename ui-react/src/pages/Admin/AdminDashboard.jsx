import React from "react";
import { BookCopy, DollarSign, Users, CreditCard, Laptop, University, Handshake, GraduationCapIcon, Building2, HeartHandshake } from "lucide-react";
import AdminsideBar from "../../components/Admin/AdminsideBar";

const AdminDashboard = () => {
  return (
    <div className="-z-10">
      <div class=" inset-0 flex justify-center items-center absolute right-0">
        <div class="grid grid-cols-3 grid-rows-3 gap-4 ml-32">
          <div class="h-52 w-96 bg-syn-lb flex flex-col justify-center hover:bg-syn-lb items-center">
            <div class="flex items-center hover:bg-teal-300 justify-center">
              <Users size={50} />
            </div>
            <div class="flex justify-center items-center text-4xl">
              Users-110547
            </div>
          </div>
          
           <div class="h-52 w-96 bg-syn-lb hover:bg-syn-lb flex flex-col justify-center items-center">
            <div class="flex items-center justify-center">
              <Laptop size={50} />
            </div>
            <div class="flex justify-center items-center text-4xl">
              Courses-2122
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AdminDashboard;
