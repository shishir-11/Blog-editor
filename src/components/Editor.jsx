import { useState} from "react";
import QuillEditor from "react-quill";
import hljs from 'highlight.js'
import 'highlight.js/styles/obsidian.css'

import "react-quill/dist/quill.snow.css";
import "./Editor.css";


const toolbarOptions = [
  [],
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  [],
  ['link', 'image', 'video'],
  [],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [],
  [{ 'script': 'sub' }, { 'script': 'super' }],   
  [],
  [{ 'header': [1, 2, 3, 4, 5, 6,false] }],
  [],
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [],
  ['clean','code-block']                                         // remove formatting button
];


const modules = {
  toolbar:{
    container:toolbarOptions
  }
};

const Editor = (props) => {
  const [value, setValue] = useState("");

  function handleClick(){
    props.handleEditor(value);
    setValue('')
  }

  return (
    <div id='edit-area'>
      <QuillEditor
        // ref={quillRef}
        className={`editor`}
        theme="snow"
        value={value}
        modules={modules}
        onChange={setValue}
      />
      <button className="submit-button" onClick={handleClick}>Done</button>
    </div>
  );
};

export default Editor;
