import Image from "next/image";

const CourseItem = ({ course }) => {
  return (
    <div className="card">
      <h1>{course.name}</h1>

      <small>${course.price}</small>
      <p>{course.description} </p>
    </div>
  );
};

export default CourseItem;
