import React from "react";
import ss from '../media/images/history.jpg'

export const HistoryHead = () => {
    return (
    <div>
    <img class="HistoryImg" src={ss} alt="" />
      <div className="HistoryHead">
        <p className='historytext'>#СтудСоветЭМИТ</p>
        <p className='historytext1'>ИСТОРИЯ ЭМИТ</p>
        <p className='historytext'>Мы сотрудничаем с лучшими брендами различных отраслей. Наша миссия -
          построить взаимовыгодное сотрудничество с выдающимися компаниями. Только
          будучи полезными друг другу мы сможем прийти к успеху. </p>
        <button className='historyButtonL'>сюда</button>
        <button className='historyButtonR'>туда</button>
      </div>
      </div>
    );
  };
