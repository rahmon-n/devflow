import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import NavLinks from "./navbar/NavLinks";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar overflow-y-auto flex flex-col justify-between pt-36 pb-9 px-6 sticky background-light900_dark200 w-fit h-screen top-0 left-0 max-sm:hidden lg:w-[266px] shadow-light-300 dark:shadow-none">
      <div className="flex flex-col gap-6 flex-1">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button
          className="text-sm btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_IN}>
            <Image
              className="lg:hidden invert-colors"
              src="/icons/account.svg"
              alt="login"
              width={20}
              height={20}
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button
          className="text-sm light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image
              className="lg:hidden invert-colors"
              src="/icons/sign-up.svg"
              alt="login"
              width={20}
              height={20}
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
