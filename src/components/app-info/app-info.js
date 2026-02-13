import './app-info.css';

const AppInfo = ({ onCounterIncrease, onCounterRise }) => {
  return (
    <div className="app-info">
      <h1>Employee Overview </h1>
      <h2>Total Employees: {onCounterIncrease}</h2>
      <h2>Eligible for Bonus: {onCounterRise}</h2>
    </div>
  );
};

export default AppInfo;
