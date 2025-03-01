import { Form, useLoaderData, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import EventComponent from '../components/EventComponent';
import { Tag, Event, EmptyTag } from '../types/common.ts';



// Takes the user's email and finds the next most reccomended event 
export default function EventViewer() {  
    let params = useParams()

    console.log(params)
    
    console.log(params.eventId)
    return (
        <div>
            {EventComponent(Number(params.eventId))}
        </div>
    )
}