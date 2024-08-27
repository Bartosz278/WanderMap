import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import mobileStyles from "./HomePageMobile.module.css";
import useMobile from "../context/useMobile";

export default function Homepage() {
  const isMobile = useMobile();
  const appliedStyles = isMobile ? mobileStyles : styles;
  return (
    <main className={appliedStyles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WanderMap keeps track of your adventures.
        </h1>
        <h2>
          A WanderMap that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="./app" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
