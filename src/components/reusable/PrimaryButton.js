import styles from './PrimaryButton.module.css';

function PrimaryButton(props) {
  return (
    <button className={`${props.className} ${styles.btn} `}>
      {props.children}
    </button>
  );
}

export default PrimaryButton;
