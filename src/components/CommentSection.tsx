import dayjs from "dayjs"
import ptBr from "dayjs/locale/pt-br"
dayjs.locale(ptBr)

import Comment from "../types/comment"

interface CommentSectionProps {
  comments: Comment[]
}

export function CommentSection({ comments }: CommentSectionProps) {
  return (
    <div className="commentSection">
      {comments.length ? (
        comments.map(({ email, comment, createdAt }: Comment) => {
          const formattedDate = dayjs(createdAt).format("[Em ]DD/MM/YYYY[, ]HH:mm:ss")
          return (
            <div className="comment" key={createdAt}>
              <p className="email">{email}</p>
              <p className="date">{formattedDate}</p>
              <p>{comment}</p>
            </div>
          )
        })
      ) : (
        <p>Seja o primeiro a comentar!</p>
      )}
    </div>
  )
}
