const Persons = ({
  persons,
  filterWord,
  deleteHandler,
  deletePersonOfState,
}) => {
  return (
    <div>
      {persons.map((person) => {
        if (person.name.includes(filterWord)) {
          return (
            <p key={person.id}>
              {person.name} {person.number}{" "}
              <button
                onClick={() => {
                  if (window.confirm(`Ensure to delete ${person.name}`)) {
                    deleteHandler(person); // 删除后端的对应数据
                    deletePersonOfState(person); // 更新组件的状态值
                  }
                }}
              >
                delete
              </button>
            </p>
          );
        }
      })}
    </div>
  );
};

export default Persons;
