// import styles from "./VoteStats.module.css";

// const VoteStats = ({ votes, totalVotes, positiveRate }) => {
//   return (
//     <div className={styles.container}>
//       <p className={styles.stat}>
//         Good: <strong>0</strong>
//       </p>
//       <p className={styles.stat}>
//         Neutral: <strong>0</strong>
//       </p>
//       <p className={styles.stat}>
//         Bad: <strong>0</strong>
//       </p>
//       <p className={styles.stat}>
//         Total: <strong>0</strong>
//       </p>
//       <p className={styles.stat}>
//         Positive: <strong>0%</strong>
//       </p>
//     </div>
//   );
// };

import type { Votes } from "../../types/votes";
import styles from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number; // целое число процента, например 42
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}

// export default VoteStats;
