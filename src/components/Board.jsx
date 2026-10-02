import React from 'react'
import { useSelector } from 'react-redux';
import Column from './Column';

function Board() {

    const activeBoard = useSelector((state) => {
        return state.board.columns[columnIds]
    })

    return (
    <div className="min-h-screen bg-gray-900 text-white p-6 overflow-x-auto">
        <header className="mb-8">
        <h1 className="text-2xl font-bold"> {activeBoard.title} </h1>
        </header>
        
        {/* This flex container holds all columns side-by-side */}
        <div className="flex items-start space-x-6">
        
        {
            activeBoard.columnIds.map((id) => (
                <Column key = {id}  columnId = {id} />
            ))
        }
        
        </div>
    </div>
    );
}

export default Board