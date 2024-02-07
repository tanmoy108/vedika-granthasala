import Link from "next/link";

export default function Page() {
    const backgroundStyle = {
        backgroundImage: `url("/notfound.jpg")`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'100vh'
    };

    return (
        <>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8" style={backgroundStyle}>
                <div className="text-center">
                    <p className="text-base font-bold text-[#FFC288]">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-100">Namaste, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-[#FF6701] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FF6701] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6701]"
                        >
                            Go back home
                        </Link>
                        <Link href="#" className="text-sm font-semibold text-gray-100">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
