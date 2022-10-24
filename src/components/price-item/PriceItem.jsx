import "./PriceItem.scss";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

const PriceItem = ({ children, isPro }) => {
  return (
    <li className="list-item">
      {isPro ? (
        <IoCheckmarkOutline className="list-icon" />
      ) : (
        <IoCloseOutline className="list-icon" />
      )}
      <span>{children}</span>
    </li>
  );
};

export default PriceItem;
