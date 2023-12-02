import { Card } from "flowbite-react";

const HowItWorks = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">HOW IT WORKS</h1>
      <div className="grid grid-cols-1 ml-5 my-10 gap-7 max-w-6xl mx-auto md:grid-cols-2 md:mx-auto lg:grid-cols-3 lg:mx-auto">
        {/* card-1 */}
        <div>
          <Card className="max-w-sm h-72">
            <div className="mx-auto">
              <img
                className=" w-[129px] h-[103px] "
                src="https://biyeshadi.com.bd/static/choose.png"
                alt=""
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Create Your profile
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Inside our thousand of 100 % verified profile you can choose
                your perfect match life partner
              </p>
            </div>
          </Card>
        </div>
        {/* card-2 */}
        <div>
          <Card className="max-w-sm h-72">
            <div className="mx-auto">
              <img
                className=" w-[129px] h-[103px] "
                src="https://biyeshadi.com.bd/static/taste.png"
                alt=""
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Search Your Partner
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Compare with your choice on Education, Career, Age, Height,
                Marital Status, Religion / Community, etc
              </p>
            </div>
          </Card>
        </div>
        {/* card-3 */}
        <div>
          <Card className="max-w-sm h-72">
            <div className="mx-auto">
              <img
                className=" w-[201px] h-[105px] "
                src="https://biyeshadi.com.bd/static/date.png"
                alt=""
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Enjoy Married Life
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                On our website, it easy to find out the best life partner for a
                happy married life
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
