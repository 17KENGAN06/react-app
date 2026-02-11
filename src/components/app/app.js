import './app.css';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

const App = () => {
  const data = [
    { name: 'John', salary: 2000, increase: true },
    { name: 'Mark', salary: 3000, increase: false },
    { name: 'Evil', salary: 1500, increase: true },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
};

export default App;
