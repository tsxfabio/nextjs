import Link from "next/link";
import { Suspense } from "react";

export function Navigation() {
  return (
    <div>
      <Link href='/'>Home</Link>
      <Link href='/register'>Register</Link>
    </div>
  );
}
