'use client';

import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/genz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.data);
      } else {
        setResponse(`Error: ${data.error}`);
      }
    } catch (error: any) {
      console.error(error);
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">AI Web Dev Agent</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4">
        <input
          type="text"
          placeholder="Enter your prompt"
          className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-80"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate
        </button>
      </form>
      {response && (
        <div className="prose max-w-3xl">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
