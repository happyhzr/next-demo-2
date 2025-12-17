'use client'

import { CldImage } from "next-cloudinary"
import Image from "next/image";
import BookEvent from "./BookEvent";

interface Props {
    description: string;
    image: string;
    overview: string;
    date: string;
    time: string;
    location: string;
    mode: string;
    audience: string;
    agenda: string[];
    organizer: string;
    tags: string[];
}

const EventDetailItem = ({ icon, alt, label }: { icon: string; alt: string; label: string; }) => {
    return (
        <div>
            <Image src={icon} alt={alt} width={17} height={17} />
            <p>{label}</p>
        </div>
    )
}

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => {
    return (
        <div className="agenda">
            <h2>Agenda</h2>
            <ul>
                {
                    agendaItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const EventTags = ({ tags }: { tags: string[] }) => {
    return (
        <div className="flex flex-row gap-1.5 flex-wrap">
            {
                tags.map((tag) => (
                    <div className="pill" key={tag}>{tag}</div>
                ))
            }
        </div>
    )
}

const EventDetails = ({ description, image, overview, date, time, location, mode, audience, agenda, organizer, tags }: Props) => {
    const bookings = 10
    return (
        <section id="event">
            <div className="header">
                <h1>Event Description</h1>
                <p className="mt-2">{description}</p>
            </div>
            <div className="details">
                <div className="content">
                    <CldImage src={image} alt='' width={800} height={800} className="banner" crop={{ type: 'auto', source: true }} />
                    <section className="flex-col gap-2">
                        <h2>Overview</h2>
                        <p>{overview}</p>
                    </section>
                    <section className="flex-col gap-2">
                        <h2>Event Details</h2>
                        <EventDetailItem icon="/icons/calendar.svg" alt="" label={date} />
                        <EventDetailItem icon="/icons/clock.svg" alt="" label={time} />
                        <EventDetailItem icon="/icons/pin.svg" alt="" label={location} />
                        <EventDetailItem icon="/icons/mode.svg" alt="" label={mode} />
                        <EventDetailItem icon="/icons/audience.svg" alt="" label={audience} />
                    </section>
                    <EventAgenda agendaItems={JSON.parse(agenda[0])} />
                    <section className="flex-col gap-2">
                        <h2>About the Organizer</h2>
                        <p>{organizer}</p>
                    </section>
                    <EventTags tags={JSON.parse(tags[0])} />
                </div>
                <aside className="booking">
                    <div className="signup-card">
                        <h2>Book Your Spot</h2>
                        {
                            bookings > 0 ? (
                                <p className="text-sm">
                                    Join {bookings} people who have already booked their spot!
                                </p>
                            ) : (
                                <p className="text-sm">
                                    Be the first book the spot!
                                </p>
                            )
                        }
                        <BookEvent />
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default EventDetails