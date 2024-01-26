import { useParams } from "react-router-dom";

const DestinationIntro = () => {
  const params = useParams();
  return (
    <div>
      <h2 className="text-h2 font-bellefair">
        {params.destinationId?.toUpperCase()}
      </h2>
    </div>
  );
};

export default DestinationIntro;
