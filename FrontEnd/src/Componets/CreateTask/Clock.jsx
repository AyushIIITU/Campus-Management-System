import React from 'react'
import style from "./Clock.module.css"
function Clock() {
  return (
    <>
    <div className={style["cloader"]}>
  <div className={style["clface"]}>
    <div className={style["clsface"]}>
      <div id={style["h2"]} className={style["hand"]}></div>
    </div>
    <div className={style["top"]}></div>
    <div className={style["bottom"]}></div>
    <div className={style["left"]}></div>
    <div className={style["right"]}></div>
    <div id={style["sub"]} className={style["pin"]}></div>
    <div id={style["h1"]} className={style["hand"]}></div>
    <div id={style["main"]} className={style["pin"]}></div>
  </div>
</div>

    </>
  )
}

export default Clock