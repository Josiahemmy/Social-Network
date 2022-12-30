import React, { useState } from "react";

function CommentForm({ onSubmit }) {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-2 font-semibold">
        Comment:
        <textarea
          className="w-full border-2 border-gray-600 p-2 rounded-lg"
          value={content}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
