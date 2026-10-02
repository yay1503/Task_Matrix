function App() {

  return (
  <div className="bg-gray-700 p-3 rounded-md shadow-sm border border-gray-600 cursor-grab hover:ring-2 hover:ring-blue-500 transition">
    {/* Optional Tag Area */}
    <div className="flex mb-2">
       <span className="text-[10px] uppercase font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
         Setup
       </span>
    </div>
    
    {/* Task Title */}
    <p className="text-sm text-gray-100">
      Configure Redux Store
    </p>
  </div>
);
}

export default App
