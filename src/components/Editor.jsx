// src/Editor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilos de Quill

const Editor = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const formats = [
    'header',
    { 'class': 'h1', 'tag': 'h1' },
    { 'class': 'h2', 'tag': 'h2' },
    { 'class': 'h3', 'tag': 'h3' },
    { 'class': 'h4', 'tag': 'h4' },
    { 'class': 'h5', 'tag': 'h5' },
    { 'class': 'h6', 'tag': 'h6' }
  ];
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'header': '4' }, { 'header': '5' }, { 'header': '6' }],
      [{ 'header': 1 }, { 'header': 2 }, { 'font': [] }],
      [{ 'size': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const addDiv = () => {
    const div = document.getElementById("content_editor");
    div.innerHTML = content;
    console.log(content)
  }

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        
      />
      <button onClick={addDiv}>Guardar en Firebase</button>
    <div id="content_editor"> 
    <h1>hola</h1>
    <p>adios</p>
    </div>
    </div>
  );
}


export default Editor;
