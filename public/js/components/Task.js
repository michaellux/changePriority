class Task extends React.Component {

    changePriority = (id,priority,e) => {
        this.props.onChangePriority(id,priority,e);
    };

    componentDidMount() {
        $('.ui.dropdown')
            .dropdown()
            ;
    }

    render() {

        const changeColorPriority = () => {

            let priorityColor = "";

            switch (this.props.priority) {
                case Data.priorities.LOW_PRIORITY:
                    priorityColor = 'ui blue button';
                    break;
                case Data.priorities.NORMAL_PRIORITY:
                    priorityColor = 'ui green button';
                    break;
                case Data.priorities.HIGH_PRIORITY:
                    priorityColor = 'ui red button';
                    break;
                default:
                    break;
            }

            return priorityColor;
        };

        return (
            <div className={"card task-list__card task task_normal  card horizontal " + changeColorPriority()}>
                <div className="card-stacked">
                    <div className="content task__content">
                        <h2 className="header task__title">{this.props.title}</h2>
                    </div>
                    <div className="ui selection dropdown task__action">
                        <input type="hidden" name="gender"/>
                        <i className="dropdown icon"></i>
                        <div className="default text">Change Priority</div>
                        <div className="menu action__change-priority">
                            <div className="item action__change-priority_low" data-value="0" onClick={(e) => this.changePriority(this.props.id, Data.priorities.LOW_PRIORITY, e)}>Low</div>
                            <div className="item action__change-priority_normal" data-value="1" onClick={(e) => this.changePriority(this.props.id, Data.priorities.NORMAL_PRIORITY, e)}>Normal</div>
                            <div className="item action__change-priority_high" data-value="2" onClick={(e) => this.changePriority(this.props.id, Data.priorities.HIGH_PRIORITY, e)}>High</div>
                        </div>
                    </div>
                </div>
                </div>
        );
    };
}

ReactDOM.render();