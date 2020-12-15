const React = require('react')
const CommentDetail = require('./commentDetail')
const faker = require('faker')

const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
            {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div> 
                    {/* <div className="ui basic red card">Reject</div> */}
                </div>
            </div>
        </div>
    )
}

module.exports = ApprovalCard