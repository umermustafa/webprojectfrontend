import { Link } from "react-router-dom";

const TaskView = (props) => {
    const { task } = props;
    return (
        <div>
            <h3>{task.description}</h3>
            <p>Priority: {task.prioritylevel}</p>
            <h3>Completion Status</h3>
            {task.completionstatus ? <p>{task.completionstatus}</p> : <p>Unknown</p>}
            <h3>Assigned Employee: </h3>
            {task.employee ? <p>{task.employee.firstname + " " + task.employee.lastname}</p> : <p>staff</p>}
            <Link to={`/edittask/${task.id}`}>
                Edit Task
            </Link>
            <br />
            <br />
            <Link to={`/tasks`}>
                View all Tasks
            </Link>
        </div>
    );
};

export default TaskView;

