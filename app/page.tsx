import ExporeButton from "@/components/ExporeButton";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default async function Home() {
  // cacheLife('seconds')
  const response = await fetch(`${BASE_URL}/api/events`)
  const { events } = await response.json()
  return (
    <section>
      <h1 className="text-center">Hello</h1>
      <p className="text-center mt-5">Hello</p>
      <ExporeButton />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((e: IEvent) => (
            <li key={e.title} className="list-none">
              <EventCard {...e} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
