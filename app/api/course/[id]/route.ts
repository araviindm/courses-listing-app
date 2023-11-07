import Course from "@/models/Course";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
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
