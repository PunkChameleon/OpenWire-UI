OpenWire-UI
===========

The Official UI of OpenWire, a distributed newswire service. For more information, see [this post](https://medium.com/@PunkChameleon/introducing-openwire-in-pre-pre-alpha-e49dc1dc9d19).

### Prerequites:
1. [Node](https://nodejs.org/en/).
2. A high degree of awesomeness!

### To Run (no need to build beforehand):

1. Clone this repo, and `cd` into it.
2. Run `npm install`
2. Run `node .`

This will serve the client on port `8000`.

### To Build/Optimize:
1. Run `npm install`
2. Run `grunt build`
3. Serve the optimized directory

### Pointing to APIs
By default, the UI will point to the offical [OpenWire test instance](http://openwi.re/). However, if you are running your own (OpenWire API)[http://github.com/PunkChameleon/OpenWire-API] -- you can change where you are pointing easily by altering the `api_url` attribute in `common.js` [here](https://github.com/PunkChameleon/OpenWire-UI/blob/master/public/js/common.js#L20).

### Feedback
Feedback is more than welcome! Please feel free to fork the repo and submit any PRs you believe improve the product. If you're not a coder, you can submit issues you find (either when running locally or on offical test site) as Github Issues, which are extremely helpful!

By the way, the first person who submits test wins +1000!

### License
Copyright (C) 2015 Nick Weingartner (http://www.github.com/PunkChameleon).

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

