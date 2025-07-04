import React from 'react';
import Layout from '@theme/Layout';
import InvestigationForm from '../../components/investigationForm';
import InvestigationNav from '../../components/investigationNav';

export default function Measuring() {
	return (
		<Layout title='2. Measuring'>
			<InvestigationNav />
			<InvestigationForm
				title='2. MEASURING'
				chips={['DRAW 3, PICK 1', '5 MINUTES']}
				prompt='Compared to me, are you closer to or further from _______?'
				storageKey='measuringNotes'
				fields={{
					Transit: [
						'A Commercial Airport',
						'MARC, VRE, or Amtrak Train Line',
						'A Metro Station',
					],
					Borders: [
						'A State Border',
						'A Quadrant Border',
						'A Ward Border',
					],
					Natural: [
						'Sea Level',
						'A Body of Water',
						'A Coastline',
						'A Mountain',
						'A Park',
					],
					'Places of Interest': [
						'A Zoo',
						'An Aquarium',
						'A Golf Course',
						'A Museum',
						'A Movie Theater',
						'A Call Your Mother',
						'A Tatte',
					],
					'Public Utilities': [
						'A Hospital',
						'A Library',
						'A Embassy',
					],
				}}
			/>
		</Layout>
	);
}
