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
    this.state = {
      data: [
        { name: 'Lukas Schmidt', salary: 700, increase: true, rise: true, id: 1 },
        { name: 'Marco Rossi', salary: 750, increase: false, rise: false, id: 2 },
        { name: 'Jan Kowalski', salary: 800, increase: false, rise: false, id: 3 },
        { name: 'Sebastian Fischer', salary: 850, increase: false, rise: false, id: 11 },
        { name: 'Patrick O’Connor', salary: 900, increase: false, rise: false, id: 12 },
        { name: 'Victor Petrov', salary: 950, increase: false, rise: false, id: 13 },
        { name: 'Leonardo Bianchi', salary: 1050, increase: false, rise: false, id: 14 },
        { name: 'Filip Nowak', salary: 700, increase: true, rise: false, id: 15 },
        { name: 'Henrik Larsen', salary: 750, increase: false, rise: false, id: 16 },
        { name: 'Adrien Moreau', salary: 1300, increase: false, rise: false, id: 17 },
        { name: 'Nikolai Ivanov', salary: 1150, increase: false, rise: false, id: 18 },
        { name: 'Tomasz Zielinski', salary: 900, increase: false, rise: false, id: 19 },
        { name: 'Carlos Fernández', salary: 950, increase: false, rise: false, id: 20 },
      ],
      term: '',
      filter: 'salary',
    };
    this.maxID = 4;
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
      salary,
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
          <AppFilter />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
