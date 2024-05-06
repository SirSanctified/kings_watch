import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({
  _id,
  name,
  imgSrc,
}: {
  _id: string;
  name: string;
  imgSrc: string;
}) => {
  return (
    <Card
      className="shadow dark:bg-gray-700 relative p-0"
      as={Link}
      href={`/products?category=${_id}`}
    >
      <CardBody>
        <Image
          src={imgSrc}
          alt={name}
          width={300}
          height={300}
          className="rounded-lg h-40 w-full object-cover"
        />
      </CardBody>
      <CardFooter className="absolute flex items-end justify-center h-40 w-full bottom-0 bg-gradient-to-t from-black to-transparent hover:from-yellow-700 transition-all duration-500 ease-linear">
        <h1 className="text-2xl font-bold text-white">{name}</h1>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
