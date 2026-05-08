import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import API from '../../../../Axios'

export default function UserComent({ comment, setcomments }) {

  const [loadingId, setLoadingId] = useState(null)

  const data_save = JSON.parse(localStorage.getItem("data"))
  const id = data_save?.id

  const Token = JSON.parse(localStorage.getItem("Token"))
  const { Group_code } = useParams()

  const deleteCommithandler = (CommentId) => {
    if (!CommentId) return

    setLoadingId(CommentId)

    API.delete(
      `Groups/delete_comment/${CommentId}/?Group_code=%23${Group_code}`,
      {
        headers: {
          Authorization: `Token ${Token}`
        }
      }
    )
      .then(() => {
        setcomments(prev =>
          prev.filter(item => {
            const itemId = item.Comment_id || item.comment_id
            return itemId !== CommentId
          })
        )

        setLoadingId(null)
      })
      .catch(() => {
        setLoadingId(null)
      })
  }

  return (
    <div className='User-Comment'>

      {comment?.map((item_comment) => {

        const CommentId = item_comment.Comment_id || item_comment.comment_id

        return (
          <div className='item-coment-for-each-user' key={CommentId}>

            <div className='Profile-User-Comment'>
              <Link to={`/Profile/${item_comment.user_id}`}>
                <img
                  className='Imag-profile-comment'
                  src={item_comment.Profile_image}
                  alt=""
                />
              </Link>
            </div>

            <div className='item-coment-for-user'>

              <Link to={`/Profile/${item_comment.user_id}`}>
                <h3>{item_comment.member_name}</h3>
              </Link>

              <p>{item_comment.content}</p>

              {
                loadingId === CommentId ? (
                  <div className='contener-loding-delete-comment'>
                    <div className="loding-delete-comment"></div>
                  </div>
                ) : (
                  id === item_comment.user_id && (
                    <p
                      className='Delete-commit'
                      onClick={() => deleteCommithandler(CommentId)}
                    >
                      Delete
                    </p>
                  )
                )
              }

            </div>

          </div>
        )
      })}

    </div>
  )
}