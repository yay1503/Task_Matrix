import React from 'react'
import { useSelector } from 'react-redux';

function TaskCard() {

    const tasks = useSelector((state) => state.board.tasks[taskId])

    return (
    <div className="bg-gray-700 p-3 rounded-md shadow-sm border border-gray-600 cursor-grab hover:ring-2 hover:ring-blue-500 transition">
        {/* Optional Tag Area */}
        {tasks.tag && (<div className="flex mb-2">
        <span className="text-[10px] uppercase font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
            {tasks.tag}
        </span>
        </div>)}
        {/* Task Title */}
        <p className="text-sm text-gray-100">
            {tasks.title}
        </p>
    </div>
    );
}

export default TaskCard