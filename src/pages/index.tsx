import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './Home.css';
import './font/stylesheet.css';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
	const logoUrl = useBaseUrl('/img/jetlag.png');
	const ruleBookUrl = useBaseUrl('/docs/quick_start_guide');
	const investigationBookUrl = useBaseUrl('/investigation/matching');
	const yourDeckUrl = useBaseUrl('/your_deck');
	
	return (
		<Layout description='A real-world game played on public transit'>
			<Analytics />
			<div className='homepage-hero'>
				<div className='hide-seek-logo'>
					<div className='logo'>
						<img src={logoUrl} alt='Hide and Seek Logo' />
					</div>
					<div
						className='logo-container'
						style={{ width: 'fit-content', margin: '0 auto' }}
					>
						<h1 className='title'>
							HIDE<span className='plus'>+</span>SEEK
						</h1>
						<div className='line'></div>
						<div className='subline-container' style={{}}>
							<span className='subline left'>a transit game</span>
							<span className='subline right'>find your friends</span>
						</div>
					</div>

					<p className='tagline'>
						A real-world game
						<br />
						played on public transit
					</p>

					<div className='badges'>
						<span className='badge'>AGES 14+</span>
						<span className='badge'>2-4+ PLAYERS</span>
					</div>

					<div
						className='button-container'
						style={{
							display: 'flex',
							// backgroundColor: 'red',
							justifyContent: 'space-evenly',
						}}
					>
						<Link className='button' to={ruleBookUrl}>
							Rule Book
						</Link>
						<Link className='button' to={investigationBookUrl}>
							Investigation Book
						</Link>
						<Link className='button' to={yourDeckUrl}>
							Your Deck
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
}
