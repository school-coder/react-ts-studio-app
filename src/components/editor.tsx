import React, {useEffect, useRef} from "react";
import {monaco} from "../index";


const MonacoEditor = () => {
    const editorRef = useRef(null);
    useEffect(() => {
        if (!editorRef.current) {
            return;
        }
        console.log('init')
        monaco.editor.create(editorRef.current, {
            value: 'console.log("Hello, world!")',
            language: 'javascript'
        });
    }, []);
    return <div ref={editorRef} style={{ height: '500px' }}></div>
};

export default MonacoEditor;
