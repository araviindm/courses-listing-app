"use client";
import store from "@/store";
import { Course } from "@/types/customTypes";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";
import ExpandableDiv from "@/components/ExpandableDiv";

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

  if (course._id === undefined) {
    return <Loader />;
  }

  return (
    <div>
      {courseError ? (
        <h1 className="m-4">Error in fetching the Course.</h1>
      ) : (
        <div>
          <div className="my-6 text-center border-b border-gray-400">
            <div className="text-3xl md:text-5xl font-bold text-blue-500">
              {course.title}
            </div>

            <div className="my-10">{course.description}</div>
            <div className="flex justify-end mb-2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-500 hover:text-white text-white ">
                <span className="relative inline-flex items-center px-4 py-3 transition-all duration-75 ease-in bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {course.enrollmentStatus}
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row my-6">
            <div className="w-full sm:w-3/4 order-2 sm:order- my-4 mr-4">
              {course.syllabus.map((item) => (
                <ExpandableDiv key={item.week} syllabus={item} />
              ))}
            </div>
            <div className="w-full sm:w-1/4 order-1 sm:order-2 my-4">
              <p className="mb-2">
                Instructor:
                <span className="ml-2 underline text-white">
                  {course.instructor}
                </span>
              </p>
              <p className="mb-2">
                Duration:
                <span className="ml-2 text-white">{course.duration}</span>
              </p>
              <p className="mb-2">
                Schedule:
                <span className="ml-2 text-white">{course.schedule}</span>
              </p>
              <p className="mb-2">
                Location:
                <span className="ml-2 text-white">{course.location}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
