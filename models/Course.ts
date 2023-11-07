import { Model, Schema } from "mongoose";
import createModel from "@/helpers/createModel";
import { Course } from "@/types/customTypes";

type CourseModel = Model<Course>;

const courseSchema = new Schema<Course, CourseModel>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: String, required: true },
  likes: { type: Number, required: true },
  description: { type: String, required: true },
  enrollmentStatus: {
    type: String,
    enum: ["Open", "Closed", "In Progress"],
    required: true,
  },
  schedule: { type: String, required: true },
  location: { type: String, required: true },
  prerequisites: [String],
  syllabus: [
    {
      week: { type: Number, required: true },
      topic: { type: String, required: true },
      content: { type: String, required: true },
    },
  ],
});

export default createModel<Course, CourseModel>("courses", courseSchema);
