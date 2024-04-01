export default function Chat() {
  return (
    <div className="flex h-screen">
      <div className="bg-white w-1/3">contacts</div>

      <div className="flex flex-col bg-blue-50 w-2/3 p-2">
        <div className="flex-grow">
          messages with selected person
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="type your message here"
            className="bg-white flex-grow border p-2 rounded-sm "
          />
          <button className="bg-blue-500 p-2 text-white rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
