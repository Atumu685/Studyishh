"use client";

import { useState, useMemo, useRef, useEffect } from "react";

// ── decorative botanical background (Hidden Love) ────────────────────────────

function BookDecor() {
  // five-petal blossom
  const Blossom = ({ cx, cy, r, pFill, cFill, rotate = 0 }: {
    cx: number; cy: number; r: number; pFill: string; cFill: string; rotate?: number;
  }) => (
    <g transform={`rotate(${rotate}, ${cx}, ${cy})`}>
      {[0, 72, 144, 216, 288].map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <ellipse key={a}
            cx={cx + Math.cos(rad) * r * 1.15} cy={cy + Math.sin(rad) * r * 1.15}
            rx={r} ry={r * 0.62}
            fill={pFill} transform={`rotate(${a + 90}, ${cx + Math.cos(rad) * r * 1.15}, ${cy + Math.sin(rad) * r * 1.15})`}
            opacity="0.90" />
        );
      })}
      <circle cx={cx} cy={cy} r={r * 0.48} fill={cFill} opacity="0.95" />
    </g>
  );

  // single leaf shape
  const Leaf = ({ x, y, w, h, fill, rotate = 0 }: { x: number; y: number; w: number; h: number; fill: string; rotate?: number }) => (
    <ellipse cx={x} cy={y} rx={w} ry={h} fill={fill} opacity="0.55"
      transform={`rotate(${rotate}, ${x}, ${y})`} />
  );

  // delicate 4-petal citrus flower
  const CitrusFlower = ({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) => (
    <g>
      {[0, 90, 180, 270].map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <ellipse key={a}
            cx={cx + Math.cos(rad) * r * 0.9} cy={cy + Math.sin(rad) * r * 0.9}
            rx={r * 0.55} ry={r}
            fill={fill} transform={`rotate(${a}, ${cx + Math.cos(rad) * r * 0.9}, ${cy + Math.sin(rad) * r * 0.9})`}
            opacity="0.80" />
        );
      })}
      <circle cx={cx} cy={cy} r={r * 0.38} fill="#FFF5E0" opacity="0.95" />
    </g>
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* full-bleed botanical scatter */}
      <svg viewBox="0 0 800 600" width="100%" height="100%" fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg" className="opacity-[0.18]" aria-hidden="true">

        {/* ── trailing vines / branches ── */}
        <g className="vine-sway" style={{ animationDelay: "0s" }}>
          <path d="M0 180 C60 160, 100 200, 150 175 S240 140, 280 165 S360 200, 400 180"
            stroke="#8FAB72" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.55" />
        </g>
        <g className="vine-sway" style={{ animationDelay: "1.2s" }}>
          <path d="M800 80 C740 100, 700 70, 650 95 S570 130, 530 105 S450 75, 400 95"
            stroke="#8FAB72" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.50" />
        </g>
        <g className="vine-sway" style={{ animationDelay: "0.6s" }}>
          <path d="M50 520 C110 500, 160 535, 220 515 S320 490, 370 510"
            stroke="#8FAB72" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.45" />
        </g>
        <g className="vine-sway" style={{ animationDelay: "1.8s" }}>
          <path d="M750 470 C700 485, 660 460, 610 478 S530 505, 490 488"
            stroke="#8FAB72" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.45" />
        </g>

        {/* ── leaves along vines ── */}
        <g className="leaf-flutter" style={{ animationDelay: "0.0s" }}><Leaf x={80}  y={172} w={12} h={5.5} fill="#7BA060" rotate={-28} /></g>
        <g className="leaf-flutter" style={{ animationDelay: "0.4s" }}><Leaf x={130} y={180} w={10} h={4.5} fill="#90B875" rotate={15}  /></g>
        <g className="leaf-flutter" style={{ animationDelay: "0.9s" }}><Leaf x={200} y={162} w={11} h={5}   fill="#7BA060" rotate={-20} /></g>
        <g className="leaf-flutter" style={{ animationDelay: "1.3s" }}><Leaf x={340} y={172} w={9}  h={4}   fill="#90B875" rotate={25}  /></g>
        <g className="leaf-flutter" style={{ animationDelay: "0.2s" }}><Leaf x={660} y={90}  w={11} h={5}   fill="#7BA060" rotate={12}  /></g>
        <g className="leaf-flutter" style={{ animationDelay: "0.7s" }}><Leaf x={720} y={76}  w={10} h={4.5} fill="#90B875" rotate={-18} /></g>
        <g className="leaf-flutter" style={{ animationDelay: "1.1s" }}><Leaf x={580} y={110} w={9}  h={4}   fill="#7BA060" rotate={22}  /></g>
        <g className="leaf-flutter" style={{ animationDelay: "0.5s" }}><Leaf x={90}  y={510} w={11} h={4.5} fill="#7BA060" rotate={-15} /></g>
        <g className="leaf-flutter" style={{ animationDelay: "1.5s" }}><Leaf x={280} y={505} w={9}  h={4}   fill="#90B875" rotate={20}  /></g>
        <g className="leaf-flutter" style={{ animationDelay: "0.8s" }}><Leaf x={620} y={475} w={10} h={4.5} fill="#7BA060" rotate={-22} /></g>

        {/* ── cherry / peach blossoms ── */}
        <g className="blossom-float" style={{ animationDelay: "0.0s" }}><Blossom cx={60}  cy={60}  r={16} pFill="#FFB7C5" cFill="#FDEEE8" /></g>
        <g className="blossom-float" style={{ animationDelay: "0.6s" }}><Blossom cx={180} cy={30}  r={13} pFill="#FFAEC9" cFill="#FDE8E0" rotate={20} /></g>
        <g className="blossom-float" style={{ animationDelay: "1.2s" }}><Blossom cx={400} cy={20}  r={14} pFill="#FFE4EE" cFill="#FDF0E8" rotate={10} /></g>
        <g className="blossom-float" style={{ animationDelay: "1.8s" }}><Blossom cx={620} cy={40}  r={15} pFill="#FFB3C6" cFill="#FDE8E0" rotate={-15} /></g>
        <g className="blossom-float" style={{ animationDelay: "0.3s" }}><Blossom cx={760} cy={55}  r={12} pFill="#FFB7C5" cFill="#FDEEE8" rotate={30} /></g>
        <g className="blossom-float" style={{ animationDelay: "0.9s" }}><Blossom cx={30}  cy={300} r={13} pFill="#FFAEC9" cFill="#FDE8E0" rotate={5} /></g>
        <g className="blossom-float" style={{ animationDelay: "1.5s" }}><Blossom cx={780} cy={280} r={14} pFill="#FFB7C5" cFill="#FDEEE8" rotate={-10} /></g>
        <g className="blossom-float" style={{ animationDelay: "2.1s" }}><Blossom cx={100} cy={560} r={15} pFill="#FFB3C6" cFill="#FDE8E0" rotate={18} /></g>
        <g className="blossom-float" style={{ animationDelay: "0.4s" }}><Blossom cx={700} cy={545} r={13} pFill="#FFE4EE" cFill="#FDF0E8" rotate={-22} /></g>
        <g className="blossom-float" style={{ animationDelay: "1.0s" }}><Blossom cx={400} cy={580} r={14} pFill="#FFAEC9" cFill="#FDE8E0" rotate={8} /></g>

        {/* ── citrus blossoms (Hidden Love motif) ── */}
        <g className="citrus-bloom" style={{ animationDelay: "0.0s" }}><CitrusFlower cx={260} cy={45}  r={10} fill="#FDE8D0" /></g>
        <g className="citrus-bloom" style={{ animationDelay: "0.9s" }}><CitrusFlower cx={540} cy={25}  r={9}  fill="#FFD1DC" /></g>
        <g className="citrus-bloom" style={{ animationDelay: "1.8s" }}><CitrusFlower cx={750} cy={380} r={10} fill="#FDE8D0" /></g>
        <g className="citrus-bloom" style={{ animationDelay: "0.5s" }}><CitrusFlower cx={25}  cy={430} r={9}  fill="#FFD1DC" /></g>
        <g className="citrus-bloom" style={{ animationDelay: "1.3s" }}><CitrusFlower cx={480} cy={575} r={10} fill="#FDE8D0" /></g>

        {/* ── scattered petals ── */}
        {([
          [150, 90, -35], [310, 55, 20], [470, 70, -15], [680, 110, 40],
          [50, 200, 25], [770, 195, -30], [130, 480, 15], [640, 500, -20],
          [350, 540, 30], [220, 300, -40], [580, 320, 18],
        ] as [number, number, number][]).map(([x, y, rot], i) => (
          <ellipse key={i} cx={x} cy={y} rx={7} ry={4.5}
            fill="#F5C0A8" opacity="0.55"
            transform={`rotate(${rot}, ${x}, ${y})`}
            className="petal-drift"
            style={{ animationDelay: `${i * 0.65}s`, animationDuration: `${6 + (i % 3)}s` }}
          />
        ))}

        {/* ── extra mid-page vines ── */}
        <g className="vine-sway" style={{ animationDelay: "2.2s" }}>
          <path d="M0 380 C50 360, 90 390, 140 368 S220 340, 260 360"
            stroke="#8FAB72" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.42" />
        </g>
        <g className="vine-sway" style={{ animationDelay: "0.8s" }}>
          <path d="M800 300 C755 315, 720 295, 675 310 S600 330, 560 312"
            stroke="#8FAB72" strokeWidth="1.0" strokeLinecap="round" fill="none" opacity="0.40" />
        </g>
        <g className="leaf-flutter" style={{ animationDelay: "0.3s" }}><ellipse cx={55}  cy={370} rx={9} ry={4}   fill="#7BA060" opacity="0.48" transform="rotate(-30,55,370)" /></g>
        <g className="leaf-flutter" style={{ animationDelay: "1.0s" }}><ellipse cx={120} cy={375} rx={8} ry={3.5} fill="#90B875" opacity="0.45" transform="rotate(18,120,375)" /></g>
        <g className="leaf-flutter" style={{ animationDelay: "0.6s" }}><ellipse cx={200} cy={358} rx={8} ry={3.5} fill="#7BA060" opacity="0.46" transform="rotate(-22,200,358)" /></g>
        <g className="leaf-flutter" style={{ animationDelay: "1.4s" }}><ellipse cx={720} cy={302} rx={8} ry={3.5} fill="#90B875" opacity="0.44" transform="rotate(15,720,302)" /></g>
        <g className="leaf-flutter" style={{ animationDelay: "0.9s" }}><ellipse cx={645} cy={316} rx={8} ry={3.5} fill="#7BA060" opacity="0.43" transform="rotate(-18,645,316)" /></g>

        {/* ── extra mid-page blossoms ── */}
        <g className="blossom-float" style={{ animationDelay: "1.6s" }}><Blossom cx={300} cy={200} r={11} pFill="#FFB7C5" cFill="#FDEEE8" rotate={15} /></g>
        <g className="blossom-float" style={{ animationDelay: "0.7s" }}><Blossom cx={500} cy={180} r={10} pFill="#FFB3C6" cFill="#FDE8E0" rotate={-8} /></g>
        <g className="blossom-float" style={{ animationDelay: "2.0s" }}><Blossom cx={160} cy={350} r={12} pFill="#FFE4EE" cFill="#FDF0E8" rotate={22} /></g>
        <g className="blossom-float" style={{ animationDelay: "1.3s" }}><Blossom cx={640} cy={370} r={11} pFill="#FFAEC9" cFill="#FDE8E0" rotate={-18} /></g>
        <g className="citrus-bloom" style={{ animationDelay: "2.4s" }}><CitrusFlower cx={130} cy={220} r={9}  fill="#FDE8D0" /></g>
        <g className="citrus-bloom" style={{ animationDelay: "1.1s" }}><CitrusFlower cx={670} cy={210} r={9}  fill="#FFD1DC" /></g>
        <g className="citrus-bloom" style={{ animationDelay: "0.4s" }}><CitrusFlower cx={380} cy={400} r={10} fill="#FDE8D0" /></g>

        {/* ── gold sparkle dots ── */}
        {([
          [320, 15], [88, 138], [712, 145], [45, 365], [755, 360],
          [240, 565], [560, 555], [400, 300], [170, 250], [630, 255],
          [300, 450], [500, 440], [80, 460], [720, 450],
        ] as [number, number][]).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={2.5} fill="#D4A848"
            className="gold-twinkle"
            style={{ animationDelay: `${i * 0.18}s`, animationDuration: `${2 + (i % 4) * 0.4}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

// ── falling flowers ───────────────────────────────────────────────────────────

function SmallBlossom({ size, fill }: { size: number; fill: string }) {
  // Cherry blossom: 5 heart-shaped petals with a notch at the tip
  const petals = [0, 72, 144, 216, 288];
  // stamen tips radiating out
  const stamens = [0, 51, 102, 153, 204, 255, 306];
  return (
    <svg viewBox="-16 -16 32 32" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      {petals.map((a) => (
        <path
          key={a}
          // heart-shaped petal: two lobes meeting at base, notch at tip
          d="M0 0 C-3.5 -1.5,-6.5 -6,-4 -11 C-2 -14, 0 -12, 0 -10 C0 -12, 2 -14, 4 -11 C6.5 -6, 3.5 -1.5, 0 0 Z"
          fill={fill}
          opacity="0.92"
          transform={`rotate(${a})`}
        />
      ))}
      {/* highlight on each petal */}
      {petals.map((a) => (
        <path
          key={`h${a}`}
          d="M0 -1 C-1.5 -3,-3 -6,-2 -9 C-1 -11, 0 -10, 0 -9"
          stroke="white" strokeWidth="0.7" opacity="0.45" strokeLinecap="round"
          transform={`rotate(${a})`}
        />
      ))}
      {/* stamens */}
      {stamens.map((a) => {
        const r = (a * Math.PI) / 180;
        return (
          <g key={`s${a}`}>
            <line x1={0} y1={0} x2={Math.cos(r) * 5.5} y2={Math.sin(r) * 5.5}
              stroke="#C8903A" strokeWidth="0.55" opacity="0.65" />
            <circle cx={Math.cos(r) * 5.8} cy={Math.sin(r) * 5.8} r={0.85}
              fill="#E8A840" opacity="0.85" />
          </g>
        );
      })}
      {/* center */}
      <circle cx={0} cy={0} r={2.8} fill="#FFF8D0" opacity="0.95" />
      <circle cx={-0.8} cy={-0.8} r={1.0} fill="white" opacity="0.55" />
    </svg>
  );
}

// left%, size, fallDur, delay, fill
const FALLING_FLOWER_DATA: [number, number, number, number, string][] = [
  // left corner cluster (~16–36%)
  [16, 20, 8.0,   0.0,  "#FFB7C5"],
  [18, 15, 10.0, -2.5,  "#FFAEC9"],
  [20, 22, 7.5,  -5.8,  "#FFD1DC"],
  [22, 17, 9.5,  -1.2,  "#FFC8D8"],
  [24, 21, 8.5,  -8.0,  "#FF9EB5"],
  [26, 14, 10.8, -3.8,  "#FFE4EE"],
  [28, 23, 7.8,  -11.0, "#FFAEC9"],
  [30, 18, 9.2,  -2.0,  "#FFD1DC"],
  [32, 16, 10.2, -6.5,  "#FFB7C5"],
  [34, 19, 8.8,  -0.5,  "#FFB3C6"],
  [36, 24, 7.2,  -9.5,  "#FFE4EE"],
  [19, 15, 11.0, -4.2,  "#FFAEC9"],
  [23, 21, 8.2,  -12.0, "#FFD1DC"],
  [27, 13, 9.8,  -7.0,  "#FFB7C5"],
  [31, 20, 8.6,  -14.0, "#FFB3C6"],
  [17, 18, 10.4, -3.0,  "#FFD1DC"],
  [25, 16, 7.9,  -10.5, "#FFE4EE"],
  [33, 22, 9.1,  -1.8,  "#FFAEC9"],
  [21, 14, 11.2, -6.0,  "#FFB7C5"],
  [29, 19, 8.3,  -13.5, "#FFD1DC"],
  // right corner cluster (~64–84%)
  [64, 20, 8.0,  -1.5,  "#FFB7C5"],
  [66, 16, 10.0, -4.0,  "#FFAEC9"],
  [68, 23, 7.5,  -7.0,  "#FFD1DC"],
  [70, 17, 9.5,  -2.8,  "#FFC8D8"],
  [72, 21, 8.5,  -9.5,  "#FF9EB5"],
  [74, 14, 10.8, -0.8,  "#FFE4EE"],
  [76, 24, 7.8,  -12.5, "#FFAEC9"],
  [78, 18, 9.2,  -3.5,  "#FFD1DC"],
  [80, 16, 10.2, -6.0,  "#FFB7C5"],
  [82, 20, 8.8,  -1.0,  "#FFB3C6"],
  [84, 15, 7.2,  -10.5, "#FFE4EE"],
  [65, 22, 11.0, -5.2,  "#FFAEC9"],
  [69, 13, 9.8,  -8.5,  "#FFB7C5"],
  [73, 21, 8.4,  -14.0, "#FFD1DC"],
  [77, 18, 10.6, -2.5,  "#FFB3C6"],
  [81, 16, 7.6,  -11.5, "#FFE4EE"],
  [67, 19, 9.0,  -4.8,  "#FFAEC9"],
  [71, 14, 10.4, -7.5,  "#FFD1DC"],
  [75, 22, 8.1,  -0.3,  "#FFB7C5"],
  [83, 17, 9.6,  -13.0, "#FF9EB5"],
];

function FallingFlowers() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      {FALLING_FLOWER_DATA.map(([left, size, dur, delay, fill], i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: `${left}%`,
            animation: `flower-fall ${dur}s linear ${delay}s infinite`,
          }}
        >
          <SmallBlossom size={size} fill={fill} />
        </div>
      ))}
    </div>
  );
}

// ── floral corner ornament ────────────────────────────────────────────────────

function FloralCorner({ flip = false, flipY = false }: { flip?: boolean; flipY?: boolean }) {
  const sx = flip ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <svg
      viewBox="0 0 64 64" width={64} height={64} fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `scale(${sx}, ${sy})` }}
      aria-hidden="true"
    >
      {/* main stem curving from corner */}
      <path d="M4 60 C8 40, 20 28, 40 6" stroke="#8FAB72" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.75" />
      {/* side branch */}
      <path d="M18 38 C24 34, 32 36, 36 30" stroke="#8FAB72" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.65" />
      <path d="M28 22 C32 18, 38 20, 42 15" stroke="#8FAB72" strokeWidth="1.0" strokeLinecap="round" fill="none" opacity="0.60" />

      {/* leaves */}
      <ellipse cx="12" cy="50" rx="7" ry="3.5" fill="#7BA060" opacity="0.60" transform="rotate(-50, 12, 50)" />
      <ellipse cx="22" cy="36" rx="6" ry="3"   fill="#90B875" opacity="0.55" transform="rotate(-30, 22, 36)" />
      <ellipse cx="33" cy="24" rx="6" ry="2.8" fill="#7BA060" opacity="0.58" transform="rotate(-60, 33, 24)" />
      <ellipse cx="40" cy="14" rx="5" ry="2.5" fill="#90B875" opacity="0.55" transform="rotate(-20, 40, 14)" />
      {/* branch leaves */}
      <ellipse cx="30" cy="34" rx="5" ry="2.5" fill="#7BA060" opacity="0.52" transform="rotate(10, 30, 34)" />
      <ellipse cx="38" cy="28" rx="5" ry="2.5" fill="#90B875" opacity="0.50" transform="rotate(-40, 38, 28)" />

      {/* large blossom at top of stem */}
      {[0, 72, 144, 216, 288].map((a) => {
        const rad = (a * Math.PI) / 180;
        const cx = 40 + Math.cos(rad) * 9;
        const cy = 6  + Math.sin(rad) * 9;
        return (
          <ellipse key={a} cx={cx} cy={cy} rx={5.5} ry={3.5}
            fill="#F5C0A8" opacity="0.88"
            transform={`rotate(${a + 90}, ${cx}, ${cy})`} />
        );
      })}
      <circle cx="40" cy="6" r="3.2" fill="#FDE8D8" opacity="0.95" />
      <circle cx="41" cy="4.8" r="1.2" fill="white" opacity="0.7" />

      {/* small blossom on side branch */}
      {[0, 90, 180, 270].map((a) => {
        const rad = (a * Math.PI) / 180;
        const cx = 36 + Math.cos(rad) * 5.5;
        const cy = 30 + Math.sin(rad) * 5.5;
        return (
          <ellipse key={a} cx={cx} cy={cy} rx={3} ry={4.5}
            fill="#FFD1DC" opacity="0.82"
            transform={`rotate(${a}, ${cx}, ${cy})`} />
        );
      })}
      <circle cx="36" cy="30" r="2" fill="#FFF5E0" opacity="0.92" />

      {/* tiny blossom mid-stem */}
      {[0, 72, 144, 216, 288].map((a) => {
        const rad = (a * Math.PI) / 180;
        const cx = 42 + Math.cos(rad) * 5.5;
        const cy = 15 + Math.sin(rad) * 5.5;
        return (
          <ellipse key={a} cx={cx} cy={cy} rx={3} ry={2}
            fill="#FFB7C5" opacity="0.80"
            transform={`rotate(${a + 90}, ${cx}, ${cy})`} />
        );
      })}
      <circle cx="42" cy="15" r="1.8" fill="#FDE0D0" opacity="0.92" />

      {/* gold pollen dots */}
      <circle cx="8"  cy="56" r="1.5" fill="#D4A848" opacity="0.55" />
      <circle cx="16" cy="44" r="1.5" fill="#D4A848" opacity="0.50" />
      <circle cx="26" cy="30" r="1.3" fill="#D4A848" opacity="0.48" />

      {/* scattered petals */}
      <ellipse cx="6"  cy="44" rx="4" ry="2.5" fill="#F5C0A8" opacity="0.45" transform="rotate(-60, 6, 44)" />
      <ellipse cx="14" cy="32" rx="3.5" ry="2" fill="#F5C0A8" opacity="0.40" transform="rotate(20, 14, 32)" />
    </svg>
  );
}

// ── data ──────────────────────────────────────────────────────────────────────

interface MathSite {
  id: string;
  name: string;
  url: string;
  description: string;
  categories: string[];
  levels: string[];
  emoji: string;
  featured?: boolean;
}

const MATH_SITES: MathSite[] = [
  {
    id: "3b1b",
    name: "3Blue1Brown",
    url: "https://www.3blue1brown.com",
    description: "Stunning animated videos that build deep intuition for calculus, linear algebra, and number theory.",
    categories: ["Calculus", "Algebra", "Visualization", "Videos"],
    levels: ["High School", "College"],
    emoji: "🎬",
    featured: true,
  },
  {
    id: "act-prep",
    name: "ACT Official Prep",
    url: "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation.html",
    description: "Free official ACT practice tests and prep materials from the test maker. Covers all math topics tested on the ACT including pre-algebra, algebra, geometry, and trigonometry.",
    categories: ["SAT/ACT", "Algebra", "Geometry"],
    levels: ["High School"],
    emoji: "📝",
  },
  {
    id: "alcumus",
    name: "Alcumus",
    url: "https://artofproblemsolving.com/alcumus",
    description: "AoPS's free adaptive problem-solving system that adjusts difficulty in real time. Hundreds of competition-style problems across every math topic, designed to build the skills needed for AMC, MATHCOUNTS, and beyond.",
    categories: ["Competition", "Problem Solving", "Algebra", "Geometry"],
    levels: ["Middle School", "High School"],
    emoji: "⚔️",
  },
  {
    id: "aops",
    name: "Art of Problem Solving",
    url: "https://artofproblemsolving.com/community",
    description: "Home to a massive free wiki of competition problems and solutions, active community forums, and the free Alcumus practice system. The community and wiki alone make it an invaluable free resource for any student serious about math competitions.",
    categories: ["Algebra", "Geometry", "Problem Solving", "Competition"],
    levels: ["Middle School", "High School"],
    emoji: "🏆",
    featured: true,
  },
  {
    id: "collegeboard-sat",
    name: "College Board — Official SAT Practice",
    url: "https://satsuite.collegeboard.org/sat/practice-preparation",
    description: "Free official full-length digital SAT practice tests straight from the test maker. Includes Bluebook, the same app used on test day, so you practice in the exact environment you'll face.",
    categories: ["SAT/ACT", "Algebra", "Problem Solving"],
    levels: ["High School"],
    emoji: "📋",
  },
  {
    id: "corbettmaths",
    name: "Corbettmaths",
    url: "https://corbettmaths.com",
    description: "Videos, practice questions, and worksheets covering the full secondary school math curriculum.",
    categories: ["Algebra", "Geometry", "Statistics", "Videos"],
    levels: ["Middle School", "High School"],
    emoji: "📖",
  },
  {
    id: "desmos",
    name: "Desmos",
    url: "https://www.desmos.com",
    description: "Beautiful, interactive graphing calculator and classroom activities. See equations come alive with stunning visuals.",
    categories: ["Algebra", "Geometry", "Visualization"],
    levels: ["Middle School", "High School", "College"],
    emoji: "📈",
    featured: true,
  },
  {
    id: "evan-chen",
    name: "Evan Chen — Olympiad Resources",
    url: "https://evanchen.cc/olympiad.html",
    description: "Free handouts, notes, and problem sets from a two-time USA IMO team member and coach. Widely regarded as some of the best freely available olympiad training material for serious competitors.",
    categories: ["Competition", "Problem Solving", "Geometry"],
    levels: ["High School"],
    emoji: "✍️",
  },
  {
    id: "geogebra",
    name: "GeoGebra",
    url: "https://www.geogebra.org",
    description: "Dynamic math software for geometry, algebra, calculus and statistics with hands-on interactive tools.",
    categories: ["Geometry", "Algebra", "Calculus", "Visualization"],
    levels: ["Middle School", "High School", "College"],
    emoji: "📐",
    featured: true,
  },
  {
    id: "khan-academy",
    name: "Khan Academy",
    url: "https://www.khanacademy.org/math",
    description: "Free, world-class math education for anyone, anywhere — from basic arithmetic to multivariable calculus with exercises and videos.",
    categories: ["Algebra", "Geometry", "Calculus", "Statistics"],
    levels: ["Elementary", "Middle School", "High School", "College"],
    emoji: "📚",
    featured: true,
  },
  {
    id: "khan-sat",
    name: "Khan Academy — Official SAT Prep",
    url: "https://www.khanacademy.org/sat",
    description: "The official free SAT prep, built in partnership with College Board. Personalised practice, full-length digital SAT tests, and targeted lessons covering every math skill on the exam.",
    categories: ["SAT/ACT", "Algebra", "Problem Solving"],
    levels: ["High School"],
    emoji: "✏️",
    featured: true,
  },
  {
    id: "maa-amc",
    name: "MAA AMC",
    url: "https://maa.org/math-competitions",
    description: "Official home of the AMC 8, AMC 10, AMC 12, AIME, and USAMO competitions. Includes past exams with answer keys — the essential practice resource for any serious competitor.",
    categories: ["Competition", "Problem Solving", "Algebra", "Geometry"],
    levels: ["Middle School", "High School"],
    emoji: "📜",
  },
  {
    id: "math-is-fun",
    name: "Math is Fun",
    url: "https://www.mathsisfun.com",
    description: "Clear, friendly explanations of math concepts with games, puzzles, and worksheets. Perfect for younger students.",
    categories: ["Algebra", "Geometry", "Statistics"],
    levels: ["Elementary", "Middle School", "High School"],
    emoji: "🎈",
  },
  {
    id: "mathcounts",
    name: "MATHCOUNTS",
    url: "https://mathcounts.org",
    description: "The official site for one of the most prestigious middle school math competitions in the US. Includes past competition problems, prep materials, and the MATHCOUNTS Club Program for schools.",
    categories: ["Competition", "Problem Solving"],
    levels: ["Middle School"],
    emoji: "🥇",
  },
  {
    id: "mit-ocw",
    name: "MIT OpenCourseWare",
    url: "https://ocw.mit.edu/courses/mathematics/",
    description: "Free MIT math courses — real analysis, linear algebra, probability and more, with lecture notes and problem sets.",
    categories: ["Calculus", "Algebra", "Statistics"],
    levels: ["College"],
    emoji: "🎓",
  },
  {
    id: "nrich",
    name: "NRICH",
    url: "https://nrich.maths.org",
    description: "Rich, challenging math tasks and investigations from Cambridge University. Builds deep mathematical thinking.",
    categories: ["Problem Solving", "Geometry", "Algebra"],
    levels: ["Elementary", "Middle School", "High School"],
    emoji: "🌱",
  },
  {
    id: "numberphile",
    name: "Numberphile",
    url: "https://www.numberphile.com",
    description: "Fascinating videos about numbers and mathematical ideas. Makes math joyful and accessible for everyone.",
    categories: ["Videos", "Problem Solving"],
    levels: ["Middle School", "High School", "College"],
    emoji: "🎥",
  },
  {
    id: "pauls-notes",
    name: "Paul's Online Math Notes",
    url: "https://tutorial.math.lamar.edu",
    description: "Comprehensive notes on algebra, calculus I–III, and differential equations. A lifesaver for college students.",
    categories: ["Algebra", "Calculus"],
    levels: ["High School", "College"],
    emoji: "📝",
  },
  {
    id: "photomath",
    name: "Photomath",
    url: "https://photomath.com",
    description: "Point your camera at any printed or handwritten math problem for an instant, step-by-step solution — completely free. Core scanning and step-by-step explanations are available at no cost, covering arithmetic through calculus, making it a practical tool for understanding the reasoning behind every answer.",
    categories: ["Algebra", "Calculus", "Statistics", "Geometry"],
    levels: ["Elementary", "Middle School", "High School", "College"],
    emoji: "📷",
  },
  {
    id: "uworld-sat",
    name: "UWorld SAT/ACT",
    url: "https://www.uworld.com/sat/",
    description: "Highly detailed answer explanations for SAT and ACT math questions, with a free trial. Known for the best question explanations of any prep platform.",
    categories: ["SAT/ACT", "Algebra", "Problem Solving"],
    levels: ["High School"],
    emoji: "🔍",
  },
  {
    id: "wolfram-alpha",
    name: "Wolfram Alpha",
    url: "https://www.wolframalpha.com",
    description: "Free computational engine that instantly answers math questions, plots graphs, and breaks down results. The free tier covers a huge range of topics — from algebra to calculus — making it a powerful tool for checking answers and exploring concepts.",
    categories: ["Algebra", "Calculus", "Statistics"],
    levels: ["High School", "College"],
    emoji: "🔮",
  },
];

const CATEGORIES = ["All", "Algebra", "Geometry", "Calculus", "Statistics", "Problem Solving", "Visualization", "Videos", "Competition", "SAT/ACT"] as const;
const LEVELS = ["All Levels", "Elementary", "Middle School", "High School", "College"] as const;

// ── smart search ──────────────────────────────────────────────────────────────

function parseQuery(query: string): { levels: string[]; categories: string[] } {
  const q = query.toLowerCase();
  const levels: string[] = [];
  const categories: string[] = [];

  // Grade / level detection
  if (/\b(k-?5|kindergarten|1st|2nd|3rd|4th|5th\s*grade|elementary|primary)\b/.test(q))
    levels.push("Elementary");
  if (/\b(6th|7th|8th|middle\s*school|pre-?algebra|junior\s*high|middle\s*grade)\b/.test(q))
    levels.push("Middle School");
  if (/\b(9th|10th|11th|12th|high\s*school|algebra\s*2|precalc|trig(onometry)?|sophomore|junior|senior|sat\b|act\b)\b/.test(q))
    levels.push("High School");
  if (/\b(college|university|undergrad|calc(ulus)?\s*[23]|linear\s*algebra|diff(erential)?\s*eq|graduate)\b/.test(q))
    levels.push("College");

  // Subject / topic detection
  if (/\b(algebra|equation|linear|quadratic|polynomial|pre-?algebra|expression|variable|function|factoring)\b/.test(q))
    categories.push("Algebra");
  if (/\b(geometry|geometric|shape|triangle|circle|proof|angle|area|volume|coordinate|pythagorean|congruent)\b/.test(q))
    categories.push("Geometry");
  if (/\b(calculus|calc\b|derivative|integral|limit|differentiat|integrat|series|continuity)\b/.test(q))
    categories.push("Calculus");
  if (/\b(statistic|stats|probability|data|distribution|mean|median|mode|regression|histogram)\b/.test(q))
    categories.push("Statistics");
  if (/\b(competition|olympiad|amc\b|mathcounts|aime\b|contest|competitive\s*math)\b/.test(q))
    categories.push("Competition");
  if (/\b(problem.?solving|puzzle|challenge|logic|reasoning|critical\s*thinking)\b/.test(q))
    categories.push("Problem Solving");
  if (/\b(visual|visualization|interactive|graphic|animation|dynamic|hands.?on|see\s*math|graphing)\b/.test(q))
    categories.push("Visualization");
  if (/\b(video|watch|youtube|tutorial|lesson|lecture)\b/.test(q))
    categories.push("Videos");
  if (/\b(sat\b|act\b|college\s*board|test\s*prep|standardized\s*test|psat|bluebook|digital\s*sat)\b/.test(q))
    categories.push("SAT/ACT");

  return { levels, categories };
}

function scoreSite(site: MathSite, parsed: { levels: string[]; categories: string[] }, rawQuery: string): number {
  let score = 0;

  for (const level of parsed.levels) {
    if (site.levels.includes(level)) score += 3;
  }
  for (const cat of parsed.categories) {
    if (site.categories.includes(cat)) score += 2;
  }

  // Bonus for direct keyword overlap with name / description
  const words = rawQuery.toLowerCase().split(/\s+/).filter((w) => w.length > 2);
  for (const word of words) {
    if (site.name.toLowerCase().includes(word)) score += 1;
    if (site.categories.some((c) => c.toLowerCase().includes(word))) score += 0.5;
    if (site.description.toLowerCase().includes(word)) score += 0.3;
  }

  return score;
}

// ── components ────────────────────────────────────────────────────────────────

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all border border-foreground/15 ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-card/80 text-foreground hover:bg-card hover:shadow-sm"
      }`}
    >
      {label}
    </button>
  );
}

