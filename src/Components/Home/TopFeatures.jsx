import { Card } from "flowbite-react";

const TopFeatures = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">TOP FEATURES</h1>
      <div className="grid grid-cols-1 ml-20 my-10 gap-7 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-4">
        {/* card-1 */}
        <div>
          <Card className=" w-[235px] h-[332px] ">
            <div className="mx-auto absolute">
              <img
                className=" w-[255px] h-[332px] -ml-6 "
                src="https://biyeshadi.com.bd/static/f1.png"
                alt=""
              />
            </div>
            <div className="text-center relative mt-28">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Verified Profile
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                When someone sign-up on our site, we activate the profile upon
                verifying the user and their guardian contact number, so all the
                profiles here are genuine.
              </p>
            </div>
          </Card>
        </div>
        {/* card-2 */}
        <div>
          <Card className=" w-[235px] h-[332px] ">
            <div className=" mx-auto absolute">
              <img
                className=" w-[255px] h-[332px] -ml-6 "
                src="https://biyeshadi.com.bd/static/f2.png"
                alt=""
              />
            </div>
            <div className="text-center relative mt-28">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Advance Matchmaking
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                You can see the biodata of the bride or groom of your choice.
                Users get the notification of new matches via email and SMS
                every day.
              </p>
            </div>
          </Card>
        </div>
        {/* card-3 */}
        <div>
          <Card className=" w-[235px] h-[332px] ">
            <div className="mx-auto absolute">
              <img
                className=" w-[255px] h-[332px] -ml-6 "
                src="https://biyeshadi.com.bd/static/f3.png"
                alt=""
              />
            </div>
            <div className="text-center relative mt-28">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Direct Contact
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                We provide the users with a superior matchmaking experience. If
                you like any profile, you can send proposals, chat with them and
                get their contact number.
              </p>
            </div>
          </Card>
        </div>
        {/* card-4 */}
        <div>
          <Card className=" w-[235px] h-[332px] ">
            <div className="mx-auto absolute">
              <img
                className=" w-[255px] h-[332px] -ml-6 "
                src="https://biyeshadi.com.bd/static/f4.png"
                alt=""
              />
            </div>
            <div className="text-center relative mt-28">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                100% Secure
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                We allow the users to keep their photographs and contact number
                private from the free users. For all online transactions, we use
                SSL encryption technology.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TopFeatures;
