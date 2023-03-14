import { Icon } from "@iconify/react";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div onClick={onClick}>
      <Icon icon="twemoji:fire" className="text-lg cursor-pointer" />
    </div>
  );
};

export default LocationMarker;
