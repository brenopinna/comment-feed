import { FormEvent, useState } from "react"

import Comment from "../types/comment"

interface NewCommentFormProps {
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>
}

export function NewCommentForm({ setComments }: NewCommentFormProps) {
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  function addComment(comment: Comment) {
    setComments((comments) => {
      const newCommentsState = [...comments, comment]
      localStorage.setItem("comments", JSON.stringify(newCommentsState))
      return newCommentsState
    })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setEmail("")
    setComment("")
    const newComment: Comment = {
      email,
      comment,
      createdAt: new Date().toDateString(),
    }
    addComment(newComment)
  }

  return (
    <form className="newCommentForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div>
        <label htmlFor="comment">Comentário</label>
        <textarea
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="comment"
          id="comment"
        />
      </div>
      <button type="submit">Enviar comentário</button>
    </form>
  )
}
