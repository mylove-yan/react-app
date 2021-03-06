import React from 'react'
import {withRouter} from 'react-router-dom'
import {CommentIcon} from '@components/Icons'
import LikeButton from '@components/LikeButton'
import Tags from '@components/ShortStr'
import LazyImg from '@components/LazyImg'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import EmptyImage from '@assets/icons/post/entry_image_default.png'
import './style.less'

const PostItem = ({item, ...props}) => {
  let {
    title,
    content,
    commentsCount,
    originalUrl,
    screenshot,
    tags,
    user,
    objectId
  } = item
  let extraContent = (
    <Tags
      str={tags
        .slice(0, 2)
        .map(val => val.title)
        .join(' / ')}
      len={15}
    />
  )
  let url = originalUrl.split('https://juejin.im')[1]
  return (
    <div className="myEntry">
      <div className="entryAvatar">
        <AvatarBar
          user={user}
          appendContent={[<UserLink {...user} />]}
          extraContent={[extraContent]}
        />
      </div>
      <div
        className="entryBox"
        onClick={() => {
          props.history.push(url || '#')
        }}
      >
        <div className="text">
          <h3 className="title">{title}</h3>
          <small className="content">{content}</small>
        </div>
        {screenshot ? (
          <div className="screenshot">
            <LazyImg src={screenshot} alternate={EmptyImage} />
          </div>
        ) : null}
      </div>
      <div className="info">
        <div>
          <LikeButton currentId={objectId}/>
        </div>
        <div>
          <CommentIcon /> {commentsCount ? commentsCount : '评论'}
        </div>
      </div>
    </div>
  )
}

export default withRouter(PostItem)
