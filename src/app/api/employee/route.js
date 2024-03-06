import { Employee } from "@/app/models/Employee";
import { NextResponse } from "next/server";
import { connectToDB } from "@/app/database/db";

// database call
connectToDB();

export async function GET() {
    try {
        const findEmployee = await Employee.find();
        return NextResponse.json(
            {
                success: true,
                msg: "Employee found successfully !!",
                data: findEmployee
            }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                msg: "Employee found failed !!"
            }
        )
    }
}

export async function POST(request) {
    try {
        // fetch data 
        const { name, email, address, salary } = await request.json()
        
        // validations
        if ( !name || !email || !address || !salary) {
            return NextResponse.json(
                {
                    success: false,
                    msg: "All fields are required !!"
                }
            )
        }

        // check valid email
        if(!email.includes('@')){
            return NextResponse.json(
                {
                    success: false,
                    msg: "Please enter the vaild email"
                }
            )
        }

        // check employee exist or not
        const existEmployee = await Employee.findOne({ email });

        if (existEmployee) {
            return NextResponse.json(
                {
                    success: false,
                    msg: "Employee Already exists !!"
                }
            )
        }

        // Employee Create
        const employee = new Employee({
            name,
            email,
            address,
            salary
        })

        const createEmployee = await employee.save()

        return NextResponse.json(
            {
                success: true,
                msg: "Employee create successfully !!",
                data: createEmployee
            }
        )

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                msg: "Employee creation failed !!"
            }
        )
    }
}