'use client'

import { CldImage } from "next-cloudinary"

interface Props {
    description: string;
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetails = ({ description, image }: Props) => {
    return (
        <section id="event">
            <div className="header">
                <h1>Event Description</h1>
                <p className="mt-2">{description}</p>
            </div>
            <div className="details">
                <div className="content">
                    <CldImage src={image} alt='' width={800} height={800} className="banner" crop={{ type: 'auto', source: true }} />
                </div>
                <aside className="booking">
                    <p className="text-lg font-semibold">Book Event</p>
                </aside>
            </div>
        </section>
    )
}

export default EventDetails