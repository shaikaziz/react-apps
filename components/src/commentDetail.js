const React = require('react')
const faker = require('faker')

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.faker}/>
            </a>
            <div>
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>    
        </div>
    ) 
}

module.exports = CommentDetail