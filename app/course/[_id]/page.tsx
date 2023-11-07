"use client";
import store from "@/store";
import { Course } from "@/types/customTypes";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";

const CourseDetails = () => {
  const params = useParams();
  const [course, setCourse] = useState<Course>({
    _id: undefined,
    id: 0,
    title: "",
    instructor: "",
    duration: "",
    likes: 0,
    description: "",
    enrollmentStatus: "Open",
    schedule: "",
    location: "",
    prerequisites: [],
    syllabus: [],
  });
  const [courseError, setCourseError] = useState(false);

  const getCourse = useCallback(async (courseId: string) => {
    if (!(await store.fetchCourse(courseId))) {
      setCourseError(true);
    } else {
      setCourse(store.course);
    }
    return () => {};
  }, []);

  useEffect(() => {
    const courseId = params._id as string;
    getCourse(courseId);
  }, [getCourse, params._id]);

  return (
    <div>
      {courseError ? (
        <h1 className="m-4">Error in fetching the DashBoard.</h1>
      ) : (
        <div>{course.title}</div>
      )}
    </div>
  );
};

export default CourseDetails;
