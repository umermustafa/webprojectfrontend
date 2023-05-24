import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
    HomePageContainer,
    EmployeeContainer,
    TaskContainer,
    AllEmployeesContainer,
    AllTasksContainer,
    NewTaskContainer,
    EditTaskContainer
} from './components/containers';


const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePageContainer} />
                <Route exact path="/employees" component={AllEmployeesContainer} />
                <Route exact path="/employee/:id" component={EmployeeContainer} />
                <Route exact path="/tasks" component={AllTasksContainer} />
                <Route exact path="/newtask" component={NewTaskContainer} />
                <Route exact path="/task/:id" component={TaskContainer} />
                <Route exact path="/edittask/:id" component={EditTaskContainer} />

            </Switch>
        </div>
    );
}

export default App;

