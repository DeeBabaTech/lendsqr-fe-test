"use client";

import Image from "next/image";
import style from "./app.module.scss";

export default function Home() {
  return (
    <div className={style.flexContainer}>
      <div className={style.loginImages}>
        <Image src='/Group.svg' alt='Logo' width={200} height={100} priority/>
        <Image src='/pablo.svg' alt='Logo' width={450} height={400} />
      </div>

      <div className={style.form}>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <form action='/dashboard' method='POST'>
          <input type='email' placeholder='Email' required /> <br />
          <input type='password' placeholder='Password' required /> <br />
          <a href='' className='text-[#39cdcc]'>
            FORGOT PASSWORD?
          </a>{" "}
          <br />
          <button type='submit'>LOG IN</button>
        </form>
      </div>
    </div>
  );
}
