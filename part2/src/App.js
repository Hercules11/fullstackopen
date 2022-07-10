import { useState } from "react";
import Content from "./components/c/Content";

const App = () => {
  const [searchName, setSearchName] = useState("");

  const handleChange = (event) => {
    let name = event.target.value;
    setSearchName(name);
  };

  return (
    <div>
      find countries{" "}
      <input type="text" value={searchName} onChange={handleChange} />
      <Content search={searchName} />
    </div>
  );
};

export default App;

// -----------------------------------------------------------------------------------------------------
// import { useState } from "react";
// import Filter from "./components/b/Filter";
// import PersonForm from "./components/b/PersonForm";
// import Persons from "./components/b/Persons";

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: "Arto Hellas", phone: "123456", id: 1 },
//   ]);
//   const [newName, setNewName] = useState("");
//   const [newNum, setNewNum] = useState("");
//   const [filterName, setFilterName] = useState("");

//   const addPerson = (event) => {
//     event.preventDefault();
//     if (!newName || !newNum) return;
//     for (let p of persons) {
//       if (p.name === newName) {
//         alert(`${newName} is already added to phonebook`);
//         return;
//       }
//     }
//     const oldBook = [...persons];
//     setPersons(
//       oldBook.concat({ name: newName, phone: newNum, id: oldBook.length + 1 })
//     );
//     setNewName("");
//     setNewNum("");
//   };

//   const handleNameChange = (event) => {
//     let name = event.target.value;
//     setNewName(name);
//   };
//   const handleNumChange = (event) => {
//     let num = event.target.value;
//     setNewNum(num);
//   };
//   const handleFilterShow = (event) => {
//     let filter = event.target.value;
//     setFilterName(filter);
//   };

//   // 这个依赖分析很有意思
//   const toShowPerson = persons.filter((item) =>
//     item.name.toLowerCase().includes(filterName)
//   );

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Filter value={filterName} handler={handleFilterShow} />
//       <h3>Add a new</h3>
//       <PersonForm
//         num={newNum}
//         name={newName}
//         handleName={handleNameChange}
//         handleNum={handleNumChange}
//         addPerson={addPerson}
//       />
//       <h3>Numbers</h3>
//       <Persons persons={toShowPerson} />
//     </div>
//   );
// };

// export default App;

// --------------------------------------------------------------------------------------------------------------
// import Course from "./components/a/Course";

// const App = () => {
//   const courses = [
//     {
//       id: 1,
//       name: "Half Stack application development",
//       parts: [
//         {
//           name: "Fundamentals of React",
//           exercises: 10,
//           id: 1,
//         },
//         {
//           name: "Using props to pass data",
//           exercises: 7,
//           id: 2,
//         },
//         {
//           name: "State of a component",
//           exercises: 14,
//           id: 3,
//         },
//         {
//           name: "Redux",
//           exercises: 11,
//           id: 4,
//         },
//       ],
//     },
//     {
//       name: "Node.js",
//       id: 2,
//       parts: [
//         {
//           name: "Routing",
//           exercises: 3,
//           id: 1,
//         },
//         {
//           name: "Middlewares",
//           exercises: 7,
//           id: 2,
//         },
//       ],
//     },
//   ];

//   return (
//     <div>
//       {courses.map((course) => (
//         <Course key={course.id} course={course} />
//       ))}
//     </div>
//   );
// };
// export default App;
