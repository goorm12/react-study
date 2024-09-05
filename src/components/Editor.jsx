import { useState, useRef, useContext } from "react";
import "./Editor.css";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const $input = document.querySelector(".input");
    if (content === "") {
      $input.placeholder = "할 일 을 입력해주세요!";
      contentRef.current.focus();
      return;
    }

    onCreate(content);

    setContent("");
    $input.placeholder = "새로운 Todo...";
  };
  return (
    <div className="Editor">
      <form onSubmit={onSubmit}>
        <input
          ref={contentRef}
          value={content}
          onChange={onChangeContent}
          type="text"
          placeholder="새로운 Todo..."
          className="input"
        />
        <button>추가</button>
      </form>
    </div>
  );
};

export default Editor;
