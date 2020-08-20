import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/Button'
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';

function App() {

  return (
    <div>
      <Button className="fuck" onClick={() => { console.log('111') }}>hello</Button>
      <Button  btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Large} href="https://www.baidu.com/">link button</Button>

      <Button disabled>hello</Button>
      <hr />
      <Menu defaultIndex={0} onSelect={(index)=>{console.log(index)}}>
        <MenuItem index={1}>sjsjsjjsjsjsj</MenuItem>
        <MenuItem index={2}>sjsjsjjsjsjsj</MenuItem>
        <MenuItem index={3}>sjsjsjjsjsjsj</MenuItem>
        <MenuItem index={4}>sjsjsjjsjsjsj</MenuItem>

      </Menu>

    </div>
  );
}

export default App;
