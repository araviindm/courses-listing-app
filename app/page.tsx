"use client";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import store from "@/store";
import { Course } from "@/types/customTypes";
import { useRouter } from "next/navigation";
import { AiOutlineLike } from "react-icons/ai";
import Loader from "@/components/Loader";

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState<Course[]>();
  const [coursesError, setCoursesError] = useState(false);

  const getCourses = useCallback(async () => {
    if (!(await store.search(search))) {
      setCoursesError(true);
    } else {
      setCourses(store.courses);
    }

    return () => {};
  }, [search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("studentId", "1");
    getCourses();
  }, [getCourses]);

  if (courses === undefined) {
    return <Loader />;
  }

  return (
    <div className="text-center">
      <div className="border-b border-gray-700">
        <div>
          <p className="text-3xl md:text-6xl font-bold">
            Find your <span className="text-blue-500">Course.</span>
          </p>
        </div>
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <div className="w-full relative flex items-center">
            <input
              type="text"
              className="w-full my-4 md:my-6 py-3 pl-10 text-slate-200 bg-gray-900 border rounded border-slate-400 focus:border-blue-500 focus:outline-none"
              placeholder="Search..."
              onChange={handleSearchChange}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <BsSearch color="" className="text-slate-200" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {coursesError ? (
          <h1 className="m-4">Error in fetching the courses.</h1>
        ) : (
          <div className="flex justify-center">
            <ul className="grid grid-cols-1 gap-2 py-5 my-5 ml:grid-cols-3">
              {courses.map((course) => (
                <li
                  key={course.id}
                  className="relative m-[1px] max-w-sm bg-black border-none rounded-lg shadow-sm hover:shadow-md hover:bg-opacity-20 hover:cursor-pointer bg-opacity-40 transition-transform transform hover:scale-105"
                  onClick={() => {
                    router.push("/course/" + course._id);
                  }}
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
                      <p className="text-right flex justify-end items-center">
                        <span className="align-middle mr-1">
                          <AiOutlineLike />
                        </span>
                        <span className="align-middle">{course.likes}</span>
                      </p>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 truncate">
                        {course.title}
                      </h5>
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-400 truncate underline">
                        {course.instructor}
                      </h5>
                    </div>
                    <p className="mb-5 text-sm font-normal text-justify text-slate-400">
                      {course.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
