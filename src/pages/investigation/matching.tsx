import React from 'react';
import Layout from '@theme/Layout';
import InvestigationForm from '../../components/investigationForm';
import InvestigationNav from '../../components/investigationNav';

export default function Matching() {
	return (
		<Layout title='1. Matching'>
			<InvestigationNav />
			<InvestigationForm
				title='1. MATCHING'
				chips={['DRAW 3, PICK 1', '5 MINUTES']}
				prompt='Is your nearest _______ the same as my nearest _______?'
				storageKey='matchingNotes'
				fields={{
					Transit: [
						'Metro Line',
						'Street or Path',
					],
					'Administrative Divisions': [
						'Quadrant',
						'Ward',
						'Police District'
					],
					Natural: ['Mountain', 'Landmass', 'Park'],
					'Places of Interest': [
						'Aquarium',
						'Golf Course',
						'Museum',
						'Movie Theater',
						'Call Your Mother',
						'Tatte',
					],
					'Public Utilities': ['Hospital', 'Library', 'Embassy'],
				}}
			/>
		</Layout>
	);
}
