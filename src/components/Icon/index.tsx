import { createFromIconfontCN } from '@ant-design/icons';


const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1733772_5thrv4p6qn3.js',
});

type Props = {
  name: string
}

const Icon: React.FC<Props> = (props) => { 
  return (
    <MyIcon type={`vision-${props.name}`} />
  )
}

export default Icon