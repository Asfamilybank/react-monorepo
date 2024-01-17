import styles from './MyButton.module.css';
import { Button } from 'antd';

/* eslint-disable-next-line */
export interface MyButtonProps {}

export function MyButton(props: MyButtonProps) {
  return (
    <div className={styles['container']}>
      <Button />
    </div>
  );
}

export default MyButton;
