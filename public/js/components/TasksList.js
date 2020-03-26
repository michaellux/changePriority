class TaskList extends React.Component {

    state = {
        tasks: []
    };

    componentDidMount() {
        this.setState({tasks: Data.tasks});
    }

    render() {

        const tasksComponents = this.state.tasks.map((task) =>
        (
            <Task
                key={'task-' + task.id}
                id={task.id}
                title={task.title}
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