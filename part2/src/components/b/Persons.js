const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <p key={person.id}>
            {person.name} {person.phone}
          </p>
        );
      })}
    </div>
  );
};

export default Persons;
