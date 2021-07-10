import React, { useState, useEffect, ReactElement, FC } from 'react';
import moment from 'moment';

interface IProps {

}

const Time: FC<IProps>= (): ReactElement=> {
    const [now, setNow] = useState(moment())  // 会返回当前状态的属性 和修改状态的方法

    useEffect(() => {  // 可以在函数组件内处理生命周期事件，默认情况，每次渲染都会调用该函数
        const t = setInterval(() => {
            setNow(moment())
        }, 1000)

        return () => {  // 每次卸载都执行此函数，清楚定时器
            clearTimeout(t)
        }
    }, [])

    return (
        <div className="mt-4 flex items-center">
            <div className="text-gray-500 font-semibold cursor-pointer rounded-lg mr-4">{now.format('YYYY年M月D日')}</div>
            <div className="text-gray-500 font-semibold cursor-pointer">{now.format('HH:mm')}</div>
        </div>
    )
}

export default Time;