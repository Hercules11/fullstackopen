import Part from "./Part";

const Content = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <Part key={item.id} name={item.name} exercises={item.exercises} />
        );
      })}
      <p>
        total of {items.reduce((sum, cur) => sum + cur.exercises, 0)} exercises
      </p>
    </div>
  );
};

export default Content;
