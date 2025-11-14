"use client";

export default function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0
        bg-[radial-gradient(900px_700px_at_50%_-10%,rgba(99,102,241,0.28),transparent_60%),
            radial-gradient(700px_500px_at_90%_10%,rgba(56,189,248,0.22),transparent_60%),
            radial-gradient(700px_500px_at_10%_80%,rgba(34,197,94,0.18),transparent_60%)]
      " />
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay
        [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.9%22/></svg>')]
      " />
    </div>
  );
}
