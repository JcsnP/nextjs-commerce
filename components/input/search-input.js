export default function SearchInput(props) {
  return (
    <div className="flex gap-2">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
        placeholder={props.placeholder}
      />
      <button className="border px-2 rounded-md bg-green-600 text-white hover:bg-green-700">
        Search
      </button>
    </div>
  );
}