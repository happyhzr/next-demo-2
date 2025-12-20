'use client'

import { CldImage } from "next-cloudinary"
import Image from "next/image";
import BookEvent from "@/components/BookEvent";
import { IEvent } from "@/database";
import EventCard from "@/components/EventCard";

interface Props {
    slug: string;
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
    similarEvents: IEvent[];
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

const EventDetails = ({ slug, description, image, overview, date, time, location, mode, audience, agenda, organizer, tags, similarEvents }: Props) => {
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
                    <EventAgenda agendaItems={agenda} />
                    <section className="flex-col gap-2">
                        <h2>About the Organizer</h2>
                        <p>{organizer}</p>
                    </section>
                    <EventTags tags={tags} />
                </div>
                <aside className="booking">
                    <div className="signup-card">
                        <h2 className="text-white">Book Your Spot</h2>
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
            <div className="flex w-full flex-col gap-4 pt-20">
                <h2>Similar Events</h2>
                <div className="events">
                    {
                        similarEvents.map((e: IEvent) => (
                            <EventCard key={e.title} {...e} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default EventDetails