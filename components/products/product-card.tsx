import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import NextImage from "next/image";
import Star from "../star";
import Link from "next/link";
import AddToCartButton from "./add-to-cart-button";
import { formatCurrency } from "@/lib/utils";
import { Tag } from "lucide-react";

const ProductCard = ({
  name,
  imgSrc,
  price,
}: {
  name: string;
  imgSrc: string;
  price: number;
}) => {
  return (
    <Card className="shadow-sm shadow-overlay dark:bg-gray-700">
      <CardBody>
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
      </CardBody>
      <CardFooter className="flex flex-col space-x-2">
        <h2 className="text-xl font-semibold w-full">{name}</h2>
        <p className="text-lg font-medium w-full text-start my-4">
          <Tag className="w-6 h-6 inline transform mr-2 text-yellow-700 rotate-90" />
          {formatCurrency(price)}
        </p>
        <div className="flex mt-3 space-x-3 justify-between items-center w-full">
          <Button
            variant="solid"
            color="primary"
            as={Link}
            href={`/products/${name}`}
            className="w-full"
          >
            Learn More
          </Button>
          <AddToCartButton />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
