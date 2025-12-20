'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { createBooking } from "@/lib/actions/booking.actions"
import posthog from "posthog-js"

const BookEvent = ({ eventId, slug }: { eventId: string; slug: string; }) => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const { success } = await createBooking({ eventId, slug, email })
        if (success) {
            setSubmitted(true)
            posthog.capture('event_booked', { eventId, slug, email })
        } else {
        }
    }
    return (
        <div id="book-event">
            {
                submitted ? (
                    <p className="text-sm">Thank you for signing up!</p>
                ) : (
                    <form action="" onSubmit={handleSubmit}>
                        <div className="text-white">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" />
                        </div>
                        <Button type="submit" variant='outline'>Submit</Button>
                    </form>
                )
            }
        </div>
    )
}

export default BookEvent