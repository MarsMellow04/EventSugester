import React, { useEffect, useState } from 'react';
import ToggleButton from './TagComponent';

interface Tag {
    id: number;
    name: string;
    
}

function DataFetchingComponent() {
    // Defining list of tags from query
    const [toggledList, setList] = useState(new Array);
    
    const [data, setData] = useState<Tag[]>([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/GetSystemTags')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    function addToToggleList(tag: Tag){
        //Mkae a item added to the list of toggled items
        const isTag = (element) => element == tag;
        // const indexToRemove = toggledList.findIndex((x) => x === tag)

        if (toggledList?.includes(tag)) {
            toggledList.splice(toggledList.findIndex(isTag), 1)
            setList(toggledList)
        } else {
            toggledList.push(tag)
            setList(toggledList)
        }
        toggledList.forEach((item, index) => {
            console.log(`This is the current toggled items index: ${index}:${item.name}`)
        })

    }

    return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
        {data.map(item => (
            <ToggleButton key={item.id} value={item.name} onToggle={() => addToToggleList(item)}/>
        ))}
    </div>
    );
} export default DataFetchingComponent;
