export type Course = {
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
};
