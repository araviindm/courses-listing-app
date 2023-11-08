import { type Course, type Student } from "@/types/customTypes";
import { observable, action, makeAutoObservable } from "mobx";
import axios from "axios";

class Store {
  @observable courses: Course[] = [];
  @observable course: Course = {
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
  };
  @observable student: Student = {
    id: "",
    name: "",
    courses: [],
  };
  @observable studentId = "";

  @action setCourses(courses: Course[]) {
    this.courses = courses;
  }

  @action setCourse(course: Course) {
    this.course = course;
  }

  @action setStudent(student: Student) {
    this.student = student;
  }
  @action setStudentId(studentId: string) {
    this.studentId = studentId;
  }

  @action async search(query: string) {
    try {
      const response = await axios.get("/api/course", {
        params: { query: query },
      });
      if (response.data.status === 200) {
        this.setCourses(response.data.resp);
        return true;
      }
    } catch (error) {
      this.setCourses([]);
      console.error(error);
      return false;
    }
  }
  @action async fetchCourse(courseId: string) {
    try {
      const response = await axios.get(`/api/course/${courseId}`);
      if (response.data.status === 200) {
        this.setCourse(response.data.resp);
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  @action async fetchStudent() {
    try {
      const response = await axios.get(`/api/student/${this.studentId}`);
      if (response.data.status === 200) {
        this.setStudent(response.data.resp);
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  constructor() {
    makeAutoObservable(this);
    //   if (typeof window !== "undefined") {
    //     makePersistable(this, {
    //       name: "store",
    //       properties: [""],
    //       storage: window.localStorage,
    //     });
    //   }
    // }
    // dispose() {
    //   stopPersisting(this);
    // }
  }
}
const store = new Store();
export default store;
