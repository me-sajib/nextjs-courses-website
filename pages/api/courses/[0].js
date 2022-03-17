import { coursesData } from "../../../data";

export default function getCourse({ req, res }) {
  const id = req.query.id;
  const find = coursesData.find((course) => course.id === id);
  if (find > 0) {
    res.status(200).json(find);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
}
