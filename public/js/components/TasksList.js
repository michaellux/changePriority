class TaskList extends React.Component {

    state = {
        tasks: []
    };

    componentDidMount() {
        this.setState({tasks: Data.tasks});

        
    }

    sortTasks = (taskId,priority) => {
        const nextTasks = this.state.tasks.map((task) => {
            if(task.id === taskId) {
                return Object.assign({}, task, {
                   priority: priority
                });
            } else {
                return task;
            }
        });
        this.setState({
            tasks: nextTasks,
        });
    }

    render() {

        const tasks = this.state.tasks.sort((a, b) => (
            b.priority - a.priority
        ));

        const tasksComponents = tasks.map((task) =>
        (
            <Task
                key={'task-' + task.id}
                id={task.id}
                title={task.title}
                priority={task.priority}
                onChangePriority={this.sortTasks}
            />
        ));

        return (
            <ul className="task-list">
                {tasksComponents}
            </ul>
        );
    }
}

ReactDOM.render(<TaskList />,document.getElementById("root"));