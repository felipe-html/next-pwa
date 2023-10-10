import Page from '@/components/page'
import Section from '@/components/section'

const Index = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Auxiliando no gerenciamento de riscos da sua empresa.
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					O PGR tem como objetivo gerenciar os riscos existentes no local de
					suas atividades. Ele é composto pelo Inventário de Riscos e Plano de
					Ação, e juntos já somamos mais de{' '}
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						mil empresas
					</span>{' '}
					que se beneficiam do programa.
				</p>

				<br />

				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a
						href='https://sesifacilita.zendesk.com/hc/pt-br'
						className='underline'
					>
						Precisa de ajuda? Clique aqui
					</a>
				</p>
			</div>
		</Section>
	</Page>
)

export default Index
