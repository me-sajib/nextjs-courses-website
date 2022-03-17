import Image from "next/image";
import Link from "next/link";
import { server } from "../Config";
import CourseItem from "./CourseItem";
const CoursesList = ({ courses }) => {
  return (
    <div className="coursesList">
      <Link href={`${server}/course/[id]`} as={`/course/${courses.id}`}>
        <a>
          <CourseItem course={courses} key={courses.id} />
        </a>
      </Link>
    </div>
  );
};

// get data to display

export default CoursesList;
