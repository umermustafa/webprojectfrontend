import { Link } from "react-router-dom";

const TaskView = (props) => {
    const { task } = props;
    return (
        <div>
            <h2>{task.description}</h2>
            {task.employee ? <h3>{task.employee.firstname + " " + task.employee.lastname}</h3> : <h3>staff</h3>}
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

