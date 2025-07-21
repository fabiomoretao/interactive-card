import styles from "./styles/app.module.css"
import bgImg from "./assets/bg-main-desktop.png"
import CardPreview from "./components/CardPreview"

function App() {
  return (
    <div className={styles.container}>

      <div className={styles.content}>
      </div>

      <div className={styles.images}>
        <img
          className={styles.bgImg}
          src={bgImg}
          alt="background image ;)"
        />

        <CardPreview />
      </div>

    </div>
  )
}

export default App