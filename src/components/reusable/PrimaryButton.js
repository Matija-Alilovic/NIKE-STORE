import styles from './PrimaryButton.module.css';

function PrimaryButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} ${styles.btn} `}
    >
      {props.children}
    </button>
  );
}

export default PrimaryButton;
