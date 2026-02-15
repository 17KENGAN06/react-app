import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise, onSalaryChange }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        onDelete={() => onDelete(id)}
        {...itemProps}
        key={id}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
        onSalaryChange={(salary) => onSalaryChange(id, salary)}
      />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
