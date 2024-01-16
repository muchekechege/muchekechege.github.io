document.getElementById('submit').addEventListener('submit', (event) => {
	event.preventDefault();

	try {
		const data = `
        <button class="intaSendPayButton px-3 py-2 bg-yellow-700" data-method="CARD-PAYMENT" data-amount="${get(
			'amount'
		)}" data-currency="${get('currency')}" data-email="${get(
			'email'
		)}" data-first_name="${get('firstName')}" data-last_name="${get(
			'lastname'
		)}" data-address="Westlands Nairobi" data-city="Nairobi" data-state="Nairobi" data-zipcode="00100" data-country="KE">Pay with Visa/MasterCard</button>
        `;
		const mode = get('mode');

		document.getElementById('injectedData').innerHTML = data;
		injectScript(mode);
	} catch (error) {
		console.log(error);
		window.location = '';
	}
});

function get(name) {
	const dataValue = document.getElementById(name).value;
	return dataValue;
}

function injectScript(mode) {
	const script = document.createElement('script');
	script.src = mode === 'Live' ? 'index-live.js' : 'index-sandbox.js';
	let ref = document.querySelector('script');
	// Insert the new node before the reference node
	ref.parentNode.insertBefore(script, ref);
}
