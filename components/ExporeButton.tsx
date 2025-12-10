'use client'

import Image from "next/image"

const ExporeButton = () => {
    return (
        <div>
            <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log('click')}>
                <a href="#events">
                    <p className="text-white">Explore Events</p>
                    <Image src="/icons/arrow-down.svg" alt="" width={24} height={24} />
                </a>
            </button>
        </div>
    )
}

export default ExporeButton