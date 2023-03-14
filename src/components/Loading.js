import Spinner from "../assets/Spinner.gif";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src={Spinner} alt="loading" />
    </div>
  );
};

export default Loading;
