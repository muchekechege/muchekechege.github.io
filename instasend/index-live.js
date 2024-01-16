const sandboxKey = 'ISPubKey_test_f918ee80-5595-4c91-aa06-cba46fd4023a';
const liveKey = 'ISPubKey_live_53f7c5e7-22fc-44df-8108-db2afa79fb97';
const live = true;

let isObj = new window.IntaSend({
	publicAPIKey: live ? liveKey : sandboxKey,
	live: live,
})
	.on('COMPLETE', (response) => {
		console.log('COMPLETE:', response);
	})
	.on('FAILED', (response) => {
		console.log('FAILED', response);
	})
	.on('IN-PROGRESS', () => {
		console.log('INPROGRESS ...');
	});

console.log('loaded live');
