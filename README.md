# angular-scrolling-waypoint

A simple but nifty Angular 1.4.x directive to execute custom actions upon scrolling down to the vertical waypoint where the directive is instanced in the page.

## Description

So this is (oh my, another) directive to handle and execute custom actions when the user scrolls the window so the directive enters the viewport. The most common use case for this directive is to provide interactive functionalities such as infinite scrolling or display certain widgets once the user scrolls to the desired vertical waypoint.

You can instance as many directives as you wish within your views, and the behaviors can be handled either by binding custom controller methods when instancing the component or by listening to custom events defined therein. On top of that we can configure the directive to wait for a click first to be made before triggering the linked behaviors. This is specially useful for infinite scrolling scenarios where we might want the end user to click on a "load more" button for instance.

## Usage

### Build and installation

A ready-made build file is already available at `build/angular-scrolling-waypoint.min.js`. You can tweak and build your own version by hacking the source file at `src/angular-scrolling-waypoint.js` and then running `gulp build`, which will require you to install Gulp first onto your system and all the required dependencies for this particular implementation, as follows:

```bash
$ npm install -g gulp
$ npm install
$ gulp build
```

### Implementing the directive in your views

You can instance the directive in your code at its most simple incarnation as follows:

```html
<p>Ipsa provident iusto odit, est natus voluptatum voluptatem aliquam velit sapiente
facere architecto maxime ab, quisquam totam tempora, fugiat eveniet odio ex! Quam,
a, aut? Qui voluptatum voluptatibus, blanditiis expedita?</p>
<p>Optio magnam numquam officiis ex. Cupiditate fuga ipsa, quasi hic voluptate
provident suscipit officia iure qui natus voluptatibus tempore! Incidunt
mollitia animi doloribus, porro aut dignissimos sunt in delectus, soluta!</p>

...
<when-scrolled-to-this scrolling-complete-handler="doSomething(event)" />
```

where `doSomething(event)` is a method in your controller (or parent) scope. The directive contents do support transclusion and you can also instance the directive in its attribute form, like this:

```html
<p>Optio magnam numquam officiis ex. Cupiditate fuga ipsa, quasi hic voluptate
provident suscipit officia iure qui natus voluptatibus tempore! Incidunt
mollitia animi doloribus, porro aut dignissimos sunt in delectus, soluta!</p>
...
<p when-scrolled-to-this scrolling-complete-handler="doSomething(event)">
Something happens or any other {{text}} fetched straight from your controller scope
</p>
```

Other optional attributes available are:

* **scrolling-complete-event**: We can trigger any handler of your choice by means of the optional `scrolling-complete-handler` or you can just define any named event of your choice in this attribute. Such event will be triggered as soon as the directive enters the viewport.
* **initialize-on-click**: Sometimes you don't want the component to start emitting events or executing methods until the user clicks on its contents for whatever reason, regardless what contents we render inside (p.eg. forcing the user to click on a "load more" button at least once to trigger any behavior).
* **is-enabled**: We can enable or disable programmatically the directive from its parent scope by setting this parameter to `true` (default) or `false`.
* **on-trigger-class**: We can assign a class name to the directive wrapper tag which will only be applied when the component is scrolled within the viewport, and then removed when the component is scrolled outside the viewport. This might be leveraged for swapping contents, changing layouts, etc.

### A note about the (missing) unit and E2E tests

While Karma and protractor are very powerful testing tools, implementing mocks for the $window object (which is required to stub the scrolling behavior) is certainly a painful in the ass in Angular 1.x, and the nature of this directive encourages to perform E2E tests only. Given its simplicity, this is a little overkill for this particular component and adds no value over a simple HTML handmade test IMO.

## ISC License

Copyright (c) 2015, Pablo Deeleman deeleman@gmail.com

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
