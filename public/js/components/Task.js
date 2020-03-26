class Task extends React.Component {

    render() {

        const changeColorPriority = () => {

            console.log(Data.priorities);

            let priorityColor = "";

            switch (this.props.priority) {
                case Data.priorities.LOW_PRIORITY:
                    priorityColor = 'light-blue darken-2';
                    break;
                case Data.priorities.NORMAL_PRIORITY:
                    priorityColor = 'green darken-2';
                    break;
                case Data.priorities.HIGH_PRIORITY:
                    priorityColor = 'deep-orange darken-2';
                    break;
                default:
                    break;
            }

            console.log(this.props.priority);

            return priorityColor;
        };

        return (
            <div className={"task-list__card task task_normal  card horizontal " + changeColorPriority()}>
                <div className="card-stacked">
                    <div className="card-content task__content">
                        <h2 className="task__title">{this.props.title}</h2>
                    </div>
                    <div className="card-action task__action">
                        <ul id="dropdown2" className="dropdown-content action__change-priority">
                            <li><a href="#!">one<span className="badge">1</span></a></li>
                            <li><a href="#!">two<span className="new badge">1</span></a></li>
                            <li><a href="#!">three</a></li>
                        </ul>
                        <a className="btn dropdown-trigger change-priority__button" href="#!" data-target="dropdown2">Change the priority<i className="material-icons right">arrow_drop_down</i></a>
                    </div>
                </div>
            </div>
        );
    };
}

ReactDOM.render();