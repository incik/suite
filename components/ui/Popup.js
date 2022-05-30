export const Popup = ({ query, setter }) => (
  <div className="absolute top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
    <div className="mt-3 text-center">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Exported schema
      </h3>
      <div className="mt-2 px-7 py-3">
        <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 h-72">
          {query.serialize()}
        </textarea>
      </div>
      <div className="items-center px-4 py-3">
        <button
          id="ok-btn"
          className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={() => setter(false)}
        >
          OK
        </button>
      </div>
    </div>
  </div>
);
