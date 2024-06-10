import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

const statuses: any = {
  Social: "text-green-700 bg-green-50 ring-green-600/20",
  Docs: "text-gray-600 bg-gray-200 ring-gray-500/10",
  Dataset: "text-red-700 bg-red-50 ring-blue-600/10",
};

const platforms: any = {
  Meta: "bg-blue-200",
  TikTok: "bg-purple-200",
  Reddit: "bg-orange-200",
  //   Facebook: "bg-blue-200",
  //   Twitter: "bg-blue-200",
  //   Instagram: "bg-blue-200",
};

const clients: any = [
  {
    id: 1,
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    details: {
      title: "How Connected Is Your Community to Everywhere Else in America?",
      dateTime: "06-10-2024",
      description:
        "The Social Connectedness Index measures the strength of connectedness between two geographic areas as represented by Facebook friendship ties.",
      status: "Social",
      source: "Meta",
      href: "https://www.nytimes.com/interactive/2018/09/19/upshot/facebook-county-friendships.html",
    },
    bgColor: "bg-black",
  },
  {
    id: 2,
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    details: {
      title: "Ad Targeting Dataset",
      dateTime: "06-10-2024",
      description:
        "The Ad Targeting dataset allows approved researchers to analyze targeting information selected by advertisers who ran ads about social issues, elections or politics any time after August 2020 in more than 120 countries.",
      status: "Docs",
      source: "Meta",
      href: "https://developers.facebook.com/docs/ad-targeting-dataset",
    },
    bgColor: "#bg-green",
  },
  {
    id: 3,
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    details: {
      title: "TikTok Research API, Videos",
      dateTime: "06-10-2024",
      description:
        "TikTok's Research Tools allow independent and academic researchers who work for a non-profit institution to access certain data, including the following information about public account owners who are aged 18 and over.",
      status: "Docs",
      source: "TikTok",
      href: "https://developers.tiktok.com/doc/research-api-codebook/",
    },
    bgColor: "#bg-green",
  },
  {
    id: 4,
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    details: {
      title: "Pathways to conspiracy",
      dateTime: "06-10-2024",
      description:
        "The social and linguistic precursors of involvement in Reddits conspiracy theory forum",
      status: "Dataset",
      source: "Reddit",
      href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0225098",
    },
    bgColor: "#bg-green",
  },
];

// Functions
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ClientElement() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 mt-2"
    >
      {clients.map((client) => (
        <li
          key={client.id}
          className="overflow-hidden rounded-xl border border-gray-200"
        >
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
              style={{ stroke: "black" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>

            <div className="flex justify-between text-sm font-medium leading-6 text-gray-900">
              <div
                className={classNames(
                  statuses[client.details.status],
                  "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                )}
              >
                type: {client.details.status}
              </div>
              <div
                className={classNames(
                  platforms[client.details.source],
                  "rounded-md px-2 ml-2 py-1 text-xs font-medium ring-1 ring-inset"
                )}
              >
                src: {client.details.source}
              </div>
            </div>
            <Menu as="div" className="relative ml-auto">
              <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href={client.details.href}
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                        <span className="sr-only">, {client.id}</span>
                      </a>
                    )}
                  </MenuItem>
                  {/* TODO: */}
                  {/* <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        Edit<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </MenuItem> */}
                  {/* <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        Upvote<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        Downvote<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </MenuItem> */}
                </MenuItems>
              </Transition>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dd className="text-gray-700">{client.details.title}</dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">
                  {client.details.description}
                </div>
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}
