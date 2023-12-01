import { Card } from "flowbite-react";
const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto my-20">
      <h1 className="text-3xl text-center font-semibold">Contact</h1>
      <hr className="border" />
      <h1 className="text-center text-xl font-medium my-5">
        Do you need help? You are in the right place! We have created this
        section to provide you with all the assistance you need.
      </h1>
      <div className=" grid grid-cols-1 gap-5 items-center justify-center md:grid-cols-2 lg:grid-cols-3 ">
        <Card href="#" className="max-w-sm text-center text-lg font-medium">
          <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
            ADDRESS
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            AB Super Market, Suite-404/A, Level-3,
          </p>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            Sector-3, Uttara, Dhaka-1230!!!
          </p>
        </Card>

        <Card href="#" className="max-w-sm text-center text-lg font-medium">
          <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
            PHONE
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            +880 1738-472740
          </p>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            Mon to Sun from 10.00 AM to 8.00 PM
          </p>
        </Card>

        <Card
          href="#"
          className="w-80 text-center text-lg font-medium md:w-80 lg:w-80"
        >
          <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
            EMAIL
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            For all other customers:
          </p>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            info@bondhon.com
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
