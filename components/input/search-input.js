import { Fragment } from "react";

export default function SearchInput() {
  return (
    <div className="flex gap-2">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
        placeholder="Lockheed Martin F-22 Raptor"
      />
      <button className="border px-2 rounded-md bg-green-600 text-white">
        Search
      </button>
    </div>
  );
}