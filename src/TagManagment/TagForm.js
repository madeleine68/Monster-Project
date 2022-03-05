import { useState } from "react";
import "./TagForm.css";

function TagForm({ addTag, index }) {
  const [tagInput, setTagInput] = useState([]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTag(tagInput, index);
          setTagInput("");
        }}
      >
        <input
          className="input-for-tag"
          type="text"
          value={tagInput}
          placeholder="Add a Tag"
          onChange={(e) => {
            setTagInput(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default TagForm;