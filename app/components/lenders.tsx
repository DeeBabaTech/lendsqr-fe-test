import React, { useState } from "react";
import style from "./lenders.module.scss";
import Image from "next/image";
import { LendersType } from "../types/lenders";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Lenders({
  username,
  email,
  profile,
  dateJoined,
  status,
  index,
}: LendersType) {
  const [click, setClick] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    document.querySelectorAll(".dot-icon").forEach((item) => {
      item.classList.add(style.hide);
    });
    e.currentTarget.classList.add(style.block);
    setClick(!click);
  };

  return (
    <tbody>
      <tr className={style.body} style={{ border: "2px solid" }}>
        <td>Lendsqr</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{profile.phone}</td>
        <td>{dateJoined}</td>
        <td>
          <div className={style.flex}>
            <p className={status}> {status} </p>
            <div
              onClick={handleClick}
              style={{ padding: "15px" }}
              className='hover:bg-slate-150 py-2 px-3 rounded-full'>
              <Image src='/dot.png' alt='' width={5} height={15} />
            </div>

            <div className={click ? `${style.click} dot-icon` : style.hide}>
              <Link href={`/dashboard/${index}`}>
                <Image src='/view.png' alt='' width={15} height={15} />
                <p>View Details</p>
              </Link>
              <div>
                <Image src='/black.png' alt='' width={15} height={15} />
                <p>Blacklist User</p>
              </div>
              <div>
                <Image src='/act.png' alt='' width={15} height={15} />
                <p>Activate User</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
