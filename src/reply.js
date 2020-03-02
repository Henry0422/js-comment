import React from 'react';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export class Reply extends React.Component {
    render() {
        return (
            <div className="reply">
                <Button onClick={this.props.handleClickReply} style={{color: this.props.fontColor}}>
                    REPLY
                </Button>
                <Button onClick={this.props.handleClickAllReplies} style={{color: this.props.fontColor}}>
                    {this.props.replies} REPLIES
                </Button>
                <Button onClick={this.props.upvoteEvent} style={{color: this.props.fontColor}}>
                    <ExpandLessIcon /> {this.props.upvote}
                </Button>
                <Button onClick={this.props.downvoteEvent} style={{color: this.props.fontColor}}>
                    <ExpandMoreIcon /> {this.props.downvote}
                </Button>
            </div>
        );
      }
}