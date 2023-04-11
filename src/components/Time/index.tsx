import { useState, useEffect, ReactElement, FC } from "react";

interface IProps {}

const Time: FC<IProps> = (): ReactElement => {
  const [now, setNow] = useState(new Date()); // 会返回当前状态的属性 和修改状态的方法

  useEffect(() => {
    // 可以在函数组件内处理生命周期事件，默认情况，每次渲染都会调用该函数
    const t = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      // 每次卸载都执行此函数，清除定时器
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="mt-4 flex items-center">
      <div className="text-gray-500 font-semibold cursor-pointer rounded-lg mr-4 dark:text-gray-100">
        {now.getFullYear()}年{now.getMonth() + 1}月{now.getDate()}日
      </div>
      <div className="text-gray-500 font-semibold cursor-pointer dark:text-gray-100">
          {now.getHours()}:{now.getMinutes()}:{now.getSeconds()}
        </div>
    </div>
  );
};

export default Time;
