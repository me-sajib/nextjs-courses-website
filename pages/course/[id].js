import React from "react";
import { server } from "../../Config";

const find = ({ course }) => {
  return (
    <div>
      {course.id}
      <h1>details</h1>
    </div>
  );
};

export default find;

export const getServerSideProps = async ({ context }) => {
  const res = await fetch(`http://localhost:3000/api/courses/${context.id}`);
  const course = await res.json();
  return {
    props: { course },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/courses`);
  const course = await res.json();
  const ids = course.map((course) => course.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
