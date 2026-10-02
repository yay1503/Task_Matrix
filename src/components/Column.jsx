import React from 'react'
import { useSelector } from 'react-redux';

function Column() {

    const column = useSelector((state) => state.board.columns[columnIds])

    return (
    <div className="bg-gray-800 rounded-lg w-80 shrink-0 p-4 flex flex-col max-h-[80vh]">
        {/* Column Header */}
        <div className="flex justify-between items-center mb-4 px-1">
        <h2 className="font-semibold text-gray-200">{column.title}</h2>
        <span className="bg-gray-700 text-gray-300 text-sm px-2 py-1 rounded">
            {column.taskIds.length} 
        </span>
        </div>

        {/* Scrollable Task List Area */}
        <div className="flex-1 overflow-y-auto space-y-3 pb-2 custom-scrollbar">
        
        {
            column.taskIds.map((taskId) => (
                <TaskCard key = {taskId} taskId = {taskId} />
            ))
        }
        
        </div>

        {/* Add Task Button Placeholder */}
        <button className="mt-3 text-gray-400 hover:text-white flex items-center p-2 rounded hover:bg-gray-700 transition w-full text-left text-sm">
        + Add a task
        </button>
    </div>
);
  
}

export default Column