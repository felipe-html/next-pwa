import Head from 'next/head'

const Meta = () => (
	<Head>
		<title>SESI Facilita</title>
		<meta charSet='utf-8' />
		<meta name='mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta
			name='apple-mobile-web-app-status-bar-style'
			content='black-translucent'
		/>
		<meta name='apple-mobile-web-app-title' content='SESI Facilita' />
		<meta name='application-name' content='SESI Facilita' />
		<meta
			name='description'
			content='Te ajudamos a elaborar o programa de gerenciamento de riscos da sua empresa.'
		/>
		<meta
			name='theme-color'
			content='#f4f4f5'
			media='(prefers-color-scheme: light)'
		/>
		<meta
			name='theme-color'
			content='#18181b'
			media='(prefers-color-scheme: dark)'
		/>
		<meta
			name='viewport'
			content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
		/>
		<link rel='apple-touch-icon' href='/images/icon-maskable-512.png' />
		<link rel='icon' type='image/png' href='/images/favicon.ico' />
		<link rel='manifest' href='/manifest.json' />
	</Head>
)

export default Meta
