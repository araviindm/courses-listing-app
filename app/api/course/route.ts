import { NextRequest, NextResponse } from "next/server";
import connect from "@/db";
import Course from "@/models/Course";

// Fetch all courses
export async function GET(req: NextRequest) {
  try {
    let isConnected = await connect();
    if (!isConnected) {
      return NextResponse.json({
        resp: "Error connecting to db",
        status: 500,
      });
    }
    const query = req.nextUrl.searchParams.get("query") as string;
    let searchCriteria = {};
    if (query) {
      searchCriteria = {
        $or: [
          { title: { $regex: query, $options: "i" } },
          { instructor: { $regex: query, $options: "i" } },
        ],
      };
    }
    const courses = await Course.find(searchCriteria);
    return NextResponse.json({
      resp: courses,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      resp: "Error fetching courses" + err,
      status: 200,
    });
  }
}
