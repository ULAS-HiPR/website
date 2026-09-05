"use client";

import { useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/base-path";
import { useNavVisible } from "@/app/NavBar/use-at-top";
import styles from "./dullahan-scroll.module.css";

// Positions are fractions of the rendered vehicle, nose to tail.
const annotations = [
  {
    label: "Experimental flight",
    title: "Two-stage flight",
    copy: "Dullahan is HiPR's two-stage rocket, developed outside the competition programme to attempt a new Irish altitude record. A booster lifts the vehicle before the upper stage continues under its own power.",
    stat: "6.4 km target apogee",
    side: "left",
    points: [0.53],
  },
  {
    label: "Upper stage",
    title: "Sustainer avionics",
    copy: "The sustainer carries its own flight computers and batteries in an upper avionics bay. This stage continues the ascent after separating from the booster.",
    stat: "Dedicated upper-stage avionics",
    side: "right",
    points: [0.29],
  },
  {
    label: "Recovery",
    title: "Independent recovery",
    copy: "Both stages carry their own recovery hardware. After separation, the booster and sustainer must each return safely under parachute.",
    stat: "Recovery in both stages",
    side: "left",
    points: [0.18, 0.68],
  },
  {
    label: "Staging",
    title: "Stage separation",
    copy: "The interstage joins the two vehicles for the first part of the ascent. Separation releases the sustainer, leaving the spent booster to descend on its own recovery system.",
    stat: "Booster → sustainer",
    side: "right",
    points: [0.55],
  },
  {
    label: "Lower stage",
    title: "Booster avionics",
    copy: "A second avionics bay sits below the interstage. The booster carries its own electronics and power alongside its recovery hardware.",
    stat: "Dedicated lower-stage avionics",
    side: "left",
    points: [0.60],
  },
  {
    label: "First-stage propulsion",
    title: "Booster stage",
    copy: "The lower motor provides the initial lift for the complete vehicle. Once its work is done, the upper stage carries on without the mass of the booster.",
    stat: "First powered stage",
    side: "right",
    points: [0.86],
  },
] as const;

export default function DullahanScroll() {
  const runway = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const callout = useRef<HTMLElement>(null);
  const [cardHeight, setCardHeight] = useState(280);
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"auto" | "exterior" | "section">("auto");
  const navVisible = useNavVisible();
  const sectioned = view === "section" || (view === "auto" && active > 0);
  const annotation = annotations[active];
  const point = annotation.points.reduce((sum, value) => sum + value, 0) / annotation.points.length;
  const [geometry, setGeometry] = useState({ width: 1280, height: 720 });
  const mobile = geometry.width < 760;
  const compact = geometry.height < 600 && !mobile;
  const rocketTop = mobile ? 138 : compact ? 96 : 116;
  const rocketHeight = mobile
    ? Math.max(120, geometry.height - rocketTop - (geometry.width < 360 ? 320 : 290))
    : Math.max(160, geometry.height - rocketTop - 70);
  const rocketX = mobile ? geometry.width * 0.5 : geometry.width / 2;
  const cardWidth = mobile ? geometry.width - 40 : Math.min(350, geometry.width * 0.30);
  const gutter = geometry.width >= 1100 ? 64 : 24;
  const cardX = annotation.side === "left" ? gutter : geometry.width - gutter - cardWidth;
  const targetY = rocketTop + rocketHeight * point;
  const cardY = Math.max(
    (compact ? 138 : 164) + cardHeight / 2,
    Math.min(geometry.height - 48 - cardHeight / 2, targetY),
  );
  const lineX = annotation.side === "left" ? cardX + cardWidth : cardX;

  useEffect(() => {
    const node = callout.current;
    if (!node) return;
    const observer = new ResizeObserver(() => setCardHeight(node.offsetHeight));
    observer.observe(node);
    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    const runwayNode = runway.current;
    const stageNode = stage.current;
    if (!runwayNode || !stageNode) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = runwayNode.getBoundingClientRect();
      const scrollDistance = bounds.height - stageNode.clientHeight;
      const progress = Math.max(0, Math.min(1, -bounds.top / Math.max(1, scrollDistance)));
      setActive(Math.min(annotations.length - 1, Math.floor(progress * annotations.length)));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(() => {
      setGeometry({ width: stageNode.clientWidth, height: stageNode.clientHeight });
      schedule();
    });
    observer.observe(stageNode);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="dullahan" className={styles.section} aria-labelledby="dullahan-title">
      <header className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>Experimental flight · Vehicle 04</p>
          <h2 id="dullahan-title">Dullahan</h2>
          <p className={styles.description}>
            HiPR&apos;s two-stage altitude-attempt rocket. Built to explore staged
            flight, with a target apogee of 6.4 kilometres.
          </p>
        </div>
        <div className={styles.status}>
          <p className={styles.eyebrow}>Next launch planned</p>
          <p className={styles.date}><time dateTime="2026-09-29">29 September 2026</time></p>
          <p>The first launch attempt was scrubbed due to weather.</p>
        </div>
      </header>

      <div ref={runway} className={styles.runway}>
        <div ref={stage} className={styles.stage}>
          <div className={`${styles.stageHeading} ${navVisible ? styles.navVisible : ""}`}>
            <p className={styles.eyebrow}>Experimental flight · 2026</p>
            <div><p className={styles.stageName}>Dullahan</p><p className={styles.eyebrow}>Scroll to explore</p></div>
            <p className={styles.eyebrow}>Two stages · 6.4 km target</p>
          </div>

          <div className={styles.viewControls} role="group" aria-label="Dullahan render view">
            <button type="button" aria-pressed={!sectioned} onClick={() => setView("exterior")}>Exterior</button>
            <button type="button" aria-pressed={sectioned} onClick={() => setView("section")}>Y–X section</button>
          </div>

          <div className={styles.rocket} style={{ left: rocketX, top: rocketTop, height: rocketHeight, width: rocketHeight * 180 / 1780 }}>
            {/* Rotate and frame the original renders without resampling the supplied CAD images. */}
            <svg viewBox="0 0 180 1780" role="img" aria-label={`Dullahan ${sectioned ? "Y–X section" : "exterior"} render`}>
              <image className={styles.render} style={{ opacity: sectioned ? 0 : 1 }} href={withBasePath("/rockets/dullahan-exterior.png")} width="2699" height="1518" transform="matrix(0 1 -1 0 848 -430)" />
              <image className={styles.render} style={{ opacity: sectioned ? 1 : 0 }} href={withBasePath("/rockets/dullahan-section.png")} width="2699" height="1518" transform="matrix(0 1 -1 0 848 -430)" />
            </svg>
          </div>

          <svg className={styles.leaders} viewBox={`0 0 ${geometry.width} ${geometry.height}`} aria-hidden="true">
              {annotation.points.map((position) => {
                const y = rocketTop + rocketHeight * position;
                const elbowX = lineX + (annotation.side === "left" ? 36 : -36);
                return (
                  <g key={`${active}-${position}`}>
                    <path d={mobile ? `M ${rocketX + 38} ${y} H ${rocketX}` : `M ${lineX} ${cardY} H ${elbowX} L ${rocketX} ${y}`} />
                    <circle cx={rocketX} cy={y} r="3" />
                  </g>
                );
              })}
          </svg>

          <article ref={callout} key={active} aria-hidden="true" className={`${styles.callout} ${annotation.side === "right" ? styles.right : ""}`} style={mobile ? { top: rocketTop + rocketHeight + 12 } : { left: cardX, top: cardY, width: cardWidth }}>
            <p className={styles.eyebrow}>{annotation.label}</p>
            <h3>{annotation.title}</h3>
            <p className={styles.copy}>{annotation.copy}</p>
            <p className={styles.stat}>{annotation.stat}</p>
          </article>

          <div className={styles.progress} aria-hidden="true">
            <span>{String(active + 1).padStart(2, "0")} / 06</span>
            <div>{annotations.map((item, index) => <span key={item.title} className={active === index ? styles.current : ""} />)}</div>
          </div>
        </div>
      </div>

      <ol className={`sr-only ${styles.transcript}`}>
        {annotations.map((item) => <li key={item.title}><h3>{item.title}</h3><p>{item.copy}</p><p>{item.stat}</p></li>)}
      </ol>
    </section>
  );
}
