const Single = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((lang, idx) => (
          <li key={idx}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flags" />
    </div>
  );
};

export default Single;
