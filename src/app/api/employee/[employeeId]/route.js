import { Employee } from "@/app/models/Employee";
import { NextResponse } from "next/server";

// Get Single Employee 
export async function GET(request, {params}) {
    try {
        const {employeeId} = params;
        const getSingleEmployee = await Employee.findById(employeeId);
        return NextResponse.json(
            {
                success: true,
                msg: "Get single Employee found successfully !!",
                data: getSingleEmployee
            }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                msg: "Single Employee found failed !!"
            }
        )
    }
}

// Update Employee
export async function PUT(request, {params}) {
    try {
        // data fetch
        const{name, email, address, salary} = request.json();

        // id fetch
        const {employeeId} = params;
        const employee = await Employee.findById(employeeId);

        // set name
        employee.name = name;

        // set email
        employee.email = email;

        // set address
        employee.address = address;

        // set name
        employee.salary = salary;

        const updateEmployee = await employee.Save()

        return NextResponse.json(
            {
                success: true,
                msg: "Get single Employee found successfully !!",
                data: updateEmployee
            }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                msg: "Single Employee found failed !!"
            }
        )
    }
}

// Delete Single Employee
export async function DELETE(request, {params}) {
    try {
        const {employeeId} = params;
        const getSingleEmployee = await Employee.deleteOne({
            _id: employeeId
        });
        return NextResponse.json(
            {
                success: true,
                msg: "Single Employee delete successfully !!",
                data: getSingleEmployee
            }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                msg: "Delete Single Employee failed !!"
            }
        )
    }
}