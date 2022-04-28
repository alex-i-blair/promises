import {
  asyncGetQuotes,
  thenGetQuotes,
  asyncTryGetQuotes,
  catchDotThenQuotes,
  asyncGetQuotesFinally,
  getQuotesDotFinally,
  exerciseSeven,
  exerciseEight,
} from './services/promise-me';

export default function App() {
  return (
    <>
      <button onClick={async () => console.log(await asyncGetQuotes())}>
        Async Get Quotes
      </button>
      <button onClick={async () => console.log(await thenGetQuotes())}>
        .then() Get Quotes
      </button>
      <button onClick={async () => console.log(await asyncTryGetQuotes())}>
        Async Try get
      </button>
      <button onClick={async () => console.log(await catchDotThenQuotes())}>
        catch .then quotes
      </button>
      <button onClick={async () => console.log(await asyncGetQuotesFinally())}>
        Async catch finally
      </button>
      <button onClick={async () => console.log(await getQuotesDotFinally())}>
        DotFinally
      </button>
      <button onClick={async () => console.log(await exerciseSeven())}>
        Exercise 7
      </button>
      <button onClick={async () => console.log(await exerciseEight())}>
        Exercise 8
      </button>
    </>
  );
}
