class TaskList extends React.Component {

    state = {
        tasks: []
    };

    componentDidMount() {
        this.setState({tasks: Data.tasks});
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
            />
        ));

        return (
            <ul className="task-list">
                {tasksComponents}
            </ul>
        );
    };
}

ReactDOM.render(<TaskList />,document.getElementById("root"));