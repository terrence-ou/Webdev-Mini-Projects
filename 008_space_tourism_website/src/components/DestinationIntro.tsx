import { useParams } from "react-router-dom";
import { destinationData } from "../assets/data";

const DestinationIntro = () => {
  const params = useParams();
  const currDestData = destinationData.filter(
    (item) =>
      item.name === (params.destinationId ? params.destinationId : "moon"),
  )[0];

  return (
    <div>
      <h2 className="text-h2 font-bellefair">
        {params.destinationId?.toUpperCase()}
      </h2>
      <p className="text-desc text-violet font-barlow leading-content">
        {currDestData.desc}
      </p>
    </div>
  );
};

export default DestinationIntro;
