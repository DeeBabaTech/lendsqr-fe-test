import Link from "next/link";
import React from "react";

export default async function NotFound() {
  return (
    <main>
      <h2>Not Found</h2>
      <p>Could not find requested details</p>
      <Link href='/dashboard'> Go back </Link>
    </main>
  );
}
