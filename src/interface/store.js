/**
 * Create the various upgrade counters above the store
 *
 * @return {void}
 */
CookieMonster.createStoreCounters = function() {
	var padding = '2px';

	$('#storeTitle').css({
		'font-size'     : '18px',
		'padding'       : '4px 8px 2px 8px',
		'border-bottom' : '1px solid black',
	})
	.after(
	'<table cellpadding="0" cellspacing="0" style="width:300px; table-layout:fixed; padding:4px; font-weight:bold; background:rgba(0, 0, 0, 0.6); border-bottom: 1px solid black; cursor:default;">'+
		'<tr>'+
			'<td align=center style="color:#' +this.color('blue')+   '; padding: ' +padding+ ';" id="cm_up_q0">0</td>' +
			'<td align=center style="color:#' +this.color('green')+  '; padding: ' +padding+ ';" id="cm_up_q1">0</td>' +
			'<td align=center style="color:#' +this.color('yellow')+ '; padding: ' +padding+ ';" id="cm_up_q2">0</td>' +
			'<td align=center style="color:#' +this.color('orange')+ '; padding: ' +padding+ ';" id="cm_up_q3">0</td>' +
			'<td align=center style="color:#' +this.color('red')+    '; padding: ' +padding+ ';" id="cm_up_q4">0</td>' +
			'<td align=center style="color:#' +this.color('purple')+ '; padding: ' +padding+ ';" id="cm_up_q5">0</td>' +
		'</tr>'+
	'</table>');
};

/**
 * Check if an upgrade is in store
 *
 * @param {Array} upgrade
 *
 * @return {Boolean}
 */
CookieMonster.isInStore = function(upgrade) {
	return Game.UpgradesInStore.indexOf(upgrade) !== -1;
};