/**
 * Created by akk on 1/23/14.
 */

/** Socket.io instantiation **/
var Chat=function(socket){
  this.socket=socket;
};

/** send chat messages **/
Chat.prototype.sendMessage=function(room,text){
  var message={
      room:room,
      text:text
  };
    this.socket.emit('message',message);
};

/** changing rooms **/
Chat.prototype.changeRoom=function(room){
    this.socket.emit('join',{
       newRoom:room
    });
}

/** Processing Chat Commands **/
Chat.prototype.processCommand=function(command){
  var words=command.split(' ');
    var command=words[0].substring(1,words[0].length).toLowerCase();
    var message=false;

    switch(command){
        case 'join':
            words.shift();
            var room=words.join(' ');
            this.changeRoom(room);
            break;
        case 'nick':
            words.shift();
            var name=words.join(' ');
            this.socket.email('nameAttempt',name);
            break;
        default:
            message='Unrecognized command.';
            break;
    }
    return message;
};
