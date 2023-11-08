import { NextRequest, NextResponse } from "next/server";
import { Student } from "@/types/customTypes";

//Students array
const students = [
  {
    id: "1",
    name: "Barney Stinson",
    courses: [
      {
        courseId: 1,
        title: "Introduction to Programming",
        instructor: "George Costanza",
        dueDate: "2023-12-15",
        percentCompleted: 30,
      },
      {
        courseId: 2,
        title: "Web Development Fundamentals",
        instructor: "Elaine Benes",
        dueDate: "2023-12-18",
        percentCompleted: 45,
      },
    ],
  },
  {
    id: "2",
    name: "Chandler Bing",
    courses: [
      {
        courseId: 3,
        title: "Data Science with Python",
        instructor: "Jerry Seinfeld",
        dueDate: "2023-12-20",
        percentCompleted: 25,
      },
    ],
  },
  {
    id: "3",
    name: "Rachel Green",
    courses: [
      {
        courseId: 1,
        title: "Introduction to Programming",
        instructor: "George Costanza",
        dueDate: "2023-12-16",
        percentCompleted: 60,
      },
      {
        courseId: 4,
        title: "Machine Learning for Beginners",
        instructor: "Kramer",
        dueDate: "2023-12-19",
        percentCompleted: 35,
      },
    ],
  },
  {
    id: "4",
    name: "Monica Geller",
    courses: [
      {
        courseId: 3,
        title: "Data Science with Python",
        instructor: "Jerry Seinfeld",
        dueDate: "2023-12-20",
        percentCompleted: 25,
      },
      {
        courseId: 5,
        title: "Mobile App Development",
        instructor: "Mobile App Development",
        dueDate: "2023-12-17",
        percentCompleted: 75,
      },
    ],
  },
  {
    id: "5",
    name: "Joey Tribbiani",
    courses: [
      {
        courseId: 2,
        title: "Web Development Fundamentals",
        instructor: "Elaine Benes",
        dueDate: "2023-12-18",
        percentCompleted: 45,
      },
    ],
  },
];

// Fetch a single student by id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const student: Student | undefined = students.find((student) => {
    return student.id === id;
  });
  if (student) {
    return NextResponse.json({ resp: student, status: 200 });
  } else {
    return NextResponse.json({ resp: "Error fetching student", status: 404 });
  }
}
