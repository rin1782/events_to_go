function Events() {
    
    const events = [
        "Wedding",
        "Birthday",
        "Graduation",
        "Engagement",
        "Baby Shower"
    ]

    const eventObjects = events.map((event, i) => ({ id: i, title: event}))

    return(
        <div>
            <ul>
                {(eventObjects) => (
                    <li key={eventObjects.id}>{eventObjects.title}</li>
                )}
            </ul>
        </div>
    )


}

export default Events