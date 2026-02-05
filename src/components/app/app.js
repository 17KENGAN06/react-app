import './app.css'

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeesAddForm from'../employees-add-form/employees-add-form'
import EmployeesList from '../employees-list/employees-list'
import EmployeesListItem from '../employees-list-item/employees-list-item'
import SearchPanel from '../search-panel/search-panel'

const App = () => {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
    
    );
}

export default App;