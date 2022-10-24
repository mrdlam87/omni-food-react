import { IoCheckmarkOutline } from "react-icons/io5";

const DietItem = ({ label }) => {
  return (
    <li className="list-item">
      <IoCheckmarkOutline className="list-icon" />
      <span>{label}</span>
    </li>
  );
};

export default DietItem;
