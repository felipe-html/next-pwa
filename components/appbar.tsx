import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
	{ label: 'Agentes Nocivos', href: '/agentes-nocivos' },
	{ label: 'Perigos', href: '/perigos' },
]

const Appbar = () => {
	const router = useRouter()

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe'>
			<header className='border-b bg-zinc-100 px-safe dark:border-zinc-800 dark:bg-zinc-900'>
				<div className='mx-auto flex h-20 max-w-screen-md items-center justify-between px-6'>
					<Link href='/'>
						<a>
							<h1 className='font-medium text-zinc-300'>SESI Facilita</h1>
						</a>
					</Link>

					<nav className='flex items-center space-x-6'>
						<div className='hidden sm:block'>
							<div className='flex items-center space-x-8'>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`text-sm ${
												router.pathname === href
													? 'text-indigo-500 dark:text-indigo-400'
													: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
											}`}
										>
											{label}
										</a>
									</Link>
								))}
							</div>
						</div>

						<div className='logo'>
							<img src='/images/icon-256.png' alt='' />
						</div>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
