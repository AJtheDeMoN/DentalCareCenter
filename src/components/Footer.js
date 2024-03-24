import { Typography } from "@material-tailwind/react";
 
export default function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-4 px-2 lg:px-10 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 Randhawa Dental Care Center
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="/contact"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}