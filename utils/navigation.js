import Link from 'next/link'


// const navigation = [
//     { name: 'Features', href: '/Features' },
//     { name: 'Pricing', href: '/Pricing' },
//     { name: 'Contact', href: '/Contact' },
// ]

export default function Navigation() {
    return (
        <>
            <section className="w-full px-8 text-gray-700">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <Link href="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span className="mx-auto text-xl font-black leading-none text-gray-900">
                                Logo Example
                                <span className="text-indigo-600"></span>
                            </span>
                        </Link>
                        {/* <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 text-black">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} className="mr-5 font-medium text-gray-900 transition-colors duration-200 hover:text-indigo-600">
                                    {item.name}
                                </Link>
                            ))}
                        </nav> */}
                    </div>
                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <button 
                         className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                        >
                            Contact Us
                        </button>
                        <Link href="#" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                            Sign in
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}