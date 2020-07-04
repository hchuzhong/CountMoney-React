import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {TagsSection} from './Money/TagsSection';
import {NotesSection} from './Money/NotesSection';
import {NumberSection} from './Money/NumberSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TagsSection>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberSection>
        <div className="output">100</div>
        <div className="numberPad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberSection>
    </MyLayout>
  );
}

export default Money;