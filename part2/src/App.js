// import { useState } from "react";
// import Content from "./components/c/Content";

// const App = () => {
//   const [searchName, setSearchName] = useState("");

//   const handleChange = (event) => {
//     let name = event.target.value;
//     setSearchName(name);
//   };

//   return (
//     <div>
//       find countries{" "}
//       <input type="text" value={searchName} onChange={handleChange} />
//       <Content search={searchName} />
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------------------------------------------------------------
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/b/Filter";
import PersonForm from "./components/b/PersonForm";
import Persons from "./components/b/Persons";
import Notification from "./components/b/Notification";

import { addPerson, deletePerson, updatePerson } from "./services/persons";

const baseUrl = "http://localhost:3001/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filterName, setFilterName] = useState("");
  const [tipMessage, setTipMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // 初始化数据
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      console.log(res.data);
      setPersons(res.data);
    });
  }, []);

  const addPersonOfState = (event) => {
    event.preventDefault();

    const oldBook = [...persons];
    const newObj = { name: newName, number: newNum, id: oldBook.length + 1 };
    let isUpdate = false;
    if (!newName || !newNum) return;
    for (let p of persons) {
      if (p.name === newName) {
        let isReplace = window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        );
        if (!isReplace) return;
        isUpdate = true;
        break;
      }
    }
    if (isUpdate) {
      let toUpdatePersonId;
      setPersons(
        persons.map((person) => {
          if (person.name === newName) {
            person.number = newNum;
            toUpdatePersonId = person.id;
            newObj.id = toUpdatePersonId;
          }
          return person;
        })
      );
      updatePerson(toUpdatePersonId, newObj).catch((error) => {
        setIsError(true);
        setTipMessage(
          `Information of ${newObj.name} has already been removed from the server`
        );
        setTimeout(() => {
          setTipMessage("");
        }, 5000);
      });
    } else {
      setPersons(oldBook.concat(newObj));
      addPerson(newObj);

      // 显示提示信息，5s 后消失
      setIsError(false);
      setTipMessage(`Added ${newObj.name}`);
      setTimeout(() => {
        setTipMessage("");
      }, 5000);
    }
    setNewName("");
    setNewNum("");
  };

  const handleNameChange = (event) => {
    let name = event.target.value;
    setNewName(name);
  };
  const handleNumChange = (event) => {
    let num = event.target.value;
    setNewNum(num);
  };
  const handleFilterShow = (event) => {
    let filter = event.target.value;
    setFilterName(filter);
  };

  const deletePersonOfState = (obj) => {
    setPersons(persons.filter((person) => person.id !== obj.id));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={tipMessage} isError={isError} />
      <Filter value={filterName} handler={handleFilterShow} />
      <h3>Add a new</h3>
      <PersonForm
        num={newNum}
        name={newName}
        handleName={handleNameChange}
        handleNum={handleNumChange}
        addPerson={addPersonOfState}
      />
      <h3>Numbers</h3>
      <Persons
        filterWord={filterName}
        persons={persons}
        deleteHandler={deletePerson}
        deletePersonOfState={deletePersonOfState}
      />
    </div>
  );
};

export default App;

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
