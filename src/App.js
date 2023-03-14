import { useEffect, useState } from "react";
import Map from "./components/Map";
import Loading from "./components/Loading";

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEvents = async () => {
    setIsLoading(true);
    const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
    const { events } = await res.json();
    setEventData(events.filter((event) => event.title.startsWith("Wildfire")));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return <div>{isLoading ? <Loading /> : <Map eventData={eventData} />}</div>;
};

export default App;
