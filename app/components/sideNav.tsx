import React from "react";
import Image from "next/image";
import style from "./sideNav.module.scss";

function SideNav() {
  return (
    <div className={style.width}>
      <div className={style.mTop}>
        <ul>
          <div className={style.flex}>
            <Image src='/org.png' alt='' height={15} width={15} />
            <li>Switch Organization</li>
            <Image src='/drop-down.svg' alt='' height={15} width={15} />
          </div>
          <div className={`${style.flex} ${style.mTop}`}>
            <Image src='/home.png' alt='' height={15} width={15} />
            <li>Dashboard</li>
          </div>
          <h2>CUSTOMERS</h2>
          <div className={style.options}>
            <div className={style.user}>
              <Image src='/user.png' alt='' height={15} width={15} />
              <li>Users</li>
            </div>
            <div>
              <Image src='/user_1.png' alt='' height={15} width={15} />
              <li>Guarantors</li>
            </div>
            <div>
              <Image src='/user_2.png' alt='' height={15} width={15} />
              <li>Loans</li>
            </div>
            <div>
              <Image src='/user_3.png' alt='' height={15} width={15} />
              <li>Decision Models</li>
            </div>
            <div>
              <Image src='/user_5.png' alt='' height={15} width={15} />
              <li>Savings</li>
            </div>
            <div>
              <Image src='/user_6.png' alt='' height={15} width={15} />
              <li>Loan Requests</li>
            </div>
            <div>
              <Image src='/user_7.png' alt='' height={15} width={15} />
              <li>Whitelist</li>
            </div>
            <div>
              <Image src='/user_8.png' alt='' height={15} width={15} />
              <li>Karma</li>
            </div>
          </div>
          <h2>BUSINESSES</h2>
          <div className={style.options}>
            <div>
              <Image src='/org.png' alt='' height={15} width={15} />
              <li>Organization</li>
            </div>
            <div>
              <Image src='/user_6.png' alt='' height={15} width={15} />
              <li>Loan Products</li>
            </div>
            <div>
              <Image src='/biz-1.png' alt='' height={15} width={15} />
              <li>Savings Products</li>
            </div>
            <div>
              <Image src='/biz-2.png' alt='' height={15} width={15} />
              <li>Fees and Charges</li>
            </div>
            <div>
              <Image src='/biz-3.png' alt='' height={15} width={15} />
              <li>Transactions</li>
            </div>
            <div>
              <Image src='/biz-4.png' alt='' height={15} width={15} />
              <li>Services</li>
            </div>
            <div>
              <Image src='/biz-5.png' alt='' height={15} width={15} />
              <li>Service Account</li>
            </div>
            <div>
              <Image src='/biz-6.png' alt='' height={15} width={15} />
              <li>Settlements</li>
            </div>
            <div>
              <Image src='/biz-7.png' alt='' height={15} width={15} />
              <li>Reports</li>
            </div>
          </div>

          <h2>SETTINGS</h2>
          <div className={style.options}>
            <div>
              <Image src='/home.png' alt='' height={15} width={15} />
              <li>Preferences</li>
            </div>
            <div>
              <Image src='/user_1.png' alt='' height={15} width={15} />
              <li>Fees and Pricing</li>
            </div>
            <div>
              <Image src='/user_1.png' alt='' height={15} width={15} />
              <li>Audit Logs</li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
