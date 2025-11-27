import css from "./CafeInfo.module.css";
function CafeInfo() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
}
export default CafeInfo;

// function CafeInfo() {
//   return (
//     <div>
//       <h1>Sip Happens Café</h1>
//       <h2>nnnnnnn</h2>
//       <p>Please rate our service by selecting one of the options below.</p>
//     </div>
//   );
// }

// export default CafeInfo;
