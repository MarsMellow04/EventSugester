import React, { useEffect, useState } from 'react';
import ToggleButton from './TagComponent';
import { Form, useLoaderData, useParams } from 'react-router-dom';

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

const HeartIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.color} viewBox="0 0 24 24" strokeWidth="1.5" stroke={(props.color == 'none'? 'currentColor':'red') } className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
)

const ShareIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.color} viewBox="0 0 24 24" strokeWidth="1.5" stroke={(props.color == 'none'? 'currentColor':'red') }  className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
    </svg>
)

export default function EventFetching() {    
    const { eventId } = useParams()
    const [data, setData] = useState<Event>(EmptyEvent);
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/event/${eventId}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => {
            // In case of error reset to default 
            setData(EmptyEvent)
        }); 
    }, [eventId] );

    const [heartPressed, pressHeart] = useState(false)
    const [sharePressed, pressShare] = useState(false)

    return (
        <div className='p-3'>
            < div className='max-w-md mx-auto rounded-xl shadow-md overflow-hidden md: max-w-2xl relative'>
                <div className='Image Name'>
                    <img 
                        src={"https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1"}
                        className='aspect-[16/9]  md:w-full h-48'
                    />
                    <div className='absolute top-5 right-0 p-3'>
                        <button className={`appearance-none rounded-full bg-transparent outline-none `} onClick={() => pressShare(!sharePressed)}>
                            <ShareIcon color={sharePressed? 'red':'none'} />
                        </button>
                    </div>  
                        <div className='absolute top-20 right-0 p-3 drop-shadow-md'>
                        <button className={`appearance-none rounded-full bg-transparent `} onClick={() => pressHeart(!heartPressed)}>
                            <HeartIcon color={heartPressed? 'red':'none'} />
                        </button>
                    </div>
                    <div className='title text-left'>
                        <h2> {data.name} </h2>
                    </div>
                    <div className='mt-2 flex justify-between Detail Bottom'>
                        <div className='Location'>
                            <p>Location</p>
                        </div>
                        <div className='Made By'>
                            <p> {data.organiser_email} </p>
                        </div>
                    </div>
                    <div className='Description text-left text-pretty'>
                        <p> {data.description} </p>
                    </div>      
                </div>
            </div>
        </div>
        
    );
}
