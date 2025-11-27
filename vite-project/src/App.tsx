// import CafeInfo from "./components/CafeInfo/CafeInfo";
// import VoteOptions from "./components/VoteOptions/VoteOptions";
// import VoteStats from "./components/VoteStats/VoteStats";

// function App() {
//   return (
//     <div>
//       <CafeInfo />
//       <VoteOptions />
//       <VoteStats />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import CafeInfo from "./components/CafeInfo/CafeInfo";
// import { Votes, VoteType } from "./types/votes";
// import VoteOptions from "./components/VoteOptions/VoteOptions";

// function App() {
//   const [votes, setVotes] = useState<Votes>({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   ✔ Оновлення голосів
//   const handleVote = (type: VoteType) => {
//     setVotes((prev) => ({
//       ...prev,
//       [type]: prev[type] + 1,
//     }));
//   };

//   ✔ Скидання голосів
//   const resetVotes = () => {
//     setVotes({
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     });
//   };

//   return (
//     <div>
//       <CafeInfo />
//       <VoteOptions />
//       <VoteStats />
//       {/* Позже сюда передадим handleVote и resetVotes */}
//     </div>
//   );
// }

// export default App;

// <div className={css.app}></div>;

import { useState } from "react";
import CafeInfo from "./components/CafeInfo/CafeInfo";
import VoteOptions from "./components/VoteOptions/VoteOptions";
import VoteStats from "./components/VoteStats/VoteStats";

import type { Votes, VoteType } from "./types/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div>
      <CafeInfo />

      {/* 👉 СЮДИ ВСТАВЛЯЄШ */}
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />

      <VoteStats
        votes={votes}
        totalVotes={totalVotes}
        positiveRate={positiveRate}
      />
    </div>
  );
}

export default App;
