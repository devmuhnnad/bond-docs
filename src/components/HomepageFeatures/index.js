import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/easy-to-use.svg").default,
    description: (
      <>
        Flutter Bond is designed from the ground up to be easily installed and
        used to get your Flutter app up and running quickly.
      </>
    ),
  },
  {
    title: "Clean Architecture",
    Svg: require("@site/static/img/clean-arcitecture.svg").default,
    description: (
      <>
        Build your app with clean architecture in mind. Flutter bond will help
        you build scalable and maintainable apps, with a lot of time saved.
      </>
    ),
  },
  {
    title: "Familiar",
    Svg: require("@site/static/img/familiar.svg").default,
    description: (
      <>
        The developer experience does matter, Flutter Bond is designed to be as
        familiar as possible to developers coming from other frameworks
        especially Laravel.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
