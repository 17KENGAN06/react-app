import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.name.length < 3 || this.state.salary.length < 3) {
      console.log('Less than 3 for name and 6 for salary ');
      return;
    }

    if (this.state.name.length > 50 || this.state.salary.length > 6) {
      console.log('More than 50 for name and 6 for salary');
      return;
    }

    if (!this.state.name || !this.state.salary) {
      console.log('Print something');
      return;
    }

    this.props.onAdd(this.state.name, this.state.salary);

    this.setState({
      name: '',
      salary: '',
    });
  };

  render() {
    // JSX

    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What's his name?"
            name="name"
            value={this.state.name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
            name="salary"
            value={this.state.salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
