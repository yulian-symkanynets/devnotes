// SnippetCard.tsx
import "./SnippetCard.css";
import "@fontsource/rubik/500.css";
import type { SnippetCardProps } from './SnippetCard.type';
import { use } from "react";

export default function SnippetCard(props: SnippetCardProps) {
   
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
                <span className={`badge badge-${props.language.toLowerCase()}`}>{props.language}</span>
            </div>

            <p className="card-subtitle">{props.description}</p>

            <div className="code-cont">
                <pre className="code">
                    {props.code}
                </pre>
            </div>

            <div className="tags">
                <span className="tag">#react</span>
                <span className="tag">#hooks</span>
                <span className="tag">#useeffect</span>
            </div>

            <div className="metadata">
                <div className="meta-left">
                    <span className="avatar">AJ</span>
                    <span className="author">Alice Johnson</span>
                </div>
                <div className="date">Jan 15</div>
            </div>
        </div>
    );
}
