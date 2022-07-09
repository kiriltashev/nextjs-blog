import Image from "next/image"

import classes from "./hero.module.css"

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/image.jpg"
                    alt="Kiril Tashev"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Kiril</h1>
            <p>
                I blog about web development - especially frontend library like
                React and framework like Next JS
            </p>
        </section>
    )
}

export default Hero
