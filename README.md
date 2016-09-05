# Notifly

A very minimal dependency-free observer pattern implementation.


----------

## Installation

The library may be installed from NPM using the following command:

  npm install --save Notifly

Or, if you would rather -- it may be included directly inline within your HTML document.

    <script src="./dist/notifly.min.js></script>

----------

## API Methods


### subscribe(topic, handler)

Subscribe a handler to a specific topic.

**Parameters**

-   `topic` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** topic/channel to subscribe for.
-   `handler` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** callback responsible for handling data sent to the topic/channel.

**Examples**

_Creating a new subscription._

```javascript
const handler = Notifly.subscribe('user.signup', (data) => {
     console.log(data.name); // John Doe
})
```

_Unsubscribe a subscription._

```javascript
handler.unsubscribe();
```

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** unsubscribe - Provides a function to unsubscribe the subscribed handler.


----------


### notify(topic, data)

Notify a specific topic/channel with data.

**Parameters**

-   `topic` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** topic/channel to notify.
-   `data` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** data to provide to the callback function of the subscriber.

**Examples**

_Notifying a specific topic/channel_

```javascript
try {
 Notifly.notify('user.signup', {"name":"John Doe"});
} catch (error) {
 console.log(error.name); // TopicDoesNotExistException
 console.log(error.message); // user.signup topic does not exist.
}
```

-   Throws **TopicDoesNotExistException**
