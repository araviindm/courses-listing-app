"use client";
import Loader from "@/components/Loader";
import store from "@/store";
import { Student } from "@/types/customTypes";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";
import { IoIosArrowForward } from "react-icons/io";

const DashBoard = () => {
  const [student, setStudent] = useState<Student>({
    id: "",
    name: "",
    courses: [],
  });
  const [studentError, setStudentError] = useState(false);

  const getStudent = useCallback(async () => {
    if (!(await store.fetchStudent())) {
      setStudentError(true);
    } else {
      setStudent(store.student);
    }
    return () => {};
  }, []);

  useEffect(() => {
    getStudent();
  }, [getStudent]);

  if (student.id === "") {
    return <Loader />;
  }

  return (
    <div>
      {studentError ? (
        <h1 className="m-4">Error in fetching the DashBoard.</h1>
      ) : (
        <div>
          <div>
            <p className="text-3xl font-bold">
              Hi, <span className="text-blue-500">{student.name}</span>
            </p>
            <p className="text-1xl font-semibold">Nice to see you again!</p>
          </div>
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
            <div className="items-center grid grid-cols-2 px-4 py-4 bg-black border-none rounded-lg shadow-sm hover:shadow-md hover:bg-opacity-20 bg-opacity-30">
              <Image
                src="/course-icon.png"
                className="rounded-t-lg"
                alt="Course Logo"
                priority={true}
                height={70}
                width={70}
              />
              <div className="text-center font-bold">
                <p className="text-blue-500">0/2</p>
                <p>Courses</p>
              </div>
            </div>
            <div className="items-center grid grid-cols-2 px-4 py-4  bg-black border-none rounded-lg shadow-sm hover:shadow-md hover:bg-opacity-20 bg-opacity-30">
              <Image
                src="/assignment-icon.png"
                className="rounded-t-lg"
                alt="Course Logo"
                priority={true}
                height={70}
                width={70}
              />
              <div className="text-center font-bold">
                <p className="text-blue-500">6/20</p>
                <p>Assignments</p>
              </div>
            </div>
            <div className="items-center grid grid-cols-2 px-4 py-4 bg-black border-none rounded-lg shadow-sm hover:shadow-md hover:bg-opacity-20 bg-opacity-30">
              <Image
                src="/attendance-icon.png"
                className="rounded-t-lg"
                alt="Course Logo"
                priority={true}
                height={70}
                width={70}
              />
              <div className="text-center font-bold">
                <p className="text-blue-500">70%</p>
                <p>Attendace</p>
              </div>
            </div>
            <div className="items-center grid grid-cols-2 px-4 py-4 bg-black border-none rounded-lg shadow-sm hover:shadow-md hover:bg-opacity-20 bg-opacity-30">
              <Image
                src="/quiz-icon.png"
                className="rounded-t-lg"
                alt="Course Logo"
                priority={true}
                height={70}
                width={70}
              />
              <div className="text-center font-bold">
                <p className="text-blue-500">5/20</p>
                <p>Quizes</p>
              </div>
            </div>
          </div>
          <div className="my-4 flex justify-center">
            <ul className="grid grid-cols-1 gap-4 md:gap-2 py-5 my-5 ml:grid-cols-3">
              {student.courses.map((course) => (
                <li
                  key={course.courseId}
                  className="relative m-[1px] max-w-sm bg-black border-none rounded-lg shadow-sm hover:shadow-md hover:bg-opacity-20 bg-opacity-40 transition-transform transform hover:scale-105"
                >
                  <Image
                    src="/course-stock-img.jpg"
                    className="rounded-t-lg"
                    alt="Courses Logo"
                    priority={true}
                    height={200}
                    width={400}
                  />
                  <div className="px-5 py-2">
                    <div>
                      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-blue-500 truncate">
                        {course.title}
                      </h5>
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-400 truncate underline">
                        <span className="text-base"></span>
                        {course.instructor}
                      </h5>
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-400">
                        Due:
                        <span className="text-red-400 ml-1">
                          {course.dueDate}
                        </span>
                      </h5>
                    </div>
                    <div className="py-2">
                      <div className="flex justify-between items-center gap-2">
                        <ProgressBar percent={course.percentCompleted} />
                        <div className="border rounded-full">
                          <IoIosArrowForward className="w-10 h-10 p-2" />
                        </div>
                      </div>
                      {course.percentCompleted}% completed
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default DashBoard;
