import Page from '@/components/page'
import Section from '@/components/section'

const harmfulAgents = [
	'Arsênio e seus componentes',
	'Asbestos',
	'Benzeno',
	'Sílica livre',
	'Berílio',
	'Bromo',
	'Carvão mineral',
	'Cloro',
	'Chumbo',
	'Cádmio',
	'Auramina',
	'Fenacetina',
]

const HarmfulAgents = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Agentes Nocivos</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Abaixo temos uma lista de exemplos de agentes nocivos que podem ser
					relacionados à sua empresa durante o processo de cadastro e gestão.
				</p>

				<br />

				<div className='agentes-nocivos'>
					{harmfulAgents.map((harmfulAgent) => (
						<p key={harmfulAgent}>{harmfulAgent}</p>
					))}
				</div>
			</div>
		</Section>
	</Page>
)

export default HarmfulAgents
