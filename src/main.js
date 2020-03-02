import React from 'react';
import './main.css';
import icon from './user-icon.png';
import { Reply } from './reply';
import { AllReplies } from './allReplies';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TimeAgo from 'react-timeago'

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
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
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

    upvote() {
        this.setState({
            upvote : this.state.upvote + 1
        });
    }

    downvote() {
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
                <div className="reply">
                    <Button onClick={this.handleClickReply} style={{color: this.state.fontColor}}>REPLY</Button>
                    <Button onClick={this.handleClickAllReplies} style={{color: this.state.fontColor}}>{this.state.replies} REPLIES</Button>
                    <Button onClick={this.upvote} style={{color: this.state.fontColor}}><ExpandLessIcon /> {this.state.upvote}</Button>
                    <Button onClick={this.downvote} style={{color: this.state.fontColor}}><ExpandMoreIcon /> {this.state.downvote}</Button>
                </div>
                <div>
                    { this.state.isReply ? <Reply /> : null }
                </div>
                <div>
                    { this.state.isAllReplies ? <AllReplies /> : null }
                </div>
            </div>
        </div>
      );
    }
}
   