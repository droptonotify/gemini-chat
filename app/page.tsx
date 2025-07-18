'use client';

import { useCompletion } from 'ai/react';

export default function Completion() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: '/api/code-completion',
  });

  return (
    <div className="mx-auto w-full max-w-lg md:max-w-2xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 flex flex-col stretch">
      <form onSubmit={handleSubmit} className="w-full">
        <textarea
          className="w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Enter your code here..."
          onChange={handleInputChange}
        />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Complete Code
        </button>
      </form>
      {completion && (
        <div className="whitespace-pre-wrap my-6">{completion}</div>
      )}
    </div>
  );
}
