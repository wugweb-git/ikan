import imgBackground from "figma:asset/48e11de40959fcd87b5cb4a36ae60fedcaf97caf.png";
import imgBackground1 from "figma:asset/3772e90563daca3ef206a824f43457199d087a9c.png";
import imgContainer from "figma:asset/1481db4e9380fb931a22b6513abff50802b2a49b.png";
import imgContainer1 from "figma:asset/a9781d0017d72468a9abd686b2bedd2a0030389e.png";
import imgContainer2 from "figma:asset/f73ff6b993a79e7afa25172e841a3b997424ffd3.png";
import imgContainer3 from "figma:asset/d003be95957c379a921874e4bda664014db0f9f1.png";
import imgBackground2 from "figma:asset/79f4819c58ba4b17081db7c51042e65ae3c80b63.png";
import imgBackground3 from "figma:asset/feac3db04deeeeeb57c0093c3c5f73704543a5ce.png";
import imgBackground4 from "figma:asset/3065945fcbf34255b3d9dd3f6a9d74bef33067aa.png";
import imgBackground5 from "figma:asset/533267b6ad03b6203bf651e6d6b242eeed7f4136.png";
import imgContainer4 from "figma:asset/9e350c1839007716e1f55e4a0242b288a034c6aa.png";
import imgContainer5 from "figma:asset/c9864a003bcad8a0740991d9dc9f0b5fa774146f.png";

function Heading1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[0.69px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Ubuntu:Bold',_sans-serif] justify-center leading-[72px] not-italic relative shrink-0 text-[#0a0a0f] text-[0px] text-[58px] text-center w-full">
        <p className="mb-0">Wir wachsen durch den</p>
        <p className="text-black">Austausch mit Gleichgesinnten.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[695.712px] relative shrink-0 w-[695.7px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[45px] justify-center leading-[22.18px] not-italic relative shrink-0 text-[#545457] text-[14.5px] text-center tracking-[-0.16px] w-[655.859px]">
        <p className="mb-0">peers. ist dein sicherer Ort, an dem du Empathie erfährst, indem du ganz urteilsfrei mit Menschen,</p>
        <p>die in einer ähnlichen Situation sind, sprichst und deine Herausforderung überwinden kannst.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[14.49px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[23.614px] text-center text-white tracking-[-0.28px] w-full">
        <p className="leading-[27.9px]">Akzeptanz</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#2e2a2f] relative rounded-[7.25px] shrink-0 w-full z-[2]" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pl-[51.19px] pr-[51.2px] py-[19.929px] relative w-full">
          <Heading2 />
        </div>
      </div>
    </div>
  );
}

function Component6533E331C0E36A7044Cbe692AnnKathrinDomkeTranscodeMp4() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute bg-repeat bg-size-[222.64px_296.853px] bg-top-left inset-0" style={{ backgroundImage: `url('${imgBackground}')` }} />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[122.28%] left-0 max-w-none top-[-11.14%] w-full" src={imgBackground1} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[242.77px] overflow-clip relative rounded-[7.25px] shrink-0 w-full z-[1]" data-name="Container">
      <Component6533E331C0E36A7044Cbe692AnnKathrinDomkeTranscodeMp4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20.83px] isolate items-start justify-center px-0 py-[63.92px] relative self-stretch shrink-0 w-[222.64px]" data-name="Container">
      <Background />
      <Container3 />
    </div>
  );
}

function Component6533E37F645A5E76463Deaf8IrinaVerhuelsdonkTranscodeMp4() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute bg-repeat bg-size-[222.64px_396.784px] bg-top-left inset-0" style={{ backgroundImage: `url('${imgContainer}')` }} />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[163.44%] left-0 max-w-none top-[-31.72%] w-full" src={imgContainer1} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[242.77px] overflow-clip relative rounded-[7.25px] shrink-0 w-full" data-name="Container">
      <Component6533E37F645A5E76463Deaf8IrinaVerhuelsdonkTranscodeMp4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.8px] pt-0 px-0 relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[49.411px] text-nowrap tracking-[-0.55px]">
        <p className="leading-[54.81px] whitespace-pre">2500+</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[1.88px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[22.18px] not-italic relative shrink-0 text-[#151515] text-[14.5px] text-nowrap tracking-[-0.16px] whitespace-pre">
        <p className="mb-0">Menschen, die durch</p>
        <p className="mb-0">peers. mehr Wohlbefinden</p>
        <p>erlangt haben</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e9ebef] relative rounded-[7.25px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[33.595px] items-start justify-center pb-[19.92px] pt-[18.92px] px-[19.929px] relative w-full">
          <Heading3 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[20.82px] items-start justify-center relative self-stretch shrink-0 w-[222.64px]" data-name="Container">
      <Container5 />
      <Background1 />
    </div>
  );
}

