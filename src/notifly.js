import TopicDoesNotExistException from './exceptions/TopicDoesNotExistException';

let _handlers = {};

/** A very minimal dependency-free observer pattern implementation. */
export default class Notifly {
    /**
     * Subscribe a handler to a specific topic.
     *
     * @param {string} topic - topic/channel to subscribe for.
     * @param {function} handler - callback responsible for handling data sent to the topic/channel.
     * @returns {function} remove - Provides a function to unsubscribe the subscribed handler.
     *
     * @example <caption>Creating a new subscription.</caption>
     * const handler = Notifly.subscribe('user.signup', (data) => {
     *      console.log(data.name); // John Doe
     * })
     *
     * @example <caption>unsubscribe a subscription.</caption>
     * handler.unsubscribe();
     */
    static subscribe(topic, handler) {
    	if (! _handlers.hasOwnProperty(topic))
    		_handlers[topic] = [];
    	const _index = _handlers[topic].push(handler) - 1;
    	return {
    		unsubscribe: () => {
    			_handlers[topic].splice(_index, 1);
    		}
    	}
    }
    /**
     * Notify a specific topic/channel with data.
     *
     * @param {string} topic - topic/channel to notify.
     * @param {object} data - data to provide to the callback function of the subscriber.
     *
     * @throws {TopicDoesNotExistException}

     * @example <caption>Notifying a specific topic/channel</caption>
     * Notifly.notify('user.signup', {"name":"John Doe"});
     */
    static notify(topic, data) {
        if (! this.topicExists(topic))
          throw new TopicDoesNotExistException(topic + ' topic does not exist.');
        const handlers = _handlers[topic];
        handlers.forEach((callback) => {
            callback(data);
        });
    }
    /**
     * Determines if a specific topic/channel exists.
     *
     * @param {string} topic - topic/channel to check.
     *
     * @returns {boolean}.
     *
     * @throws {TopicDoesNotExistException}
     * @private
     */
    static topicExists(topic) {
      const channel = _handlers[topic];
      return channel !== undefined ? true : false;
    }
}
