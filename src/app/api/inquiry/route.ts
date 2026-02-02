import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Inquiry from "@/models/Inquiry";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, destination, budget, message } = body;

        // Connect to Database
        await dbConnect();

        // Save to MongoDB (only if DB connection works)
        try {
            if (process.env.MONGODB_URI) {
                await Inquiry.create({ name, phone, destination, budget, message });
            } else {
                console.log("Mocking DB Save (No MONGODB_URI):", body);
            }
        } catch (dbError) {
            console.error("Database save failed:", dbError);
            // Continue to send email or return success equivalent if DB is optional for now
        }

        // Send Email Notification
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Send to owner
                subject: `New Travel Inquiry from ${name}`,
                text: `
                Name: ${name}
                Phone: ${phone}
                Destination: ${destination}
                Budget: ${budget}
                Message: ${message}
            `,
            });
        } else {
            console.log("Mocking Email Send (No Credentials):", body);
        }

        return NextResponse.json({ success: true, message: "Inquiry submitted successfully" });
    } catch (error) {
        console.error("Inquiry submission error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to submit inquiry" },
            { status: 500 }
        );
    }
}
