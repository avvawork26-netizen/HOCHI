// CSS-only marquee — zero JavaScript animation

const TICKER_TEXT =
  "MADISON ADAMS  ·  FREELANCE TV REPORTER  ·  SOUTH FLORIDA  ·  ";

// Repeat content enough times so the seamless loop works at any viewport
const REPEAT = 6;
const tickerContent = Array(REPEAT).fill(TICKER_TEXT).join("");

export default function BreakingTicker() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-red overflow-hidden h-8 flex items-center">
      {/* Accessibility */}
      <span className="sr-only">
        Madison Adams · Freelance TV Reporter · 60M+ Views · Available for Bookings
      </span>

      {/* Two identical tracks placed end-to-end; first track animates from 0% to -50% = seamless */}
      <div className="ticker-track whitespace-nowrap" aria-hidden="true">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-white pr-0">
          {tickerContent}
          {tickerContent}
        </span>
      </div>
    </div>
  );
}
