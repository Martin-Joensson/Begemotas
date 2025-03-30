import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StarRating = () => {

    const containerLength = 5;
  return (
    <div>
      <div className="w-20 grid grid-cols-6 gap-0">
        {Array.from({ length: containerLength }, (_, index) => (
          <Icons key={index} icon={type} filled={index < filled} />
        ))}
      </div>
      <img className="w-2" src={filled ? filledStar : emptyStar} />
    </div>
  );
};
