import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content items={course.parts} />
    </div>
  );
};

export default Course;
