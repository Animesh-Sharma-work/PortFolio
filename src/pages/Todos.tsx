import React, { useState } from 'react';
import { Plus, Trash2, Check, Clock } from 'lucide-react';
import { useTodos } from '../context/TodoContext';

const Todos: React.FC = () => {
  const { activeTodos, completedTodos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [newTodo, setNewTodo] = useState('');
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Todo Management</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Organize your tasks and boost productivity</p>
        </div>

        {/* Add Todo Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
            />
            <button
              type="submit"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              <Plus className="w-5 h-5" />
              <span>Add Task</span>
            </button>
          </form>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{activeTodos.length}</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Active Tasks</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{completedTodos.length}</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
            <button
              onClick={() => setActiveTab('active')}
              className={`flex-1 px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'active'
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Active Tasks ({activeTodos.length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex-1 px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'completed'
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-b-2 border-green-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Completed ({completedTodos.length})
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'active' && (
              <div className="space-y-4">
                {activeTodos.length === 0 ? (
                  <div className="text-center py-12">
                    <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">No active tasks. Add one above!</p>
                  </div>
                ) : (
                  activeTodos.map((todo) => (
                    <div
                      key={todo.id}
                      className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <button
                        onClick={() => toggleTodo(todo.id)}
                        className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:border-green-500 transition-colors flex-shrink-0 mt-0.5 sm:mt-0"
                      />
                      <div className="flex-1">
                        <p className="text-sm sm:text-base text-gray-900 dark:text-white break-words">{todo.text}</p>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          Created {formatDate(todo.createdAt)}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="p-1 sm:p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'completed' && (
              <div className="space-y-4">
                {completedTodos.length === 0 ? (
                  <div className="text-center py-12">
                    <Check className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">No completed tasks yet.</p>
                  </div>
                ) : (
                  completedTodos.map((todo) => (
                    <div
                      key={todo.id}
                      className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-green-50 dark:bg-green-900/10"
                    >
                      <button
                        onClick={() => toggleTodo(todo.id)}
                        className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 border-2 border-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors flex-shrink-0 mt-0.5 sm:mt-0"
                      >
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </button>
                      <div className="flex-1">
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 line-through break-words">{todo.text}</p>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          Completed {todo.completedAt && formatDate(todo.completedAt)}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="p-1 sm:p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;