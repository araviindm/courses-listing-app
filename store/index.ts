import { type Course } from "@/types/customTypes";
import { observable, action, makeAutoObservable } from "mobx";
class Store {
  @observable sample: string = "";

  @observable courses: Course[] = [
    {
      id: 1,
      title: "Introduction to Programming",
      instructor: "John Smith",
      duration: "8 weeks",
      likes: 120,
      description:
        "This course introduces you to the fundamentals of programming with a focus on problem-solving and basic coding concepts.",
      enrollmentStatus: "Open",
      schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to React Native",
          content:
            "Overview of React Native, setting up your development environment.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content:
            "Creating a simple mobile app using React Native components.",
        },
      ],
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      instructor: "Sarah Johnson",
      duration: "10 weeks",
      likes: 85,
      description:
        "Learn the essential skills for web development, including HTML, CSS, and JavaScript, and build your first websites.",
      enrollmentStatus: "Closed",
      schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["Basic HTML and CSS knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "HTML and CSS Basics",
          content: "Introduction to HTML and CSS, creating static web pages.",
        },
        {
          week: 2,
          topic: "JavaScript Fundamentals",
          content:
            "Fundamental JavaScript concepts and interactive web development.",
        },
      ],
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Michael Brown",
      duration: "12 weeks",
      likes: 220,
      description:
        "Explore the world of data science using Python, covering data analysis, machine learning, and data visualization.",
      enrollmentStatus: "In Progress",
      schedule: "Fridays, 9:00 AM - 12:00 PM",
      location: "Online",
      prerequisites: ["Python programming skills", "Statistics knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Data Science",
          content:
            "Overview of data science and its applications, setting up Python environment.",
        },
        {
          week: 2,
          topic: "Data Analysis with Pandas",
          content: "Using Pandas for data manipulation and analysis.",
        },
      ],
    },
    {
      id: 4,
      title: "Machine Learning for Beginners",
      instructor: "Emily Davis",
      duration: "8 weeks",
      likes: 95,
      description:
        "Get started with machine learning by understanding the basics, algorithms, and practical applications.",
      enrollmentStatus: "Open",
      schedule: "Saturdays, 10:00 AM - 12:00 PM",
      location: "Online",
      prerequisites: ["Basic Python knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Machine Learning",
          content:
            "Basic concepts of machine learning and supervised learning.",
        },
        {
          week: 2,
          topic: "Linear Regression",
          content: "Understanding linear regression and its applications.",
        },
      ],
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "David Wilson",
      duration: "10 weeks",
      likes: 150,
      description:
        "Learn to develop mobile apps for iOS and Android using popular frameworks and tools.",
      enrollmentStatus: "Open",
      schedule: "Mondays and Wednesdays, 7:30 PM - 9:30 PM",
      location: "Online",
      prerequisites: [
        "Basic programming knowledge",
        "Familiarity with mobile platforms",
      ],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Mobile App Development",
          content:
            "Overview of mobile app development and selecting the right development tools.",
        },
        {
          week: 2,
          topic: "Creating User Interfaces",
          content:
            "Designing user interfaces for mobile apps using popular design principles.",
        },
      ],
    },
  ];

  @action setSampleAction(value: string) {
    this.sample = value;
  }

  @action search(query: string) {
    let resp = {
      status: 200,
      data: this.courses,
      errorMsg: "",
    };
    return resp;
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
