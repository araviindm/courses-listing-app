"use client";
import SkeletonLoader from "@/components/Loader";
import store from "@/store";
import { Course } from "@/types/customTypes";
import { useCallback, useEffect, useState } from "react";

const Course = () => {
  const [course, setCourse] = useState<Course | undefined | null>(undefined);
  const [courseError, setCourseError] = useState(false);

  const getCourse = useCallback(async (id: string) => {
    let resp = await store.fetchCourse("");
    if (resp.status === 200) {
      setCourse(resp.data);
    } else {
      setCourse(null);
      console.log("Error fetching course", resp);
      setCourseError(true);
    }
    return () => {};
  }, []);

  useEffect(() => {
    getCourse("2");
  }, [getCourse]);

  if (course === undefined) {
    return <SkeletonLoader />;
  }
  return (
    <div className="text-center">
      {courseError ? <h1>Error in fetching the course.</h1> : <div>Hi</div>}
    </div>
  );
};
export default Course;
