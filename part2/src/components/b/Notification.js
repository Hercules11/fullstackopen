const Notification = ({ message, isError }) => {
  let tipStyle = {
    color: "green",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  let errorStyle = {
    color: "red",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  if (message) {
    return <h1 style={isError ? errorStyle : tipStyle}>{message}</h1>;
  }
  return null;
};

export default Notification;