function SiteCard({ site }: { site: MathSite }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-foreground/12 bg-card/95 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5"
      style={{ borderTop: "2px solid oklch(0.836 0.048 32 / 0.20)" }}>
      <div className="flex items-start gap-3">
        <span className="text-2xl leading-none mt-0.5">{site.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base leading-tight">{site.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{site.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {site.categories.map((cat) => (
          <span key={cat} className="rounded-full border border-foreground/10 bg-secondary/70 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            {cat}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-1 border-t border-foreground/8">
        <div className="flex flex-wrap gap-x-2 gap-y-0.5">
          {site.levels.map((lvl) => (
            <span key={lvl} className="text-[11px] text-muted-foreground/80">
              {lvl}
            </span>
          ))}
        </div>
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-foreground/15 bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-85 whitespace-nowrap"
        >
          Visit →
        </a>
      </div>
    </div>
  );
}

// ── bear helper ───────────────────────────────────────────────────────────────

function WhiteBear({ size = 68 }: { size?: number }) {
  const h = Math.round(size * 95 / 80);
  return (
    <svg viewBox="0 0 80 95" width={size} height={h} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ── small bear ears ── */}
      <circle cx="21" cy="14" r="9"  fill="white" stroke="#1A0808" strokeWidth="2" />
      <circle cx="59" cy="14" r="9"  fill="white" stroke="#1A0808" strokeWidth="2" />
      <circle cx="21" cy="14" r="5"  fill="#FFCDD9" />
      <circle cx="59" cy="14" r="5"  fill="#FFCDD9" />

      {/* ── manga chibi: huge head ~60% of total height ── */}
      <circle cx="40" cy="36" r="30" fill="white" stroke="#1A0808" strokeWidth="2.2" />

      {/* ── manga eyes: large oval with layered highlights ── */}
      <g className="bear-eye-blink">
        {/* iris */}
        <ellipse cx="27" cy="37" rx="7.5" ry="8" fill="#1A0808" />
        {/* colour layer */}
        <ellipse cx="27" cy="38" rx="5.5" ry="6" fill="#3D2020" />
        {/* big top-left shine */}
        <ellipse cx="24.5" cy="33.5" rx="3" ry="2.2" fill="white" opacity="0.95" />
        {/* small bottom-right glint */}
        <circle  cx="30"   cy="41"   r="1.2"         fill="white" opacity="0.6"  />
      </g>
      <g className="bear-eye-blink-delay">
        <ellipse cx="53" cy="37" rx="7.5" ry="8" fill="#1A0808" />
        <ellipse cx="53" cy="38" rx="5.5" ry="6" fill="#3D2020" />
        <ellipse cx="50.5" cy="33.5" rx="3" ry="2.2" fill="white" opacity="0.95" />
        <circle  cx="56"   cy="41"   r="1.2"         fill="white" opacity="0.6"  />
      </g>

      {/* ── tiny manga nose ── */}
      <ellipse cx="40" cy="48" rx="2.2" ry="1.5" fill="#1A0808" />

      {/* ── cute manga mouth (small upward curve) ── */}
      <path d="M35 52 Q40 57 45 52" stroke="#1A0808" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      {/* ── manga blush: soft wide streaks ── */}
      <ellipse cx="17" cy="46" rx="7" ry="4" fill="#FFB3C6" opacity="0.45" />
      <ellipse cx="63" cy="46" rx="7" ry="4" fill="#FFB3C6" opacity="0.45" />

      {/* ── tiny chibi body directly under head ── */}
      <ellipse cx="40" cy="76" rx="18" ry="14" fill="white" stroke="#1A0808" strokeWidth="2" />
      {/* belly */}
      <ellipse cx="40" cy="78" rx="10" ry="8" fill="#FFF0F3" />

      {/* ── stubby left arm ── */}
      <ellipse cx="17" cy="73" rx="6" ry="8" fill="white" stroke="#1A0808" strokeWidth="2"
        transform="rotate(-15 17 68)" />
      {/* ── right arm waving ── */}
      <g className="bear-arm-wave">
        <ellipse cx="63" cy="71" rx="6" ry="8" fill="white" stroke="#1A0808" strokeWidth="2"
          transform="rotate(15 63 65)" />
      </g>

      {/* ── tiny round feet ── */}
      <ellipse cx="29" cy="89" rx="11" ry="6" fill="white" stroke="#1A0808" strokeWidth="2" />
      <ellipse cx="51" cy="89" rx="11" ry="6" fill="white" stroke="#1A0808" strokeWidth="2" />
    </svg>
  );
}

