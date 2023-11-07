"use client";
import store from "@/store";
import { Student } from "@/types/customTypes";
import { useCallback, useEffect, useState } from "react";

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

  return (
    <div>
      {studentError ? (
        <h1 className="m-4">Error in fetching the DashBoard.</h1>
      ) : (
        <div>{student.name}</div>
      )}
    </div>
  );
};
export default DashBoard;
