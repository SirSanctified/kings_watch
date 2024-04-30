import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-4">
      <Card className="max-w-lg shadow-xl shadow-overlay drop-shadow-xl  mx-auto p-8">
        <CardHeader>
          <h1 className="text-3xl font-bold">Page Not Found</h1>
        </CardHeader>
        <CardBody>
          <p className="text-lg font-medium">
            Oops! The page you&apos;re looking for doesn&apos;t exist.{" "}
            <br className="hidden sm:block" /> Please check the URL and try
            again.
          </p>
        </CardBody>
        <CardFooter>
          <Link
            href="/"
            className="w-full underline text-xl font-semibold"
          >
            <ArrowLeft className="inline mr-2 w-6 h-6" /> Go Back Home
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default NotFound;
