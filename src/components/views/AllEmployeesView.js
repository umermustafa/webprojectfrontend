import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
    if (!props.allEmployees.length) {
        return <div>There are no employees.</div>
    }
    return (
        <div>
            {props.allEmployees.map((employee) => {
                let name = employee.firstname + " " + employee.lastname;
                return (
                    <div key={employee.id} >
                        <Link to={`/employee/${employee.id}`}>
                            <h3>{name}</h3>
                        </Link>
                        <p>{employee.department}</p>
                    </div>
                );
            })}
        </div>
    );
};

AllEmployeesView.propTypes = {
    allEmployees: PropTypes.array.isRequired
}


export default AllEmployeesView;