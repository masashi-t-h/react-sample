import React from 'react';
import { render } from 'react-dom';

import Content from './content';

let data = [{todo: 'Todo First'}];
render(
  <div>
    <Content title="React Example" data={data}/>
  </div>,
  document.getElementById("app")
);