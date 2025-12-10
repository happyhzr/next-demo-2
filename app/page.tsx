import ExporeButton from "@/components/ExporeButton";
import EventCard from "@/components/EventCard";

const events = [
  { image: '/images/event1.png', title: 'Event 1' },
  { image: '/images/event2.png', title: 'Event 2' },
]

export default function Home() {
  return (
    <section>
      <h1 className="text-center">Hello</h1>
      <p className="text-center mt-5">Hello</p>
      <ExporeButton />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((e) => (
            <li key={e.title}>
              <EventCard {...e} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
