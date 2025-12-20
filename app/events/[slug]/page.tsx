import { notFound } from "next/navigation"
import EventDetails from "@/components/EventDetails"
import { Suspense } from "react"
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions"
import { cacheLife } from "next/cache"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    'use cache'
    cacheLife('seconds')
    const { slug } = await params
    const response = await fetch(`${BASE_URL}/api/events/${slug}`)
    const { event } = await response.json()
    const similarEvents = await getSimilarEventsBySlug(slug)
    if (!event) {
        return notFound()
    }
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <EventDetails {...event} similarEvents={JSON.parse(JSON.stringify(similarEvents))} />
            </Suspense>
        </main>
    )
}

export default EventDetailsPage