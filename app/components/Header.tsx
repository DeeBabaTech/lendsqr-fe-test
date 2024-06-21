"use client";

import { useState } from "react";
import style from "./header.module.scss";
import Image from "next/image";

function Header() {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleIcon = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <div className={style.flexHeader}>
      {menuIcon ? (
        <Image
          src='/exit.png'
          alt=''
          width={20}
          height={20}
          className={style.imageMenu}
          onClick={handleIcon}
        />
      ) : (
        <Image
          src='/menu.png'
          alt=''
          width={25}
          height={25}
          className={style.imageMenu}
          onClick={handleIcon}
        />
      )}
      <Image src='/Group.svg' alt='' width={150} height={50} priority />
      <div className={style.flex}>
        <input type='text' placeholder='Search for anything' />
        <div>
          <Image src='/Vector.svg' alt='' width={25} height={20} />
        </div>
      </div>
      <div className={style.flex}>
        <p>Docs</p>
        <Image
          src='/Vector.png'
          alt=''
          width={20}
          height={20}
          style={{ marginRight: 20 }}
        />
        <Image
          src='/avatar.png'
          alt=''
          width={50}
          height={50}
          className={style.rounded}
        />
        <p>Adedeji</p>
        <Image src='/down.png' alt='' width={10} height={10} />
      </div>
    </div>
  );
}

export default Header;
