# crossy [![Support this project][donate-now]][paypal-donations]

Modify cross-browser CSS properties with one JavaScript call.

## Installation

```sh
$ npm i --save crossy
```

## Example

```js
// Dependencies
var Crossy = require("crossy");

// Rotate .some-class to 42deg
Crossy(".some-class", "transform", "rotate(42deg)");
```

## Documentation

### `Crossy(elm, prop, value)`
Modify cross-browser CSS properties.

#### Params
- **String|Element|NodeList** `elm`: A stringified query selector, an element or a node list.
- **String** `prop`: The CSS property.
- **String** `value`: The CSS property value.

#### Return
- **NodeList|Array** The selected elements.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md