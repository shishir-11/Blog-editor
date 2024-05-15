import React, { useEffect, useState } from 'react';
import './EditPage.css'
import Editor from '../components/Editor';
import parse from 'html-react-parser';
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import ReactEmbedGist from 'react-embed-gist';


const EditPage = () => {
    const [content,setContent] = useState('');
    
    function handleEditor(received) {
        setContent(content + received);
        const nodes = document.querySelectorAll('pre');
        nodes.forEach(node=>hljs.highlightBlock(node))
      }
    
    function handleCode(){
        const nodes = document.querySelectorAll('pre');
        nodes.forEach(node=>hljs.highlightBlock(node))
    }
    
    return (
        <div id="edit-page">
            <div className='parsed-content'>
                {parse(content)}
            </div>

            <ReactEmbedGist gist="msaracevic/5d757e2fc72482a9a4a439969500c2eb"
                wrapperClass="gist__bash"
                loadingClass="loading__screen"
                titleClass="gist__title"
                file=".bash_profile.sh"/>
                
            <button onClick={handleCode}>Render Code</button>
            <Editor handleEditor={handleEditor}/>
        </div>
    );
}

export default EditPage;
