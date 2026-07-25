"use client";

import * as React from "react";

/* ----------------------------------------------------------------
 * ScrollReelTestimonials
 * ---------------------------------------------------------------- */

const CELL = 121.33;
const GAP = 8;
const STEP = 3 * (CELL + GAP);

const EXIT_MS = 240;
const SLIDE_MS = 800;

const EASE_INOUT = "cubic-bezier(0.65,0,0.35,1)";

const QUOTE_CLASSES =
  "m-0 text-lg font-medium leading-[1.3] tracking-[-0.02em] text-foreground sm:text-[22px]";

const AUTHOR_CLASSES =
  "m-0 text-sm font-medium leading-[1.3] text-muted-foreground";

const FEATURED_SHADOW =
  "0 1.008px 0.705px -0.563px rgba(0,0,0,0.18), 0 2.389px 1.672px -1.125px rgba(0,0,0,0.17), 0 4.357px 3.05px -1.688px rgba(0,0,0,0.17), 0 7.244px 5.07px -2.25px rgba(0,0,0,0.16), 0 11.698px 8.188px -2.813px rgba(0,0,0,0.15), 0 19.148px 13.404px -3.375px rgba(0,0,0,0.13), 0 32.972px 23.08px -3.938px rgba(0,0,0,0.09), 0 60px 42px -4.5px rgba(0,0,0,0.02)";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}


function Cell() {
  return (
    <div
      aria-hidden="true"
      className="shrink-0 rounded-xl border border-border bg-gradient-to-b from-secondary to-card blur-[1px]"
      style={{
        width: CELL,
        height: CELL,
      }}
    />
  );
}


function Featured({ src, alt }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-xl bg-muted"
      style={{
        width: CELL,
        height: CELL,
        boxShadow: FEATURED_SHADOW,
      }}
    >
      <img
        src={src}
        alt={alt || ""}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-white mix-blend-saturation" />

      <div
        className="pointer-events-none absolute inset-0 blur-[6px] mix-blend-overlay"
        style={{
          background:
            "linear-gradient(220.99deg, rgba(108,92,255,0) 32%, rgb(108,92,255) 41%, rgb(173,177,255) 47%, rgba(130,189,237,0.57) 54%, rgba(130,189,237,0) 65%)",
        }}
      />
    </div>
  );
}


function Chars({ text, startIndex, staggerMs }) {
  let index = startIndex;

  return (
    <>
      {text.split(" ").map((word, wi) => {
        const result = (
          <span key={wi} className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, ci) => {
              const delay = index * staggerMs;
              index++;

              return (
                <span
                  key={ci}
                  className="scroll-reel-char"
                  style={{
                    animationDelay: `${delay}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );

        if (wi < text.split(" ").length - 1) {
          index++;
        }

        return (
          <React.Fragment key={wi}>
            {result}
            {wi < text.split(" ").length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </>
  );
}


export function ScrollReelTestimonials({
  testimonials,
  charStaggerMs = 6,
  className,
}) {
  const [index, setIndex] = React.useState(0);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [exiting, setExiting] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const animating = React.useRef(false);
  const timeouts = React.useRef([]);

  const count = testimonials.length;


  React.useEffect(() => {
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMounted(true))
    );

    return () => {
      cancelAnimationFrame(raf);
      timeouts.current.forEach(clearTimeout);
    };
  }, []);


  const paginate = React.useCallback(
    (direction) => {
      if (animating.current) return;

      const next = index + direction;

      if (next < 0 || next >= count) return;

      animating.current = true;

      setIndex(next);
      setExiting(true);

      timeouts.current.push(
        setTimeout(() => {
          setDisplayIndex(next);
          setExiting(false);
        }, EXIT_MS)
      );

      timeouts.current.push(
        setTimeout(() => {
          animating.current = false;
        }, SLIDE_MS)
      );
    },
    [index, count]
  );


  const middleItems = React.useMemo(() => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({ type: "cell" });
    }

    testimonials.forEach((_, i) => {
      items.push({
        type: "featured",
        i,
      });

      if (i < count - 1) {
        items.push(
          { type: "cell" },
          { type: "cell" }
        );
      }
    });


    for (let i = 0; i < 3; i++) {
      items.push({ type: "cell" });
    }

    return items;
  }, [testimonials, count]);


  const sideCellCount = 4 + 2 * count;
  const centerIndex = (count - 1) / 2;

  const middleY = (centerIndex - index) * STEP;
  const sideY = -middleY;


  const colStyle = (y) => ({
    transform: `translateY(${y}px)`,
    transition: mounted
      ? `transform ${SLIDE_MS}ms ${EASE_INOUT}`
      : "none",
  });


  const current = testimonials[displayIndex];


  return (
    <div
      role="region"
      aria-label="Testimonials"
      tabIndex={0}
      className={cn(
        "relative flex w-full max-w-[1060px] flex-col overflow-hidden rounded-xl border bg-muted md:flex-row",
        className
      )}
    >
      <div className="relative h-56 w-full overflow-hidden md:h-auto md:w-[380px]">

        <div className="absolute inset-0 flex items-center justify-center gap-2">

          <div
            className="flex flex-col gap-2"
            style={colStyle(sideY)}
          >
            {Array.from({
              length: sideCellCount,
            }).map((_, i) => (
              <Cell key={i}/>
            ))}
          </div>


          <div
            className="flex flex-col gap-2"
            style={colStyle(middleY)}
          >
            {middleItems.map((item, i) =>
              item.type === "featured" ? (
                <Featured
                  key={i}
                  src={testimonials[item.i].image}
                  alt={testimonials[item.i].alt}
                />
              ) : (
                <Cell key={i}/>
              )
            )}
          </div>


          <div
            className="flex flex-col gap-2"
            style={colStyle(sideY)}
          >
            {Array.from({
              length: sideCellCount,
            }).map((_, i)=>(
              <Cell key={i}/>
            ))}
          </div>

        </div>

      </div>


      <div className="flex flex-1 flex-col justify-between px-5 py-7">

        <div>

          <svg
            className="h-12 w-12 text-muted-foreground/40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.58 17.32C3.55 16.23 3 15 3 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62..." />
          </svg>


          <p className={QUOTE_CLASSES}>
            <Chars
              text={current.quote}
              startIndex={0}
              staggerMs={charStaggerMs}
            />
          </p>


          <p className={AUTHOR_CLASSES}>
            <Chars
              text={current.author}
              startIndex={current.quote.length + 6}
              staggerMs={charStaggerMs}
            />
          </p>

        </div>


        <div className="mt-6 flex gap-2">

          <button
            onClick={()=>paginate(-1)}
            disabled={index===0}
            className="h-8 w-8 rounded-full border"
          >
            ‹
          </button>

          <button
            onClick={()=>paginate(1)}
            disabled={index===count-1}
            className="h-8 w-8 rounded-full border"
          >
            ›
          </button>

        </div>


      </div>

    </div>
  );
}

export default ScrollReelTestimonials;