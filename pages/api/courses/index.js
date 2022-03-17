import { coursesData } from "../../../data";

export default function courseData(req, res) {
  res.status(200).json(coursesData);
}
