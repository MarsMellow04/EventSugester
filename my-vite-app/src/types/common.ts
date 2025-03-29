export interface Tag {
    id: number;
    name: string;
}

export interface Event {
    id: number;
    name: string;
    description: string;
    organiser_email: string;
    attendees: number;
    max_attendees: number;
    current_attendees: number;
    tags: Tag[];
}

export const EmptyTag = (): Tag => ({
    id: 0, 
    name: ""
})

export const EmptyEvent = ({
    id: 77,
    name: 'Empty',
    description: 'Nope',
    organiser_email: 'ugh',
    attendees: 11,
    max_attendees: 11,
    current_attendees: 11,
    tags: [EmptyTag()]
})