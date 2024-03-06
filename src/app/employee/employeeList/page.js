"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';

const EmployeeList = () => {

    const [employee, setEmployee] = useState([]);

    const getEmployeeList = async () => {
        const res = await fetch(`http://localhost:3000/api/employee`, {
            method: "GET"
        }
        )

        // create data
        const resData = await res.json();

        // destructure data
        const { data } = resData;

        setEmployee(data)
    }

    // delete employee function
    const deleteEmployee = async (_id) => {
        const res = await fetch(`http://localhost:3000/api/employee/${_id}`, {
            method: "DELETE"
        })

        // create data
        const resData = await res.json();

        // destructure data
        const { msg, error } = resData;

        // condition
        if (error) {
            alert(error) // error msg
        } else {
            alert(msg) // success msg
        }

        // after delete show list
        getEmployeeList()
    }

    useEffect(() => {
        getEmployeeList()
    }, [])
    return (
        <div className=' flex justify-center items-center h-screen'>
            {/* Main  */}
            <div className="flex flex-col">
                {/* Main-Child 1  */}
                <div className="-m-1.5 overflow-x-auto">
                    {/* Main-Child 2  */}
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        {/* Main-Child 3  */}
                        <div className="border rounded-lg shadow overflow-hidden ">
                            {/* Top [Svg Icon And Text]  */}
                            <div className="p-2 bg-gray-50 border-b flex gap-2 items-center">
                                {/* link */}
                                <Link href='/'>
                                    {/* svg icon  */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </Link>

                                {/* Text  */}
                                <h1 className=' text-center text-2xl font-semibold'>
                                    Employee Detail List
                                </h1>
                            </div>

                            {/* Table  */}
                            <table className=" w-full divide-y divide-gray-200 ">
                                {/* Thead  */}
                                <thead className="bg-gray-50 ">
                                    <tr>
                                        {/* S.No. */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            S.No.
                                        </th>

                                        {/* Employee Name */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Name
                                        </th>

                                        {/* Email */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Email
                                        </th>

                                        {/* Address  */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Address
                                        </th>

                                        {/* Salary */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Salary
                                        </th>

                                        {/* Action  */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Action
                                        </th>

                                        {/* Action */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {employee.map((item, index) => {
                                    const { _id, name, email, address, salary } = item
                                    return (
                                        // tbody 
                                        <tbody key={index} className="divide-y divide-gray-200">
                                            <tr>
                                                {/* S.No  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                                    {index + 1}.
                                                </td>
                                                {/* Name  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                                    {name}
                                                </td>
                                                {/* Email  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    {email}
                                                </td>
                                                {/* Address  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    {address}
                                                </td>
                                                {/* Salary  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    ₹ {salary}
                                                </td>
                                                {/* Edit Button */}
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link href={_id} className="text-green-600">
                                                        Edit
                                                    </Link>
                                                </td>
                                                {/* Delete Button */}
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="text-red-600 cursor-pointer " onClick={() => deleteEmployee(_id)}>
                                                        Delete
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeList;