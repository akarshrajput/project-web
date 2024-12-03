import Link from "next/link";
import { Selector } from "./_components/main/Selector";
import { Button } from "@/components/ui/button";
import { ProfileImage } from "./_components/userComponents/ProfileImage";
import { ProfileMenu } from "./_components/userComponents/ProfileMenu";

export default function Home() {
  return (
    <div className="p-2">
      <div className="flex items-center">
        <div className="flex gap-4">
          <Selector />
          <div className="flex items-center">
            <ul className="flex gap-4 items-center text-sm">
              <li>
                <Link href="/overview">Overview</Link>
              </li>
              <li>
                <Link href="/overview">Customers</Link>
              </li>
              <li>
                <Link href="/overview">Products</Link>
              </li>
              <li>
                <Link href="/overview">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-1">
          {/* <ProfileImage src="https://github.com/shadcn.png" /> */}
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}
