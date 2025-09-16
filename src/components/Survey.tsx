import React from 'react';
import CardImage from '../resources/card1.png';

const Survey: React.FC = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
			<h2 style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '1rem' }}>Feedback Survey</h2>
			<img src={CardImage} alt="Card" style={{ width: '180px', height: 'auto', marginBottom: '1.5rem' }} />
			<div style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
				or go to <a href="https://www.menti.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>www.menti.com</a> and enter the code <span style={{ fontWeight: 'bold', letterSpacing: '2px' }}>xxxx xxxx</span>
			</div>
			<p style={{ maxWidth: '400px', fontSize: '1rem' }}>
				We'd love to hear your thoughts and impressions to help us make the game even better.
			</p>
		</div>
	);
};

export default Survey;
