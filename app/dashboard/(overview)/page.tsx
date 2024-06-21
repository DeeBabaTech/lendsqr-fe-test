"use client";

import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import style from "./dashboard.module.scss";
import Lenders from "@/app/components/lenders";
import axios from "axios";
import { LendersType } from "@/app/types/lenders";
import TableSkeleton from "@/app/components/tableskeleton";

function Dashboard() {
  const [search, setSearch] = useState(false);
  const [info, setInfo] = useState([]);
  const [figure, setFigure] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          "https://run.mocky.io/v3/a65b2563-9ed8-4362-bffa-42a24ddcf2b6"
        );
        setInfo(res.data);
      };

      fetchData();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const handleSearch = () => {
    setSearch(!search);
  };

  const lendersInfo = info?.map((data: LendersType, index) => {
    if (index < figure) {
      return (
        <Lenders
          key={index}
          index={index}
          username={data.username}
          email={data.email}
          profile={data.profile}
          dateJoined={data.dateJoined}
          status={data.status}
        />
      );
    }
  });

  return (
    <div className={style.body}>
      <h1>Users</h1>
      <div className={style.wrap}>
        <div>
          <Image src='/icon.png' alt='' width={50} height={50} />
          <p>USERS</p>
          <p>2,453</p>
        </div>
        <div>
          <Image src='/icon-1.png' alt='' width={50} height={50} />
          <p>ACTIVE USERS</p>
          <p>2,453</p>
        </div>
        <div>
          <Image src='/icon-2.png' alt='' width={50} height={50} />
          <p>USERS WITH LOANS</p>
          <p>12,453</p>
        </div>
        <div>
          <Image src='/icon-3.png' alt='' width={50} height={50} />
          <p>USERS WITH SAVINGS</p>
          <p>102,453</p>
        </div>
      </div>

      <div className={style.table}>
        <table>
          <thead>
            <tr>
              <th>
                <div>
                  <p>ORGANIZATION</p>
                  <span onClick={handleSearch}>
                    <Image src='/filter.png' alt='' width={10} height={10} />{" "}
                  </span>
                </div>
                {/* The search code is incorporated here */}
                <div className={search ? style.search : style.hide}>
                  <div style={{ display: "block" }}>
                    <p>Organization</p>
                    <select>
                      <option>Select</option>
                      <option>Lendsqr</option>
                    </select>
                  </div>
                  <div>
                    <p>Username</p>
                    <input
                      type='text'
                      alt=''
                      width={10}
                      height={10}
                      placeholder='User'
                    />
                  </div>
                  <div>
                    <p>Email</p>
                    <input
                      type='email'
                      alt=''
                      width={10}
                      height={10}
                      placeholder='Email'
                    />
                  </div>
                  <div>
                    <p>Date</p>
                    <input
                      type='date'
                      alt=''
                      width={10}
                      height={10}
                      placeholder='Date'
                    />
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <input
                      type='number'
                      alt=''
                      width={10}
                      height={10}
                      placeholder='Phone Number'
                    />
                  </div>
                  <div>
                    <p>Status</p>
                    <select>
                      <option>Select</option>
                      <option>Active</option>
                      <option>Blacklisted</option>
                      <option>Pending</option>
                    </select>
                  </div>
                  <div>
                    <button>Reset</button>
                    <button>Filter</button>
                  </div>
                </div>
                {/* The search pop-up ends here */}
              </th>
              <th>
                <div>
                  <p>USERNAME</p>
                  <span onClick={handleSearch}>
                    <Image src='/filter.png' alt='' width={10} height={10} />{" "}
                  </span>
                </div>
              </th>
              <th>
                <div>
                  <p>EMAIL</p>
                  <span onClick={handleSearch}>
                    <Image src='/filter.png' alt='' width={10} height={10} />{" "}
                  </span>
                </div>
              </th>
              <th>
                <div>
                  <p>PHONE NUMBER</p>
                  <span onClick={handleSearch}>
                    <Image src='/filter.png' alt='' width={10} height={10} />{" "}
                  </span>
                </div>
              </th>
              <th>
                <div>
                  <p>DATE JOINED</p>
                  <span onClick={handleSearch}>
                    <Image src='/filter.png' alt='' width={10} height={10} />{" "}
                  </span>
                </div>
              </th>
              <th>
                <div>
                  <p>STATUS</p>
                  <span onClick={handleSearch}>
                    <Image src='/filter.png' alt='' width={10} height={10} />{" "}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          {loading ? <TableSkeleton /> : lendersInfo}
        </table>
      </div>

      <div className={style.pagination}>
        <div>
          <p>Showing</p>
          <select onChange={(e: any) => setFigure(e.target.value)}>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
            <option value='500'>500</option>
          </select>
          <p>out of 100</p>
        </div>
        <div>
          <Image src='/prev.png' alt='' width={30} height={30} />
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>15</p>
          <p>16</p>
          <Image src='/next.png' alt='' width={30} height={30} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
