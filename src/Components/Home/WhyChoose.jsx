import { FaCheckSquare } from "react-icons/fa";
const WhyChoose = () => {
  return (
    <div>
      <div className="grid grid-cols-2 my-10 gap-7 max-w-6xl mx-auto mt-16">
        <div>
          <h1 className="text-3xl font-bold text-left my-10">
            Why choose <span className="text-[#18c4cc]">Bondhon.com</span>
          </h1>

          <div>
            <div className="flex items-center ">
              <div>
                {" "}
                <FaCheckSquare className="bg-[#18c4cc] block mr-2"></FaCheckSquare>
              </div>
              <div>Register for Free!</div>
            </div>
            <div className="flex items-center ">
              <div>
                {" "}
                <FaCheckSquare className="bg-[#18c4cc] block mr-2"></FaCheckSquare>
              </div>
              <div>100% human verified profiles</div>
            </div>
            <div className="flex items-center ">
              <div>
                {" "}
                <FaCheckSquare className="bg-[#18c4cc] block mr-2"></FaCheckSquare>
              </div>
              <div>Chat, Voice & Video calling</div>
            </div>
            <div className="flex items-center ">
              <div>
                {" "}
                <FaCheckSquare className="bg-[#18c4cc] block mr-2"></FaCheckSquare>
              </div>
              <div>Private, personalized, and highly confidential service</div>
            </div>
            <div className="flex items-center ">
              <div>
                {" "}
                <FaCheckSquare className="bg-[#18c4cc] block mr-2"></FaCheckSquare>
              </div>
              <div>Halal, safe and secured Matrimony site in Bangladesh</div>
            </div>
          </div>
        </div>
        <div>
          <img src="https://www.bdmarriage.com/images/video-thumb.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
