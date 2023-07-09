import * as React from 'react';
import styles from './PricingPage.module.css';

function PricingPage() {
	// Paste the stripe-pricing-table snippet in your React component
	return (
		<div className={styles.container}>
			<stripe-pricing-table
				pricing-table-id='prctbl_1NRxOQJhotAk5wVRrZ7AHKYv'
				publishable-key='pk_test_51NRx05JhotAk5wVRkhJukMmq5jslWQH6FQbw4evfzia3HehzAJvAan1psSDqEF6VM3gebk9bbuIRuY4RJAMbgQVC00o2bndN26'
			></stripe-pricing-table>
		</div>
	);
}

export default PricingPage;
