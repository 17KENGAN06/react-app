import './app-info.css';

const AppInfo = ({ onCounterIncrease, onCounterRise }) => {
  return (
    <div className="app-info">
      <h1>Työntekijöiden yleiskatsaus </h1>
      <h2>Työntekijöitä yhteensä: {onCounterIncrease}</h2>
      <h2>Bonukseen oikeutettuja: {onCounterRise}</h2>
    </div>
  );
};

export default AppInfo;
