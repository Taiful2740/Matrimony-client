import { FaCheckSquare } from "react-icons/fa";
const AssistantService = () => {
  return (
    <div
      className="max-w-6xl mx-auto mt-16 mb-10 pb-10"
      style={{
        backgroundColor: "#e4f5f8",
      }}
    >
      <h1 className="py-10 text-center text-4xl font-bold">
        <span className="text-[#18c4cc]">VIP</span> Assistant Service
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <img
            src="https://www.bdmarriage.com/images/vip-assistant.png"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center border text-xl p-5 lg:text-3xl">
            <div>
              {" "}
              <FaCheckSquare className="bg-[#18c4cc] block mr-2"></FaCheckSquare>
            </div>
            <div>Assign Personal Advisor</div>
          </div>
          <div className="flex items-center border text-xl p-5 lg:text-3xl">
            <div>
              {" "}
              <FaCheckSquare className="bg-[#18c4cc] block mr-2"></FaCheckSquare>
            </div>
            <div>Advisor Will Manage Your Profile</div>
          </div>
          <div className="flex items-center border text-xl p-5 lg:text-3xl">
            <div>
              {" "}
              <FaCheckSquare className="bg-[#18c4cc] block mr-2"></FaCheckSquare>
            </div>
            <div>Handpick Matches For You</div>
          </div>
          <div className="flex items-center border text-xl p-5 lg:text-3xl">
            <div>
              {" "}
              <FaCheckSquare className="bg-[#18c4cc] block mr-2 "></FaCheckSquare>
            </div>
            <div>Arranging Meetings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantService;
