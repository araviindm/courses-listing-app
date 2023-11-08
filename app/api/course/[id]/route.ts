import { NextRequest, NextResponse } from "next/server";
import connect from "@/db";
import Course from "@/models/Course";

// Fetch a single course by _id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    let isConnected = await connect();
    if (!isConnected) {
      return NextResponse.json({
        resp: "Error connecting to db",
        status: 500,
      });
    }
    const courseId = params.id;
    const course = await Course.findOne({ _id: courseId });
    return NextResponse.json({
      resp: course,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      resp: "Error fetching course" + err,
      status: 200,
    });
  }
}
