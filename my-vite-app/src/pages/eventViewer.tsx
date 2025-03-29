import { Form, json, useLoaderData, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import EventComponent from "../components/EventComponent";
import { Tag, Event, EmptyTag, EmptyEvent } from "../types/common.ts";
import EventFetching from "../components/EventComponent";

// Takes the user's email and finds the next most reccomended event
export default function EventViewer() {
  let params = useParams();
  console.log(params.userEmail);

  // TODO: I need to make so it only shows the events that they have signed up for
  const [data, setData] = useState<Event[]>([EmptyEvent]);
  useEffect(() => {
    let isMounted = true;
    fetch(`http://127.0.0.1:5000/api/GetUserEvents`, {
      headers: {
        "X-Email": params.userEmail as string,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! statusL ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log("Data received:", json);
        setData(json);
      })
      .catch((error) => {
        // In case of error reset to default
        console.log("Error recived: ", error);
        setData([EmptyEvent]);
      });
  }, [params.userEmail]);

  const exampleAray = [0, 1, 2, 3];
  console.log(`HEllllo ${data}`);
  console.log(data);
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {data.map((element) => (
        <div key={element.id}>
          <EventFetching eventID={element.id} />
        </div>
      ))}
    </div>
  );
}
