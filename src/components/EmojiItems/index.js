import './index.css'

const EmojiItems = props => {
  const {changeWebPage, eachEmojiDetails} = props
  const {name, imageUrl} = eachEmojiDetails

  return (
    <li className="list-container">
      <img
        className="emoji-size"
        src={imageUrl}
        alt={name}
        onClick={changeWebPage}
      />
      <p>{name}</p>
    </li>
  )
}

export default EmojiItems
