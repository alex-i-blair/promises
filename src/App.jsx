import { asyncGetQuotes, thenGetQuotes } from './services/promise-me';

export default function App() {
  const handleClick = (callback) => {
    const res = callback();
    console.log(res);
  };
  return (
    <>
      <button onClick={() => handleClick(asyncGetQuotes)}>
        Async Get Quotes
      </button>
      <button onClick={() => handleClick(thenGetQuotes)}>
        .then() Get Quotes
      </button>
    </>
  );
}
