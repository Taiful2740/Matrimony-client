import { Card } from "flowbite-react";

const Biodatas = ({ user }) => {
  const { sl, gender, image, division, age, occupation } = user;
  return (
    <div>
      <Card className="max-w-sm">
        <img className="max-w-sm h-96" src={image} alt="img" />
        <h1 className="text-xl font-bold text-center">Biodata ID: {sl}</h1>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Occupation: {occupation}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Permanent Division: {division}
        </p>
        <p>Biodata Type: {gender}</p>
        <p>Age:{age}</p>
        <input
          className="cursor-pointer bg-[#18c4cc] rounded-lg py-2 font-bold hover:text-white"
          type="submit"
          value="View Profile"
        />
      </Card>
    </div>
  );
};

export default Biodatas;
