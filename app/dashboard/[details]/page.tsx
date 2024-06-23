"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./details.module.scss";
import Loading from "@/app/components/loader";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { details: string } }) {
  const _id = params.details;
  const [loading, setLoading] = useState(true);

  const [lenderInfo, setlenderInfo] = useState({
    children: "",
    dateJoined: "",
    duration: "",
    education: "",
    email: "",
    employment: "",
    gender: "",
    id: "",
    income: "",
    marital: "",
    profile: {
      about: "",
      address: "",
      bvn: "",
      dob: "",
      name: "",
      phone: "",
    },
    repayment: "",
    residence: "",
    sector: "",
    status: "",
    username: "",
  });

  const {
    profile: { name, phone, bvn, address },
    id,
    income,
    email,
    gender,
    status,
    children,
    education,
    employment,
    sector,
    duration,
    repayment,
    username,
  } = lenderInfo;

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const res = await axios.get(
          "https://run.mocky.io/v3/a65b2563-9ed8-4362-bffa-42a24ddcf2b6"
        );
        console.log(res.data[_id]);
        setlenderInfo(res.data[_id]);
      };

      fetchUser().then(() => setLoading(false));
    } catch (error) {
      console.error(error);
    }
  }, [_id]);

  if (parseInt(_id) > 500) {
    notFound();
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={style.details}>
          <Link href='/dashboard' className={style.link}>
            <Image src='/back.png' alt='back' width={20} height={20} />
            <p className='ml-3'>Back to Users</p>
          </Link>
          <div className={style.user}>
            <h1>User Details</h1>
            <div>
              <p>BLACKLIST USER</p>
              <p>ACTIVATE USER</p>
            </div>
          </div>
          <div className={style.general}>
            <div>
              <div>
                <Image src='/avatar.png' alt='' width={150} height={150} />
                <div>
                  <p>{name}</p>
                  <p>{id}</p>
                </div>
              </div>
              <p className={style.line}></p>
              <div>
                <p>User Tier</p>
                <div>
                  <Image src='/star-fill.png' alt='' width={20} height={20} />
                  <Image src='/fill-star.png' alt='' width={20} height={20} />
                  <Image src='/fill-star.png' alt='' width={20} height={20} />
                </div>
              </div>
              <p className={style.line}></p>
              <div>
                <p>N{income}</p>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>
            <div className={style.outline}>
              <div>General Details</div>
              <div>Documents</div>
              <div>Bank Details</div>
              <div>Loans</div>
              <div>Savings</div>
              <div>App and System</div>
            </div>
          </div>

          <div className={style.info}>
            <h3>Personal Information</h3>
            <div>
              <div>
                <h3>FULL NAME</h3>
                <p>{name} </p>
              </div>
              <div>
                <h3>PHONE NUMBER</h3>
                <p>{phone}</p>
              </div>
              <div>
                <h3>EMAIL ADDRESS</h3>
                <p>{email}</p>
              </div>
              <div>
                <h3>BVN</h3>
                <p>{bvn}</p>
              </div>
              <div>
                <h3>GENDER</h3>
                <p>{gender}</p>
              </div>
              <div>
                <h3>MARITAL STATUS</h3>
                <p>{status}</p>
              </div>
              <div>
                <h3>CHILDREN</h3>
                <p>{children}</p>
              </div>
              <div>
                <h3>TYPE OF RESIDENCE</h3>
                <p>Parent’s Apartment</p>
              </div>
            </div>
            <div className={style.lineFlat}></div>
            <h3>Education and Employment</h3>
            <div>
              <div>
                <h3>LEVEL OF EDUCATION</h3>
                <p>{education}</p>
              </div>
              <div>
                <h3>EMPLOYMENT STATUS</h3>
                <p>{employment}</p>
              </div>
              <div>
                <h3>SECTOR OF EMPLOYMENT</h3>
                <p>{sector}</p>
              </div>
              <div>
                <h3>DURATION OF EMPLOYMENT</h3>
                <p>{duration}</p>
              </div>
              <div>
                <h3>OFFICE EMAIL</h3>
                <p>{email}</p>
              </div>
              <div>
                <h3>MONTHLY INCOME</h3>
                <p>N{income}</p>
              </div>
              <div>
                <h3>LOAN REPAYMENT</h3>
                <p>N{repayment}</p>
              </div>
            </div>
            <div className={style.lineFlat}></div>
            <h3>Socials</h3>
            <div>
              <div>
                <h3>TWITTER</h3>
                <p>@_{username}</p>
              </div>
              <div>
                <h3>FACEBOOK</h3>
                <p>{name}</p>
              </div>
              <div>
                <h3>INSTAGRAM</h3>
                <p>@_{username}</p>
              </div>
            </div>
            <div className={style.lineFlat}></div>
            <h3>Guarantor</h3>
            <div>
              <div>
                <h3>FULL NAME</h3>
                <p>{name}</p>
              </div>
              <div>
                <h3>PHONE NUMBER</h3>
                <p>{phone}</p>
              </div>
              <div>
                <h3>ADDRESS</h3>
                <p>{address}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
