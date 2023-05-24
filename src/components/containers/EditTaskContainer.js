import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { fetchTaskThunk, editTaskThunk, fetchAllEmployeesThunk } from '../../store/thunks';

class EditTaskContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            prioritylevel: "",
            employeeId: null,
            redirect: false,
            redirectId: null,
            error: ""
        };
    }

    componentDidMount() {
        this.props.fetchTask(this.props.match.params.id);
        this.props.fetchEmployees();
        this.setState({
            description: this.props.task.description,
            prioritylevel: this.props.task.prioritylevel,
            employeeId: this.props.task.employeeId,
        });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSelectChange = event => {
        if (event.target.value === "staff") {
            this.setState({ employeeId: null });
        } else {
            this.setState({ employeeId: event.target.value })
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.description === "") {
            this.setState({ error: "Error: Description cannot be empty" });
            return;
        }

        //get new info for task from form input
        let task = {
            id: this.props.task.id,
            description: this.state.description,
            prioritylevel: this.state.prioritylevel,
            employeeId: this.state.employeeId
        };

        this.props.editTask(task);

        this.setState({
            redirect: true,
            redirectId: this.props.task.id
        });

    }

    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null });

    }

    render() {
        let { task, allEmployees, editTask, fetchTask } = this.props;
        let assignedEmployee = task.employeeId;

        let otherEmployees = allEmployees.filter(employee => employee.id !== assignedEmployee);

        if (this.state.redirect) {
            return (<Redirect to={`/task/${this.state.redirectId}`} />)
        }

        return (
            <div>
                <form style={{ textAlign: 'center' }} onSubmit={(e) => this.handleSubmit(e)}>
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
                    <input type="text" name="description" value={this.state.description || ''} placeholder={task.description} onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Priority Level: </label>
                    <input type="text" name="prioritylevel" value={this.state.prioritylevel || ''} placeholder={task.prioritylevel} onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />

                    <select onChange={(e) => this.handleSelectChange(e)}>
                        {task.employee !== null ?
                            <option value={task.employeeId}>{task.employee.firstname + " (current)"}</option>
                            : <option value="staff">Staff</option>
                        }
                        {otherEmployees.map(employee => {
                            return (
                                <option value={employee.id} key={employee.id}>{employee.firstname}</option>
                            )
                        })}
                        {task.employee !== null && <option value="staff">Staff</option>}
                    </select>

                    <button type="submit">
                        Submit
                    </button>

                </form>
                {this.state.error !== "" && <p>{this.state.error}</p>}

                {task.employeeId !== null ?
                    <div> Current Employee Assigned:
                        <Link to={`/employee/${task.employeeId}`}>{task.employee.firstname}</Link>
                        <button onClick={async () => { await editTask({ id: task.id, employeeId: null }); fetchTask(task.id) }}>Unassign</button>
                    </div>
                    : <div> No employee currently assigned </div>
                }

                <div> Other Employees
                    {otherEmployees.map(employee => {
                        return (
                            <div key={employee.id}>
                                <Link to={`/employee/${employee.id}`}>
                                    <h4>{employee.firstname}</h4>
                                </Link>
                                <button onClick={async () => { await editTask({ id: task.id, employeeId: employee.id }); fetchTask(task.id) }}>Assign this Employee</button>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
        task: state.task,
        allEmployees: state.allEmployees
    };
};

const mapDispatch = (dispatch) => {
    return ({
        editTask: (task) => dispatch(editTaskThunk(task)),
        fetchTask: (id) => dispatch(fetchTaskThunk(id)),
        fetchEmployees: () => dispatch(fetchAllEmployeesThunk()),

    })
}

export default connect(mapState, mapDispatch)(EditTaskContainer);