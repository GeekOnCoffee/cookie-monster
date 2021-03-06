// Mocha
var Mock = require('./Mock.js');
var Test = require('./TestCase.js');
var chai = require('chai').should();

require('blanket')({
	pattern: 'cookie-monster/src/',
});

// Browser
var html  = '<html><head></head><body><div id="sectionLeft"></div><div id="upgrades"></div></body></html>';
var jsdom = require('jsdom');
document  = jsdom.jsdom(html);
window    = document.createWindow();

realAudio    = require('./Audio.js');
localStorage = {};

// jQuery
jQuery = require('jquery');
$      = jQuery(window);

// Modules
Game          = Mock.game();
CookieMonster = require('../src/CookieMonster/cookie-monster.js').CookieMonster;
CookieObject  = require('../src/CookieMonster/cookie-monster.js').CookieObject;

require('../src/CookieMonster/core/events.js');
require('../src/CookieMonster/core/runtime.js');
require('../src/CookieMonster/core/setup.js');
require('../src/CookieMonster/core/hooks.js');
require('../src/CookieMonster/game/achievements.js');
require('../src/CookieMonster/game/buildings.js');
require('../src/CookieMonster/game/golden-cookie.js');
require('../src/CookieMonster/game/heavenly.js');
require('../src/CookieMonster/game/special.js');
require('../src/CookieMonster/game/upgrades.js');
require('../src/CookieMonster/helpers/browser.js');
require('../src/CookieMonster/helpers/cache.js');
require('../src/CookieMonster/helpers/emphasizers.js');
require('../src/CookieMonster/helpers/math.js');
require('../src/CookieMonster/helpers/time.js');
require('../src/CookieMonster/interface/bottom-bar.js');
require('../src/CookieMonster/interface/buff-bars.js');
require('../src/CookieMonster/interface/settings.js');
require('../src/CookieMonster/interface/store.js');
require('../src/CookieMonster/interface/tooltips.js');

require('../src/CookieObject/helpers.js');
require('../src/CookieObject/reflection.js');
require('../src/CookieObject/statistics.js');

require('../src/main.js');

// Cache settings
settings = Mock.clone(CookieMonster.settings);

//////////////////////////////////////////////////////////////////////
///////////////////////////////// TESTS //////////////////////////////
//////////////////////////////////////////////////////////////////////

module.exports = {

	beforeEach: function() {
		var settingsCache = Mock.clone(settings);

		// Restore DOM
		document = jsdom.jsdom(html);
		window   = document.createWindow();
		$        = jQuery(window);

		// Restore storage
		localStorage = {};

		// Restore game
		Game = Mock.game();
		CookieMonster.settings   = settingsCache;
		CookieMonster.cacheStore = {};
	},

	// Tests
	////////////////////////////////////////////////////////////////////

	'Main' : require('./main.js'),
	'Game': {
		'Achievements'  : require('./game/achievements.js'),
		'Buildings'     : require('./game/buildings.js'),
		'Golden Cookie' : require('./game/golden-cookie.js'),
		'Heavenly'      : require('./game/heavenly.js'),
		'Upgrades'      : require('./game/upgrades.js'),
	},
	'Interface': {
		'Bottom Bar' : require('./interface/bottom-bar.js'),
		'Buff Bars'  : require('./interface/buff-bars.js'),
		'Settings'   : require('./interface/settings.js'),
		'Store'      : require('./interface/store.js'),
		'Tooltips'   : require('./interface/tooltips.js'),
	},
	'Helpers': {
		'Browser'     : require('./helpers/browser.js'),
		'Cache'       : require('./helpers/cache.js'),
		'Emphasizers' : require('./helpers/emphasizers.js'),
		'Math'        : require('./helpers/math.js'),
		'Time'        : require('./helpers/time.js'),
	},

};