// src/Editor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilos de Quill
import { useFestivalContext } from '../context/FestivalContext';

const Editor = () => {

  const {contentQuill,setContentQuill} = useFestivalContext()
 
  const toolbarOptions = [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline'],

    ['link'],
    ['clean'] // Elimina todas las opciones restantes excepto "Limpiar formato"
  ];

  return (
    <div className="w-full">
      <ReactQuill
       modules={{
          toolbar: toolbarOptions
        }}
        theme="snow"
        value={contentQuill}
        onChange={setContentQuill}
      />
    </div>
  );
};


export default Editor;
