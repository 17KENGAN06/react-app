import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    const savedData = JSON.parse(localStorage.getItem('employees'));

    this.state = {
      data: savedData || [
        { name: 'Lukas Schmidt', salary: 700, increase: true, rise: true, id: 1 },
        { name: 'Marco Rossi', salary: 750, increase: false, rise: false, id: 2 },
        { name: 'Jan Kowalski', salary: 800, increase: false, rise: false, id: 3 },
        { name: 'Sebastian Fischer', salary: 850, increase: false, rise: false, id: 4 },
        { name: 'Patrick O’Connor', salary: 900, increase: false, rise: false, id: 5 },
        { name: 'Leonardo Bianchi', salary: 1050, increase: false, rise: false, id: 6 },
        { name: 'Filip Nowak', salary: 700, increase: true, rise: false, id: 7 },
        { name: 'Henrik Larsen', salary: 750, increase: false, rise: false, id: 8 },
        { name: 'Adrien Moreau', salary: 1300, increase: false, rise: false, id: 9 },
        { name: 'Nikolai Ivanov', salary: 1150, increase: false, rise: false, id: 10 },
        { name: 'Tomasz Zielinski', salary: 900, increase: false, rise: false, id: 11 },
        { name: 'Carlos Fernández', salary: 950, increase: false, rise: false, id: 12 },
      ],
      term: '',
      filter: 'all',
    };

    this.maxID = this.state.data.length + 1;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      localStorage.setItem('employees', JSON.stringify(this.state.data));
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex(elem => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after];

      // return {
      //   data: newArr
      // }

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary: +salary,
      increase: false,
      rise: false,
      id: this.maxID++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);

    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    //   return {
    //     data: newArr
    //   }
    // })

    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  };

  onSearch = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onSearchUpdate = (term) => {
    this.setState({ term });
  };

  onFilterEmployees = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'salary':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  onSalaryChange = (id, newSalary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, salary: newSalary };
        }
        return item;
      }),
    }));
  };

  render() {
    // VARIABLES
    const { data, term, filter } = this.state;
    const employeesCounterIncrease = this.state.data.length;
    const employeesCounterRise = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.onFilterEmployees(this.onSearch(data, term), filter);

    return (
      <div className="app">
        <AppInfo
          onCounterIncrease={employeesCounterIncrease}
          onCounterRise={employeesCounterRise}
        />

        <div className="search-panel">
          <SearchPanel onSearchUpdate={this.onSearchUpdate} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
          onSalaryChange={this.onSalaryChange}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
