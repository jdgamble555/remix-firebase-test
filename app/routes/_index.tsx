import type { MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 >Welcome to Remix</h1>
      <ul>
        <li>
        <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
