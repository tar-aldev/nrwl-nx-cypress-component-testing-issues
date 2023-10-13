import styles from './lib-to-include.module.css';

/* eslint-disable-next-line */
export interface LibToIncludeProps {}

export function LibToInclude(props: LibToIncludeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibToInclude!</h1>
    </div>
  );
}

export default LibToInclude;
