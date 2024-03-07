import React from 'react'
import logo from "../../../../public/logo2.png"
import Image from 'next/image'

const Page = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-10/12 flex flex-col justify-center items-center'>
                <p className="text-4xl font-extrabold text-center text-[#374246] my-8">About Us</p>
                <div
          className="flex space-x-2 w-60 md:w-72 my-5"
          style={{ cursor: "pointer" }}
        >
          <Image src={logo} alt="logo" width={2000} height={500} />
        </div>
                <div className=' text-base text-[#5e5e5e]'>
                    Welcome to Vedika Granthasala, your one-stop online destination for a spiritual journey through the vast world of Hinduism. Immerse yourself in a treasure trove of knowledge as we offer an extensive collection of books, adorned with intricate poster designs featuring powerful mantras and shlokas. Explore our enriching blogs on Hinduism, generously shared without any cost.
                    <div className="flow-root">
                       <div className='my-4'>
                       What sets us apart is our unparalleled collection of Gitas, each accompanied by 10+ insightful commentaries and translations. Delve into the wisdom of ancient scriptures with ease, as we strive to make the profound teachings of Hindu philosophy accessible to all. Vedika Granthasala is more than a website; it&apos;s a sanctuary for seekers, a place where the essence of Hindu spirituality comes alive through literature, design, and thoughtful commentary. Join us on this enlightening journey as we celebrate the richness of our cultural heritage together.
                       </div>
                    </div>
                    <div className="flow-root">

                        At Vedika Granthasala, we believe in fostering a sense of community and knowledge-sharing, providing a platform where the spiritual and intellectual dimensions of Hinduism converge. Whether you&apos;re a seasoned practitioner or a curious newcomer, our website is designed to cater to all levels of interest and understanding. Explore the depths of ancient wisdom, discover the beauty of sacred verses, and engage in meaningful discussions through our diverse collection of blogs and resources. Join us in celebrating the profound teachings of Hinduism and embark on a transformative experience with Vedika Granthasala.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page