type ChatMessage = { role: "user" | "assistant"; content: string };

const BEAR_STARTERS = [
  "I'm a total beginner 🌱",
  "Middle school help 📚",
  "SAT/ACT prep 📋",
  "Competition math ⚔️",
  "I want to watch videos 🎬",
  "College level 🎓",
];

function BearHelper({ onSuggest }: { onSuggest: (q: string) => void }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  async function sendMessage(text: string) {
    if (!text.trim() || streaming) return;
    const userMsg: ChatMessage = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setStreaming(true);

    // Check if it's a search shortcut
    const lower = text.toLowerCase();
    if (lower.includes("beginner") || lower.includes("elementary")) onSuggest("elementary basic");
    else if (lower.includes("middle school")) onSuggest("middle school pre-algebra");
    else if (lower.includes("competition")) onSuggest("competition olympiad");
    else if (lower.includes("video")) onSuggest("videos tutorial");
    else if (lower.includes("college")) onSuggest("college university calculus");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: reply };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Oops! Bear-y sorry, something went wrong. Please try again! 🐻" },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      {/* Beary — fixed bottom-right */}
      <div style={{ position: "fixed", bottom: "18px", right: "20px", zIndex: 50 }}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Chat with Beary"
          className="cursor-pointer drop-shadow-md transition-transform hover:scale-110 active:scale-95"
          style={{ background: "none", border: "none", padding: 0 }}
        >
          <WhiteBear size={62} />
        </button>
      </div>

      {/* thought bubble — floats above Beary */}
      {open && (
        <div className="fixed bottom-40 right-4 z-50 w-72">
          <div ref={panelRef} className="rounded-[1.75rem] border border-foreground/15 bg-card shadow-lg overflow-hidden flex flex-col" style={{ maxHeight: "420px" }}>
            {/* header */}
            <div className="flex items-center gap-2.5 border-b border-foreground/10 bg-[oklch(0.88_0.065_15)]/30 px-4 py-3 shrink-0">
              <WhiteBear size={32} />
              <div>
                <p className="text-sm font-semibold leading-tight">Hi! I'm Beary ♡</p>
                <p className="text-[11px] text-muted-foreground">Ask me anything about math!</p>
              </div>
            </div>

            {/* messages */}
            <div className="flex-1 overflow-y-auto px-3 py-2 flex flex-col gap-2" style={{ minHeight: "120px" }}>
              {messages.length === 0 && (
                <div className="flex flex-col gap-1.5 pt-1">
                  <p className="text-[11px] text-muted-foreground px-1 pb-1">Try one of these:</p>
                  {BEAR_STARTERS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => sendMessage(s)}
                      className="rounded-full border border-foreground/12 bg-muted/50 px-3 py-1.5 text-left text-xs transition-colors hover:bg-[oklch(0.88_0.065_15)]/40 hover:border-foreground/20"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={`${msg.role}-${i}`}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-2xl px-3 py-1.5 text-xs max-w-[85%] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm border border-foreground/10"
                    }`}
                  >
                    {msg.content || (streaming && i === messages.length - 1 ? "✦" : "")}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* input */}
            <div className="border-t border-foreground/10 px-3 py-2 flex gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") sendMessage(input); }}
                placeholder="Ask Beary..."
                disabled={streaming}
                className="flex-1 rounded-full border border-foreground/15 bg-input px-3 py-1.5 text-xs outline-none focus:border-primary/40 disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || streaming}
                className="rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs font-medium transition-opacity disabled:opacity-40 hover:opacity-90"
              >
                {streaming ? "…" : "Send"}
              </button>
            </div>
          </div>
          {/* thought bubble tail */}
          <div className="absolute -bottom-3  right-12 size-4   rounded-full border border-foreground/15 bg-card" />
          <div className="absolute -bottom-7  right-10 size-3.5 rounded-full border border-foreground/15 bg-card" />
          <div className="absolute -bottom-11 right-8  size-3   rounded-full border border-foreground/15 bg-card" />
          <div className="absolute -bottom-14 right-6  size-2   rounded-full border border-foreground/15 bg-card" />
          <div className="absolute -bottom-17 right-5  size-1.5 rounded-full border border-foreground/15 bg-card" />
        </div>
      )}
    </>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [level, setLevel] = useState<string>("All Levels");

  const { filtered, detectedTags } = useMemo(() => {
    const q = search.trim();

    const chipFilter = (site: MathSite) =>
      (category === "All" || site.categories.includes(category)) &&
      (level === "All Levels" || site.levels.includes(level));

    if (!q) {
      return { filtered: MATH_SITES.filter(chipFilter), detectedTags: [] };
    }

    const parsed = parseQuery(q);
    const detectedTags = [...parsed.levels, ...parsed.categories];
    const isSmartQuery = detectedTags.length > 0;

    const scored = MATH_SITES.map((site) => ({
      site,
      score: scoreSite(site, parsed, q),
    }));

    const results = scored
      .filter(({ site, score }) => {
        if (!chipFilter(site)) return false;
        if (isSmartQuery) return score > 0;
        // Fallback to plain substring match when NLP finds nothing
        const lq = q.toLowerCase();
        return (
          site.name.toLowerCase().includes(lq) ||
          site.description.toLowerCase().includes(lq) ||
          site.categories.some((c) => c.toLowerCase().includes(lq))
        );
      })
      .sort((a, b) => b.score - a.score)
      .map(({ site }) => site);

    return { filtered: results, detectedTags };
  }, [search, category, level]);

  return (
    <div className="relative">
      <BookDecor />
      <FallingFlowers />
      <BearHelper onSuggest={(q) => { setSearch(q); setCategory("All"); setLevel("All Levels"); }} />

      <main className="relative z-[2] mx-auto max-w-5xl px-5 py-8 flex flex-col gap-7">
        {/* header — book cover title page */}
        <div className="flex flex-col items-center gap-0 text-center">
          {/* wrapper holds box + corner flowers */}
          <div className="relative inline-flex">
            {/* floral corners — absolutely positioned outside the box */}
            <div className="absolute -top-7 -left-7 pointer-events-none">
              <FloralCorner />
            </div>
            <div className="absolute -top-7 -right-7 pointer-events-none">
              <FloralCorner flip />
            </div>
            <div className="absolute -bottom-7 -left-7 pointer-events-none">
              <FloralCorner flipY />
            </div>
            <div className="absolute -bottom-7 -right-7 pointer-events-none">
              <FloralCorner flip flipY />
            </div>

            {/* the box itself */}
            <div className="w-full max-w-md border border-foreground/18 rounded-sm px-10 py-7 flex flex-col items-center gap-3"
              style={{
                boxShadow: "inset 0 0 0 1px oklch(0.836 0.048 32 / 0.12), 0 4px 24px oklch(0.836 0.048 32 / 0.10)",
                background: "oklch(0.990 0.006 60 / 0.70)",
              }}>
              {/* top ornament */}
              <div className="ornament-line w-full text-xs tracking-widest select-none" style={{ color: "oklch(0.680 0.090 38)" }}>✦</div>
              {/* small label */}
              <p className="text-[10px] tracking-[0.32em] uppercase font-medium" style={{ color: "oklch(0.550 0.075 38)" }}>
                a curated collection
              </p>
              {/* main title */}
              <h1 className="kawaii-title text-5xl tracking-tight leading-none">Studyishh</h1>
              {/* subtitle */}
              <p className="text-sm italic leading-snug" style={{ color: "oklch(0.500 0.060 35)" }}>
                find your favourite math resources
              </p>
              {/* bottom ornament */}
              <div className="ornament-line w-full text-xs tracking-widest select-none" style={{ color: "oklch(0.680 0.090 38)" }}>❀</div>
            </div>
          </div>
        </div>

        {/* search */}
        <div className="mx-auto w-full max-w-xl flex flex-col gap-2">
          <input
            type="search"
            placeholder='e.g. "pre-algebra 7th grade visual learner" or "calculus videos college"'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-border bg-card/85 px-5 py-3 text-sm shadow-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 backdrop-blur-sm"
          />

          {/* detected intent banner */}
          {detectedTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 px-2">
              <span className="text-xs text-muted-foreground">Showing recommendations for:</span>
              {detectedTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* filters */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <FilterChip key={cat} label={cat} active={category === cat} onClick={() => setCategory(cat)} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {LEVELS.map((lvl) => (
              <FilterChip key={lvl} label={lvl} active={level === lvl} onClick={() => setLevel(lvl)} />
            ))}
          </div>
        </div>

        {/* results count + ornament divider */}
        <div className="flex flex-col items-center gap-2 -mt-2">
          <p className="text-center text-sm text-muted-foreground">
            {!search.trim()
              ? `${filtered.length} websites`
              : `${filtered.length} recommendation${filtered.length !== 1 ? "s" : ""}`}
          </p>
          <div className="ornament-line w-full max-w-xs text-[10px] tracking-widest text-muted-foreground/60 select-none">✿</div>
        </div>

        {/* grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-16 text-center">
            <span className="text-4xl">🔍</span>
            <p className="text-muted-foreground">no websites match your search ♡</p>
            <button
              type="button"
              onClick={() => { setSearch(""); setCategory("All"); setLevel("All Levels"); }}
              className="mt-2 text-sm text-primary underline underline-offset-2"
            >
              clear filters
            </button>
          </div>
        )}

        <div className="flex flex-col items-center gap-2 pb-4">
          <div className="ornament-line w-full max-w-xs text-[10px] tracking-widest text-muted-foreground/50 select-none">❀</div>
          <p className="text-center text-xs text-muted-foreground opacity-60 tracking-widest uppercase">
            studyishh · your cozy math corner
          </p>
        </div>
      </main>
    </div>
  );
}
