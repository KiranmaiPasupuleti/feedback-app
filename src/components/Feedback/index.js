// Write your React code here.
import {Component} from 'react'
import EmojiItems from '../EmojiItems'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSubmitted: true,
  }

  onSubmission = () => {
    this.setState(prevState => ({
      isFeedbackSubmitted: !prevState.isFeedbackSubmitted,
    }))
  }

  render() {
    const {isFeedbackSubmitted} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {isFeedbackSubmitted ? (
          <div className="card-container">
            <h1>
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="ul-container">
              {emojis.map(eachEmoji => (
                <EmojiItems
                  key={eachEmoji.id}
                  eachEmojiDetails={eachEmoji}
                  changeWebPage={this.onSubmission}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="thankyou-card">
            <img src={loveEmojiUrl} className="love-img" alt="love emoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
