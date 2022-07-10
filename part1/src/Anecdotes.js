import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [maxindex, setMaxindex] = useState(0);
  const [statistics, setStatistics] = useState(
    new Array(anecdotes.length).fill(0)
  );

  const updateStatistic = () => {
    const copy = [...statistics];
    copy[selected] += 1;
    setStatistics(copy);
    console.log(statistics); // 这里的更新延迟好奇怪啊
    if (statistics[selected] >= statistics[maxindex]) {
      setMaxindex(selected);
    }
  };
  const geneRandom = () => Math.floor(Math.random() * anecdotes.length);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {statistics[selected]} votes</p>
      <button onClick={updateStatistic}>vote</button>
      <button onClick={() => setSelected(geneRandom())}>next anecdote</button>
      <h1>Anecode with most votes</h1>
      <p>{anecdotes[maxindex]}</p>
      <p>has {statistics[maxindex]} votes</p>
    </div>
  );
};

export default App;
