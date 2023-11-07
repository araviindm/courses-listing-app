import { ObjectId } from "mongoose";

export interface Course {
  _id: ObjectId | undefined;
  id: number;
  title: string;
  instructor: string;
  duration: string;
  likes: number;
  description: string;
  enrollmentStatus: "Open" | "Closed" | "In Progress";
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: {
    week: number;
    topic: string;
    content: string;
  }[];
}

export interface Student {
  id: string;
  name: string;
  courses: {
    courseId: number;
    title: string;
    instructor: string;
    dueDate: string;
    percentCompleted: number;
  }[];
}
