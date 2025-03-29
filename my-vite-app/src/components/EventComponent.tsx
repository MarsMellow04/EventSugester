import React, { useEffect, useState } from 'react';
import ToggleButton from './TagComponent';
import imgUrl from '../assets/token_pic.jpg'; // Ensure this path is correct or update it to the correct path
import PopUp from './PopUp';
//These interfaces will be moved ibto a common types situ, You get me
interface EventFetchingProps {
    eventID: number;
}


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

export default function EventFetching( { eventID }: EventFetchingProps) {    
    const [data, setData] = useState<Event>(EmptyEvent);
    console.log("Hello I am getting annyyed below is the eventID")
    console.log(eventID)
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/event/${eventID}`
            // , {
            // headers: {
            //     'X-Email': params.userEmail as string,
            // }}
    )
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => {
            // In case of error reset to default 
            setData(EmptyEvent)
        }); 
    }, [eventID] );

    const [heartPressed, pressHeart] = useState(false)
    const [sharePressed, pressShare] = useState(false)
    console.log(data.description)
    console.log(data.attendees)

    const [openPopup, setOpenPopup] = useState(false);

    const HandleRemovePopUp = () => setOpenPopup(false);
      

    return (
        <div id='app' className='text-left' >
        <div id='card' className='bg-gray-600 rounded-lg overflow-hidden border w-80 shadow-xl'>
            <div id='imageBloc' className='relative'>
                <img 
                    className='aspect-video object-cover object-top z-0'
                    src={imgUrl} 
                    alt='Picture' />
                <div className='absolute top-20 right-0 p-3 drop-shadow-md z-1'>
                    <button className='bg-transparent text-white hover:bg-transparent hover:text-red-600'>
                        <svg className='w-6 h-6 fill-current stroke-current ' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className='absolute top-10 right-0 p-3 drop-shadow-md z-1' onClick={() => setOpenPopup(true)}>
                    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className='bg-transparent text-white'>
                        <svg className='w-6 h-6 fill-current stroke-white' viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                            <path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85 35-85 85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35 85 35 35 85-35 85-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5-1 14.5-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85-35 85-85 35m0-640q17 0 28.5-11.5T760-760t-11.5-28.5T720-800t-28.5 11.5T680-760t11.5 28.5T720-720M240-440q17 0 28.5-11.5T280-480t-11.5-28.5T240-520t-28.5 11.5T200-480t11.5 28.5T240-440m480 280q17 0 28.5-11.5T760-200t-11.5-28.5T720-240t-28.5 11.5T680-200t11.5 28.5T720-160m0-40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='p-3'>
            <div id='box for details' className='flex flex-row text-xs uppercase font-semibold top'>
                <div className='basis-2/3' > {data.organiser_email} </div>
                <div className='basis-1/3'> IBM HURSLEY </div>
            </div>
                <h4 className='font-semibold text-xl truncate'> {data.name} </h4>
                <div className='leading-tight text-m line-clamp-2 top-3'> {data.description} This is additional text</div>
            </div>
            <div className='flex justify-end p-2 items-center'>
                <div className='grow mr-4'> Attendance: { data.attendees }5/{data.max_attendees} </div>
                <button className='shrink'> Attend </button>
            </div>
        </div>
        <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
        </div>
    );
}
