import React from 'react';
import Layout from '@theme/Layout';
import InvestigationForm from '../../components/investigationForm';
import InvestigationNav from '../../components/investigationNav';

export default function Tentacles() {
	return (
		<Layout title='5. Tentacles'>
			<InvestigationNav />
			<InvestigationForm
				title='5. TENTACLES'
				chips={['DRAW 4, PICK 2', '5 MINUTES']}
				prompt='Of all the Places within DISTANCE of me, which are you closest to? (You must also be within DISTANCE.)'
				storageKey='tentaclesNotes'
				fields={{
					'All Games': [
						'Museums',
						'Libraries',
						'Movie Theaters',
						'Hospitals',
						'Call Your Mother',
						'Tatte',
						'Grocery Store',
					],
				}}
			/>
		</Layout>
	);
}
