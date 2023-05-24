import { Link } from "react-router-dom";

const EmployeeView = (props) => {
    const { employee, editTask, allTasks } = props;
    const assignedTasks = allTasks.filter(task => task.employeeId === employee.id);
    const availableTasks = allTasks.filter(task => task.employeeId !== employee.id);

    return (
        <div>
            <h1 style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>{employee.firstname}</h1>
            <p style={{ textAlign: "center" }}>Department: {employee.department}</p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div>
                    <h3>Assigned Tasks:</h3>
                    {assignedTasks.map(task => (
                        <div key={task.id} style={{ marginBottom: "16px" }}>
                            <Link to={`/task/${task.id}`}>
                                <h4>{task.description}</h4>
                            </Link>
                            <button onClick={() => editTask({ id: task.id, employeeId: null })}>x</button>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Available Tasks:</h3>
                    {availableTasks.map(task => (
                        <div key={task.id} style={{ marginBottom: "16px" }}>
                            <Link to={`/task/${task.id}`}>
                                <h4>{task.description}</h4>
                            </Link>
                            <button onClick={() => editTask({ id: task.id, employeeId: employee.id })}>+</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EmployeeView;
