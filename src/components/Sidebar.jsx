import React from 'react'
import {  FaStickyNote } from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { TbBusStop } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa6";
import { LiaUserTieSolid } from "react-icons/lia";



const Sidebar = () => {
    return (
        <div className='bg-[#4E73DF] px-[20px]   h-screen'>
        {/* <div className="fixed h-screen px-[20px] w-1/6 bg-[#4E73DF] text-white p-4"> */}
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin panel</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                <TbBusStop color='white' />
                <p className='text-[14px] leading-[20px] font-bold text-white'><NavLink
              to="/Main"
              className={({ isActive }) => {
                return ` text-sm text-blue hover:text-blue-600 ${
                  isActive && "text-black-500"
                } `;
              }}
            >
              Dashboard
            </NavLink></p>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                    <PiStudent  color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'><NavLink
              to="/Stu"
              className={({ isActive }) => {
                return ` text-sm text-white hover:text-blue-600 ${
                  isActive && "text-black"
                } `;
              }}
            >
              Student Pass
            </NavLink></p>
                    </div>
                  
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                    <LiaUserTieSolid  color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Employee Pass</p>
                    </div>
                    
                </div>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
     
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>All Pass</p>
                    </div>
                   
                </div>
                </div>
                <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <div className='flex items-center gap-[10px] py-[15px]  cursor-pointer'>
                <PiStudentFill  color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'><NavLink
              to="/Allstudent"
              className={({ isActive }) => {
                return ` text-sm text-white hover:text-black ${
                  isActive && "text-black"
                } `;
              }}
            >
             All Students
            </NavLink></p>
                </div>
                <div className='flex items-center gap-[10px] py-[15px] cursor-pointer'>
                <FaUserTie color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>All Employees</p>
                </div>
            </div>
            
       

            </div>
    
    )
}

export default Sidebar