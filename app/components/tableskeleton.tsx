import React from "react";
import style from "./skeleton.module.scss";

export default function TableSkeleton() {
  return (
    <tbody>
      <tr className={style.skeleton}>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}
