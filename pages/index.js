import Head from "next/head";
import CoursesList from "../components/CoursesList";
import { server } from "../Config";
import styles from "../styles/Home.module.css";

export default function Home({ course }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="best web development courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.courses}>
        {course.map((courses) => (
          <CoursesList courses={courses} key={courses.id} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/courses`);
  const course = await res.json();
  return {
    props: { course },
  };
};
