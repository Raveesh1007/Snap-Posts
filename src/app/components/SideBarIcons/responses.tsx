import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useContext } from 'react';
import { AppContext } from "../../context/AppContext";

const Responses = () => {
  const { setResponse } = useContext(AppContext); // Ensure setResponse is provided from context

  return (
    <div className="sidebar_icon flex flex-col">
      <label className="swap">
        {/* Checkbox for toggling response */}
        <input
          type="checkbox"
          onChange={(e) => {
            setResponse(e.target.checked); // Update response based on checked state
            console.log(e.target.checked);  // Debugging log
          }}
          aria-label="Toggle response"
        />
        {/* Swap icons based on checkbox state */}
        <AiFillHeart className="swap-on fill-current w-6 h-6 text-slate-500" />
        <AiOutlineHeart className="swap-off fill-current w-6 h-6 text-slate-500" />
      </label>
      {/* Label for Response */}
      <p className="icon_text">Response</p>
    </div>
  );
};

export default Responses;