function Component6533E39C97Cd72E210509Fd3JuliaMariaRuettgersTranscodeMp4() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute bg-repeat bg-size-[222.64px_326.539px] bg-top-left inset-0" style={{ backgroundImage: `url('${imgContainer2}')` }} />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[134.51%] left-0 max-w-none top-[-17.25%] w-full" src={imgContainer3} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[242.77px] overflow-clip relative rounded-[7.25px] shrink-0 w-full" data-name="Container">
      <Component6533E39C97Cd72E210509Fd3JuliaMariaRuettgersTranscodeMp4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[23.813px] text-center text-white tracking-[-0.28px] w-full">
        <p className="leading-[27.9px]">Verständnis</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#2e2a2f] relative rounded-[7.25px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pl-[43.37px] pr-[43.39px] py-[19.929px] relative w-full">
          <Heading4 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20.82px] items-start justify-center pb-[63.93px] pt-[63.92px] px-0 relative self-stretch shrink-0 w-[222.64px]" data-name="Container">
      <Container8 />
      <Background2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.8px] pt-0 px-0 relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[48.633px] text-nowrap tracking-[-0.55px]">
        <p className="leading-[54.81px] whitespace-pre">52+</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[69.1px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[22.18px] not-italic relative shrink-0 text-[#151515] text-[14.5px] text-nowrap tracking-[-0.16px] whitespace-pre">
        <p className="mb-0">Qualifizierte</p>
        <p>Psycholog:innen</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e9ebef] relative rounded-[7.25px] shrink-0 w-full z-[2]" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[33.505px] items-start justify-center pb-[19.93px] pt-[18.92px] px-[19.929px] relative w-full">
          <Heading5 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Component6533E3C2645A5E76463E38BbPhilippeDriessenTranscodeMp4() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute bg-repeat bg-size-[222.64px_319.117px] bg-top-left inset-0" style={{ backgroundImage: `url('${imgBackground2}')` }} />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[131.45%] left-0 max-w-none top-[-15.72%] w-full" src={imgBackground3} />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[7.25px] shrink-0 w-full z-[1]" data-name="Container">
      <Component6533E3C2645A5E76463E38BbPhilippeDriessenTranscodeMp4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[20.82px] isolate items-start justify-center relative self-stretch shrink-0 w-[222.64px]" data-name="Container">
      <Background3 />
      <Container11 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[23.813px] text-center text-white tracking-[-0.28px] w-full">
        <p className="leading-[27.9px]">Mitgefühl</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#2e2a2f] relative rounded-[7.25px] shrink-0 w-full z-[2]" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pl-[57.43px] pr-[57.46px] py-[19.929px] relative w-full">
          <Heading6 />
        </div>
      </div>
    </div>
  );
}

function Component6533E3Fb65A382945F981779SophieSchuermannTranscodeMp4() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute bg-repeat bg-size-[222.64px_392.894px] bg-top-left inset-0" style={{ backgroundImage: `url('${imgBackground4}')` }} />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[161.84%] left-0 max-w-none top-[-30.92%] w-full" src={imgBackground5} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[242.77px] overflow-clip relative rounded-[7.25px] shrink-0 w-full z-[1]" data-name="Container">
      <Component6533E3Fb65A382945F981779SophieSchuermannTranscodeMp4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20.83px] isolate items-start justify-center px-0 py-[63.92px] relative self-stretch shrink-0 w-[222.64px]" data-name="Container">
      <Background4 />
      <Container13 />
    </div>
  );
}

function Component6533E41Bf73C376861A40160SvenjaPallowskiTranscodeMp4() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[122.28%] left-0 max-w-none top-[-11.14%] w-full" src={imgContainer4} />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[122.28%] left-0 max-w-none top-[-11.14%] w-full" src={imgContainer5} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[242.77px] overflow-clip relative rounded-[7.25px] shrink-0 w-full" data-name="Container">
      <Component6533E41Bf73C376861A40160SvenjaPallowskiTranscodeMp4 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.8px] pt-0 px-0 relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[49.8px] text-nowrap tracking-[-0.55px]">
        <p className="leading-[54.81px] whitespace-pre">96%</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[59.13px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[22.18px] not-italic relative shrink-0 text-[#151515] text-[14.5px] text-nowrap tracking-[-0.16px] whitespace-pre">
        <p className="mb-0">empfehlen unsere</p>
        <p>Kurse weiter</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="basis-0 bg-[#e9ebef] grow min-h-px min-w-px relative rounded-[7.25px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[33.505px] items-start justify-center pb-[19.93px] pt-[18.92px] px-[19.929px] relative size-full">
          <Heading7 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[20.82px] items-start justify-center relative self-stretch shrink-0 w-[222.64px]" data-name="Container">
      <Container15 />
      <Background5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[20.8px] items-start relative shrink-0 w-[1440px]" data-name="Container">
      <Container4 />
      <Container7 />
      <Container9 />
      <Container12 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[54.34px] items-center pl-[0.02px] pr-0 py-0 relative w-full">
          <Container2 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1159.52px] relative shrink-0 w-[1159.52px]" data-name="Container">
      <Container19 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-white relative size-full" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[100px] pt-[200px] px-[100px] relative size-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}