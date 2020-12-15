const React = require('react')
const ReactDOM = require('react-dom')
const faker = require('faker')
const CommentDetail = require('./commentDetail')
const ApprovalCard = require('./ApprovalCard')

const App = () => {
    return (
        <div className="ui container components" >
            <ApprovalCard>
            <CommentDetail 
                author = "Mateen"
                time = "Today at 4:00PM"
                faker = {faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author = "Riaz"
                time = "Today at 5:00PM"
                faker = {faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author = "Aziz"
                time = "Today at 5:01PM"
                faker = {faker.image.avatar()}
            />
            </ApprovalCard>
        </div>
    )
}

const App2 = () => {
    return (
        <div>
            <ApprovalCard>
            <Message 
                header = "Message 1"
                para = "Para 1"
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author = "Aziz"
                time = "Today at 5:01PM"
                faker = {faker.image.avatar()}
            />
            </ApprovalCard>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="ui message">
            <div className="header">
                {props.header}
            </div>
            <p className="para">{props.para}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
