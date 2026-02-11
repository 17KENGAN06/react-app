import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
          { name: 'Lukas Schmidt', salary: 700, increase: true, id: 1 },
          { name: 'Marco Rossi', salary: 750, increase: false, id: 2 },
          { name: 'Jan Kowalski', salary: 800, increase: true, id: 3 },
          { name: 'Mateo García', salary: 850, increase: false, id: 4 },
          { name: 'Erik Svensson', salary: 900, increase: true, id: 5 },
          { name: 'Thomas Müller', salary: 950, increase: false, id: 6 },
          { name: 'Daniel Novak', salary: 1000, increase: true, id: 7 },
          { name: 'Oliver Jensen', salary: 700, increase: false, id: 8 },
          { name: 'Antoine Dubois', salary: 750, increase: true, id: 9 },
          { name: 'Milan Horvat', salary: 800, increase: false, id: 10 },
          { name: 'Sebastian Fischer', salary: 850, increase: true, id: 11 },
          { name: 'Patrick O’Connor', salary: 900, increase: false, id: 12 },
          { name: 'Victor Petrov', salary: 950, increase: true, id: 13 },
          { name: 'Leonardo Bianchi', salary: 1000, increase: false, id: 14 },
          { name: 'Filip Nowak', salary: 700, increase: true, id: 15 },
          { name: 'Henrik Larsen', salary: 750, increase: false, id: 16 },
          { name: 'Adrien Moreau', salary: 800, increase: true, id: 17 },
          { name: 'Nikolai Ivanov', salary: 850, increase: false, id: 18 },
          { name: 'Tomasz Zielinski', salary: 900, increase: true, id: 19 },
          { name: 'Carlos Fernández', salary: 950, increase: false, id: 20 },
          { name: 'Jonas Berg', salary: 1000, increase: true, id: 21 },
          { name: 'Lorenzo Romano', salary: 700, increase: false, id: 22 },
          { name: 'Jakub Svoboda', salary: 750, increase: true, id: 23 },
          { name: 'Rafael Costa', salary: 800, increase: false, id: 24 },
          { name: 'Mikkel Andersen', salary: 850, increase: true, id: 25 }
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after]; 

      // return {
      //   data: newArr
      // }

      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
  );
  }
};

export default App;
