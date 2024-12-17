import Spinner from './Spinner';
import styles from './SpinnerFullPage.module.css';

function SpinnerFullPage() {
  console.log('Spinner loaded');
  return (
    <div className={styles.spinnerFullpage}>
      <Spinner />
    </div>
  );
}

export default SpinnerFullPage;
