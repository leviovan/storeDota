
import React from 'react';
import Style from './Notification.module.scss';

interface INotification{
    bc:string,
    text:string
}

const Notification: React.FC<INotification> = ({bc,text}) => {
  return (
    <div className={Style.block} style={{backgroundColor:bc}}>
        <p className={Style.text} >{text}</p>
    </div>
  )
}

export default Notification