import Link from "next/link";
import style from "@/app/components/notfound.module.scss";

export default function NotFound() {
  return (
    <main className={style.loader}>
        <h3>Not Found</h3>
        <p>Could not find requested details</p>
        <Link href='/dashboard'> Go back </Link>
    </main>
  );
}
