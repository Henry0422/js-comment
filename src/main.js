import React from 'react';
import './main.css';
import icon from './user-icon.png';
import { Reply } from './reply';
import { ReplyBox } from './replyBox';
import { AllReplies } from './allReplies';
import TimeAgo from 'react-timeago';

export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Brad',
            title: 'AUTHOR',
            content: `So what the German automaker is likely to focus on today is the bigger picture.
                This will be the first time we see the Taycan free from any prototype bodywork.`,
            isReply: false,
            replies: 21,
            isAllReplies: false,
            upvote: 123,
            downvote: 0,
            fontColor: 'silver',
            date: new Date()
        }

        this.handleClickReply = this.handleClickReply.bind(this);
        this.handleClickAllReplies = this.handleClickAllReplies.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.upvoteEvent = this.upvoteEvent.bind(this);
        this.downvoteEvent = this.downvoteEvent.bind(this);
    }

    handleClickReply() {
        this.setState(state => ({
            isReply: !state.isReply
        }));
    }

    handleClickAllReplies() {
        this.setState(state => ({
            isAllReplies: !state.isAllReplies
        }));
    }

    mouseEnter() {
        this.setState({
            fontColor : 'dimgrey'
        });
    }

    mouseLeave() {
        this.setState({
            fontColor : 'silver'
        });
    }

    upvoteEvent() {
        this.setState({
            upvote : this.state.upvote + 1
        });
    }

    downvoteEvent() {
        this.setState({
            downvote : this.state.downvote + 1
        });
    }

    render() {      
      return (
        <div className="comment" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <div className="left-part">
                <img src={icon} className="user-icon" alt="icon" />
            </div>
            <div className="main-part">
                <div className="title">
                    <span className="name">{this.state.name}</span>
                    <span className="status-box">{this.state.title}</span>
                    <span className="time-ago">&nbsp;&bull;&nbsp;<TimeAgo date={this.state.date} /></span>
                </div>
                <div className="content">
                    <p>{this.state.content}</p>
                </div>
                <Reply
                    fontColor={this.state.fontColor}
                    replies={this.state.replies}
                    upvote={this.state.upvote}
                    downvote={this.state.downvote}
                    upvoteEvent={this.upvoteEvent}
                    downvoteEvent={this.downvoteEvent}
                    handleClickReply={this.handleClickReply}
                    handleClickAllReplies={this.handleClickAllReplies}
                />
                <div>
                    { this.state.isReply ? <ReplyBox /> : null }
                </div>
                <div>
                    { this.state.isAllReplies ? <AllReplies /> : null }
                </div>
            </div>
        </div>
      );
    }
}
   