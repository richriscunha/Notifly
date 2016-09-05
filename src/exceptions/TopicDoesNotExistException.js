export default class TopicDoesNotExistException {
  constructor(message) {
    this.message = message;
    this.name = 'TopicDoesNotExistException';
  }
}
