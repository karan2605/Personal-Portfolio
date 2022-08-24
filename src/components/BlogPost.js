import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'markdown-to-jsx';


export default function BlogPost(props) {
    const [blogPost, setPost] = useState('');
    const { open, blog } = props;

    useEffect(() => {
        import(`../content/blog/${blog}/index.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });
    
    return (
       <> 
       {open && <ReactMarkdown escapeHtml={false} className="prose-neutral lg:prose-xl prose-img:rounded-xl prose-headings:bold 
       prose-a:text-blue-600 prose-h2:font-semibold prose-h1:font-semibold prose-h3:italic prose-blockquote:italic
       prose-ol:list-decimal prose-ul:list-disc prose-p: lineHeight-40px" children={blogPost} />} </>
    )
}