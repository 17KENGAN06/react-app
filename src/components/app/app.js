import './app.css'

import '../app-filter/app-filter'
import '../app-info/app-info'
import '../employees-add-form/employees-add-form'
import '../employees-list/employees-list'
import '../employees-list-item/employees-list-item'
import '../search-panel/search-panel'

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