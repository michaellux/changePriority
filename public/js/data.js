window.Data = (function () {

    const priorities = { "LOW_PRIORITY": 0, "NORMAL_PRIORITY": 1, "HIGH_PRIORITY": 2};
    Object.freeze(priorities);

    const tasks = [
        {
            id: 1,
            title: 'Buy bread',
            priority: priorities.LOW_PRIORITY
        },
        {
            id: 2,
            title: 'Wash car',
            priority: priorities.NORMAL_PRIORITY
        },
        {
            id: 3,
            title: 'Pay the bills',
            priority: priorities.HIGH_PRIORITY
        },
        {
            id: 4,
            title: 'Call Alice',
            priority: priorities.LOW_PRIORITY
        },
    ];

    return { tasks: tasks, priorities: priorities };

}());