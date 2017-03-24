/**
 * Icon Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const Clipboard = require('react-clipboard.js');
const Message = require('uxcore-message');
const Icon = require('../src');


const icons = [
  'xiala',
  'liucheng',
  'bingtu',
  'lianjie',
  'dayin',
  'fujian',
  'ren',
  'paixu-jiangxu',
  'paixu-shengxu',
  'renyuansousuo',
  'renyuanzengjia',
  'shanjian',
  'richeng',
  'shangchuan',
  'shouji',
  'shoucang',
  'shezhi',
  'shouye',
  'shuaxin',
  'tuandui',
  'shu',
  'weizhi',
  'xiazai',
  'xinwen',
  'xinwen1',
  'yinpin',
  'xiangji',
  'yingyong',
  'youxiang',
  'zengjia',
  'zhexiantu',
  'number',
  'number1',
  'number2',
  'number3',
  'number4',
  'number5',
  'number6',
  'number7',
  'number8',
  'number9',
  'PC',
  'number10',
  'tupian',
  'shipin',
  'yibiaopan',
  'wendang1',
  'zhuzhuangtu1',
  'sousuo',
  'shanchu',
  'shexiangtou',
  'number-xianxing',
  'number-xianxing1',
  'number-xianxing2',
  'number-xianxing3',
  'number-xianxing4',
  'number-xianxing5',
  'number-xianxing6',
  'number-xianxing7',
  'number-xianxing8',
  'number-xianxing9',
  'number-xianxing10',
  'riqi',
  'riqiqujian',
  'biaoge1',
  'biaoqian',
  'tuichu',
  'zhanghaobianji',
  'zhanghaoguanli',
  'pinglun',
  'renyuanmingpian',
  'renyuan',
  'top',
  'right',
  'left',
  'bottom',
  'left_double',
  'right_double',
  'xiaolian-line',
  'kulian-full',
  'caozuo-xingji-line',
  'caozuo-xingji-full',
  'kulian-line',
  'xiaolian-full',
  'xianshi',
  'chuangjiansiyoumoban',
  'jinggao',
  'biaodanlei-tongyongqingchu',
  'suo',
  'biaoqian-qingchu',
  'biaoqianxuanze-duoxuan-gou',
];

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {icons.map(name => (
          <Clipboard
            className="demo-item-clipboard"
            component="div"
            data-clipboard-text={`<Icon name="${name}" />`}
            onSuccess={() => {
              Message.success('已复制到粘贴板');
            }}
          >
            <div className="demo-item" key={name}>
              <Icon name={name} className="demo-class" />
              <div>{name}</div>
            </div>
          </Clipboard>
        ))}
      </div>
    );
  }
}

module.exports = Demo;
