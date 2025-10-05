import svgPaths from "./svg-3dg7rpr3yh";
import imgAvatar from "figma:asset/f8bfdc3dfe2a754ded4c44d82d1518e16a087140.png";

function Logo() {
  return (
    <div className="h-[50px] relative shrink-0 w-[100px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 50">
        <g id="Logo">
          <g id="Vector">
            <path d={svgPaths.p28d7740} fill="var(--fill-0, black)" />
            <path d={svgPaths.p201d5680} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2febba00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2be28440} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1c12f8f0} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="box-border content-stretch flex flex-col h-[90px] items-start px-0 py-[20px] relative shrink-0" data-name="Link:margin">
      <Logo />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[6px] h-[20px] items-center relative shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">About</p>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Assessments</p>
      </div>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Equips</p>
      </div>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Mood Journal</p>
      </div>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Consultation</p>
      </div>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Library</p>
      </div>
    </div>
  );
}

function Menubar() {
  return (
    <div className="content-stretch flex gap-[32px] h-[21px] items-center relative shrink-0" data-name="Menubar">
      <Buttons />
      <Buttons1 />
      <Buttons2 />
      <Buttons3 />
      <Buttons4 />
      <Buttons5 />
      <Buttons6 />
    </div>
  );
}

function FullMenuMargin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[48px] pr-0 py-0 relative shrink-0" data-name="full-menu:margin">
      <Menubar />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <LinkMargin />
      <FullMenuMargin />
    </div>
  );
}

function Buttons7() {
  return (
    <div className="bg-[#ecebf0] box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[8px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222222] text-[14px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">Let’s Talk</p>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="AVATAR">
      <img alt="" className="block max-w-none size-full" height="48" src={imgAvatar} width="48" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8.889px] items-center relative shrink-0 size-[48px]">
      <Avatar />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0" data-name="Container">
      <Buttons7 />
      <Frame23 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[88px] items-center justify-between relative shrink-0 w-[1352px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

export default function TopNavigation() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Top Navigation">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start justify-center px-[24px] py-0 relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}