import { notFound } from "next/navigation"
import EventDetails from "@/components/EventDetails"
import { Suspense } from "react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const response = await fetch(`${BASE_URL}/api/events/${slug}`)
    const { event } = await response.json()
    if (!event) {
        return notFound()
    }
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <EventDetails {...event} />
            </Suspense>
        </main>
    )
}

export default EventDetailsPage