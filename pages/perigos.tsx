import Page from '@/components/page'
import Section from '@/components/section'

const dangers = [
	'Atropelamento',
	'Colisão',
	'Ruído contínuo',
	'Incêndio',
	'Químico',
	'Micro-organismos patogênicos',
	'Contato com superfícies em temperatura extrema',
	'Sílica livre',
	'Calor',
	'Ácido clorídrico',
]

const Dangers = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Perigos</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Abaixo temos uma lista de exemplos de perigos que podem ser
					relacionados à sua empresa durante o processo de cadastro e gestão.
				</p>
			</div>
		</Section>

		<Section>
			<div>
				{dangers.map((danger) => (
					<p key={danger}>{danger}</p>
				))}
			</div>
		</Section>
	</Page>
)

export default Dangers
