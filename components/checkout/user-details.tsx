import { getUserById } from "@/sanity/user-utils";
import { currentUser } from "@clerk/nextjs/server";
import DetailsForm from "./details-form";

export default async function UserDetails() {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  const sanityUser = await getUserById(user.publicMetadata.userId as string);
  if (!sanityUser) {
    return null;
  }
  return (
    <div>
      <DetailsForm
        name={sanityUser.name}
        email={sanityUser.email}
        phoneNumber={sanityUser.phoneNumber}
        address={sanityUser.address}
      />
    </div>
  );
}
