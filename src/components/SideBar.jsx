import Trending from "../assets/icons/trending.svg";
import NewRelease from "../assets/icons/newRelease.svg";
import ComingSoon from "../assets/icons/commingSoon.svg";
import Favourite from "../assets/icons/favourite.svg";
import WatchLater from "../assets/icons/watchLater.svg";
import Link from "./Link";
import Image from "./Image";

export default function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            to="#"
          >
            <Image
              imgSrc={Trending}
              width="24"
              height="24"
              altText="Trending"
            />
            <span>Trending</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            to="#"
          >
            <Image
              imgSrc={NewRelease}
              width="24"
              height="24"
              altText="New Release"
            />
            <span>New Releases</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            to="#"
          >
            <Image
              imgSrc={ComingSoon}
              width="24"
              height="24"
              altText="Coming Soon"
            />
            <span>Coming Soon</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            to="#"
          >
            <Image
              imgSrc={Favourite}
              width="24"
              height="24"
              altText="Favourite"
            />
            <span>Favourites</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            to="#"
          >
            <Image
              imgSrc={WatchLater}
              width="24"
              height="24"
              altText="WatchLater"
            />
            <span>Watch Later</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
