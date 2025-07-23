import bgImg from "./assets/bg-main-desktop.png"
import Button from "./components/Button"
import CardPreview from "./components/CardPreview"
import CvcInput from "./components/FormCard/CvcInput"
import ExpInput from "./components/FormCard/ExpInput"
import Input from "./components/FormCard/Input"
import styles from "./styles/app.module.css"

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img
          className={styles.bgImg}
          src={bgImg}
          alt="background image ;)"
        />

        <CardPreview />
      </div>

      <form className={styles.formInputs}>
        <Input
          id={"cardName"}
          label={"cardholder name"}
          placeholder={"e.g. Jane Appleseed"}
          type={"text"}
        />

        <Input
          id={"cardNumber"}
          label={"card number"}
          placeholder={"e.g. 1234 5678 9123 0000"}
          type={"text"}
        />

        <div className={styles.smallInputs}>
          <ExpInput />
          <CvcInput />
        </div>
        <Button />
      </form>

    </div>
  )
}

export default App