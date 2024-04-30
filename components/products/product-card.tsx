import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import NextImage from "next/image";
import Star from "../star";
import Link from "next/link";
import AddToCartButton from "./add-to-cart-button";

const ProductCard = ({
  name,
  imgSrc,
  price,
  rating,
}: {
  name: string;
  imgSrc: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}) => {
  return (
    <Card className="shadow-sm dark:bg-gray-700">
      <CardBody>
        <Link
          href={`/products/${name}`}
          className="w-full"
        >
          <Image
            isZoomed
            as={NextImage}
            src={imgSrc}
            alt={name}
            width={300}
            height={200}
            className="rounded-lg h-40 w-full object-contain"
            loading="lazy"
          />
        </Link>
      </CardBody>
      <CardFooter className="flex flex-col space-x-2">
        <h2 className="text-xl font-semibold w-full">{name}</h2>
        <p className="text-md font-normal opacity-60 my-3 w-full flex space-x-2">
          <Star
            width={20}
            height={20}
            mr={4}
          />{" "}
          {rating.rate} ({rating.count} reviews)
        </p>
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-semibold">${price}</p>
          <AddToCartButton />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
