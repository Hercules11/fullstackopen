import axios from "axios";
import { useState, useEffect } from "react";
import Single from "./Single";

const Content = ({ search }) => {
  const [display, setDisplay] = useState([]);
  const [show, setShow] = useState([]);

  const handleClick = (idx) => {
    const copy = [...show];
    copy[idx] = !copy[idx];
    setShow(copy);
  };

  useEffect(() => {
    if (search) {
      axios.get(`https://restcountries.com/v3.1/name/${search}`).then((res) => {
        setDisplay(res.data);
        setShow(new Array(res.data.length).fill(false));
      });
    }
  }, [search]);
  if (display.length >= 10) {
    return <p>Too many matches, specify another filter.</p>;
  } else if (display.length > 1) {
    return (
      <div>
        {display.map((item, index) => {
          return (
            <div key={index}>
              <h3>
                {item.name.common}{" "}
                <button onClick={handleClick.bind(this, index)}>
                  {show[index] ? "not show" : "show"}
                </button>
              </h3>
              {show[index] && <Single country={display[index]} />}
            </div>
          );
        })}
      </div>
    );
  } else if (display.length === 1) {
    return <Single country={display[0]} />;
  } else {
    return <p>no match.</p>;
  }
};

export default Content;
