import { Form, useLoaderData, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import EventComponent from '../components/EventComponent';

interface Tag {
    id: number;
    name: string;
}

interface Event {
    id: number;
    name: string;
    description: string;
    organiser_email: string;
    attendees: number;
    max_attendees: number;
    current_attendees: number;
    tags: Tag[];
}

const EmptyTag = (): Tag => ({
    id: 0, 
    name: ""
})

const EmptyEvent = (): Event => ({
    id: -1,
    name: "",
    description: "",
    organiser_email: "",
    attendees: 0,
    max_attendees: 0,
    current_attendees: 0,
    tags: [EmptyTag(), EmptyTag()]
})

// Takes the user's email and finds the next most reccomended event 
export default function EventFinder() {  
    let params = useParams()
    
    const [data, setData] = useState<Event>(EmptyEvent);
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/GetNextRecommended`, {
            headers: {
                'X-Email': params.userEmail as string,
            },
        })
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => {
            // In case of error reset to default 
            setData(EmptyEvent)
            console.error(Error(error))
        }); 
    }, [params] );
    

    return (
        <div>
            < EventComponent eventID={data.id} />
        </div>
    )
}