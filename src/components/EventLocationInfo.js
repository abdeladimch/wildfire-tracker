import { AiOutlineClose } from "react-icons/ai";

const EventLocationInfo = ({ info, setShowInfo }) => {
  return (
    <div className="h-[300px] bg-white py-3 px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold text-center">Event Location Info</h2>
      <ul className="flex flex-col gap-8 mt-12">
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
      <AiOutlineClose
        className="absolute top-[8px] right-[12px] text-xl bg-gray-400 rounded-full p-1 cursor-pointer"
        onClick={() => setShowInfo(false)}
      />
    </div>
  );
};

export default EventLocationInfo;
