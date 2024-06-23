import React from "react";
import { MutatingDots } from "react-loader-spinner";
import style from '@/app/components/loader.module.scss'

export default function Loading() {
  return (
    <div className={style.loader}>
      <MutatingDots
        visible={true}
        height='100'
        width='100'
        color='#39cdcc'
        secondaryColor='#39cdcc'
        radius='12.5'
        ariaLabel='mutating-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
}
