import { FaCheckSquare } from "react-icons/fa";
const WhyChoose = () => {
  return (
    <div>
      <h1 className="text-xl text-center font-bold  my-10 md:text-2xl lg:text-3xl">
        Why choose <span className="text-[#18c4cc]">Bondhon.com</span>
      </h1>
      <div className="grid grid-cols-1 my-10 gap-7 max-w-6xl mx-auto mt-16 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <div className="ml-3">
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
