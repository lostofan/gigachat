import React, { useState } from 'react';
import style from './ChatControl.module.scss';
import { Attachment } from '../Attachment/Attachment';
import { useCreateMessage } from '../../hooks/useCreateMessage';

export const ChatControl = () => {
  const [loader, setLoader] = useState(false);
  const { input, setInput, createUser } = useCreateMessage();
  return (
    <form id="form" className={style.root} onSubmit={(e) => createUser(e)}>
      <Attachment setLoader={setLoader} />
      <input
        value={loader ? 'идёт загрузка изображения...' : input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        autoComplete="off"
        placeholder="Написать сообщение..."
        disabled={loader}
      />
      <button className={style.send}>
        <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <g id="_57_face-meh" data-name="57 face-meh">
            <path d="M10,23a1,1,0,0,1-.71-.29A1,1,0,0,1,9,21.8l.67-3.32a2.46,2.46,0,0,1,.68-1.29L23.65,3.92a3.19,3.19,0,0,1,4.43,0,3.13,3.13,0,0,1,0,4.43L14.81,21.63a2.46,2.46,0,0,1-1.29.68L10.2,23ZM25.86,5a1.14,1.14,0,0,0-.8.33L11.79,18.61a.45.45,0,0,0-.14.26l-.37,1.85,1.85-.37a.45.45,0,0,0,.26-.14L26.67,6.94a1.14,1.14,0,0,0,.33-.8A1.13,1.13,0,0,0,25.86,5Z" />
            <path d="M22,29H6a3,3,0,0,1-3-3V10A3,3,0,0,1,6,7H16V9H6a1,1,0,0,0-1,1V26a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V16h2V26A3,3,0,0,1,22,29Z" />
          </g>
        </svg>
      </button>
    </form>
  );
};
