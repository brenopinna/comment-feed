import { useState } from "react"
import { NewCommentForm } from "./components/NewCommentForm"
import { CommentSection } from "./components/CommentSection"

import Comment from "./types/comment"

function getComments() {
  const comments = localStorage.getItem("comments")
  return comments ? (JSON.parse(comments) as Comment[]) : []
}

export default function App() {
  const [comments, setComments] = useState(getComments)

  return (
    <div className="app">
      <div className="container">
        <h1>Seção de Comentários</h1>
        <NewCommentForm setComments={setComments} />
        <hr />
        <CommentSection comments={comments} />
      </div>
    </div>
  )
}
