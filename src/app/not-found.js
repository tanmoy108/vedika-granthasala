import Link from "next/link";

export default function Page() {
    return (
        <>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-bold text-[#858585]">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#5e5e5e] sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-[#ff933b]">Namaste, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-[#fc9541] mb-5 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FF6701] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6701]"
                        >
                            Go back home
                        </Link>
                        <div className="text-sm font-semibold text-[#fc9541]">
                            Contact support (tanmoysharma46@gmail.com)
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
