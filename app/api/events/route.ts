import connectDB from "@/lib/mongodb"
import { NextRequest, NextResponse } from "next/server"
import { Event } from "@/database"

export async function POST(req: NextRequest) {
    try {
        await connectDB()
        const formData = await req.formData()
        let event;
        try {
            event = Object.fromEntries(formData.entries())
        } catch (e) {
            return NextResponse.json({ message: 'invalid json data format' }, { status: 400 })
        }
        const createdEvent = await Event.create(event)
        return NextResponse.json({ message: 'event created', event: createdEvent }, { status: 201 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ message: 'event creation failed', error: e instanceof Error ? e.message : 'unknown' })
    }
}