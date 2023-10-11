import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaSkullCrossbones } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { MdDangerous } from 'react-icons/md'

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className='sm:hidden'>
			<nav className='fixed bottom-0 w-full border-t bg-zinc-100 pb-safe dark:border-zinc-800 '>
				<div className='mx-auto flex h-16 max-w-md items-center justify-around px-6'>
					{links.map(({ href, label, icon }) => (
						<Link key={label} href={href}>
							<a
								className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
									router.pathname === href
										? 'text-indigo-500 dark:text-indigo-400'
										: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
								}`}
							>
								{icon}
								<span className='text-xs text-zinc-300 dark:text-zinc-300'>
									{label}
								</span>
							</a>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default BottomNav

const links = [
	{
		label: 'Início',
		href: '/',
		icon: <AiFillHome />,
	},
	{
		label: 'Agentes Nocivos',
		href: '/agentes-nocivos',
		icon: <FaSkullCrossbones />,
	},
	{
		label: 'Perigos',
		href: '/perigos',
		icon: <MdDangerous />,
	},
]
