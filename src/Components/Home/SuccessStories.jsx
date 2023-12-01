import { Card } from "flowbite-react";

const SuccessStories = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">
        OUR SUCCESS <span className="text-[#18c4cc]">STORIES</span>
      </h1>
      <div className="grid grid-cols-1 ml-4 my-10 gap-7 max-w-6xl mx-auto md:grid-cols-2 md:mx-auto lg:grid-cols-3 lg:mx-auto">
        {/* card-1 */}
        <div>
          <Card className="max-w-sm ">
            <div className="mx-auto">
              <img
                className=""
                src="https://www.bdmarriage.com/images/successstory/bdmarriage-success-story-1.jpg"
                alt=""
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Kawser & Saba
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                We are thankful to bdmarriage.com for helping us to find each
                other. I was exiciting about the platform and its worked.
              </p>
            </div>
          </Card>
        </div>
        {/* card-2 */}
        <div>
          <Card className="max-w-sm">
            <div className="mx-auto">
              <img
                src="https://www.bdmarriage.com/images/successstory/bdmarriage-success-story-2.jpg"
                alt=""
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Adeeb & Munia
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                We went from strangers to become a married couple now. It’s
                really an exciting experience.
              </p>
            </div>
          </Card>
        </div>
        {/* card-3 */}
        <div>
          <Card className="max-w-sm ">
            <div className="mx-auto">
              <img
                src="https://www.bdmarriage.com/images/successstory/bdmarriage-success-story-4.jpg"
                alt=""
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ahmed & Mim
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                It was a long journey to finding my life partner. Finally I
                thank bdmarriage to helping me to find my soulmate.
              </p>
            </div>
          </Card>
        </div>
        {/* card-4 */}
        <div>
          <Card className="max-w-sm ">
            <div className="mx-auto">
              <img
                className=""
                src="https://biyesadi.s3.amazonaws.com/story-1664790103869-image.jpg"
                alt=""
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Abir & Faiza
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                We are getting in touch through this marriage media. Even though
                we are different in many, we respect each other.
              </p>
            </div>
          </Card>
        </div>
        {/* card-5 */}
        <div>
          <Card className="max-w-sm">
            <div className="mx-auto">
              <img
                src="https://biyesadi.s3.amazonaws.com/story-1664790231412-image.jpg"
                alt=""
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mahadi & Mitul
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Our parents connected through this matrimonial site. We then met
                and I knew from the first meeting that Mitul.
              </p>
            </div>
          </Card>
        </div>
        {/* card-6 */}
        <div>
          <Card className="max-w-sm ">
            <div className="mx-auto">
              <img
                src="https://biyesadi.s3.amazonaws.com/story-1664790066345-image.jpg"
                alt=""
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Niloy & Tasnuva
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Thanks to this marriage site through which, I met my life
                partner. He is a living example of how it feels to see a dream
                come true.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
