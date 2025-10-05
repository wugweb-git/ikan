import svgPaths from "./svg-7gteburzpg";
import imgAsset31 from "figma:asset/f661bf5da4f0c5ec77c6be347d350308d337dfab.png";
import imgIso27001InformationSecurityLogoPngSvgVector from "figma:asset/3c5f7f35307815808c84833da9c1795edf357a47.png";
import imgLayer1 from "figma:asset/436430d49fbbe491caa6eb875d6b834c2dce763c.png";
import imgLayer4 from "figma:asset/190e2222d6d55ffd0cd01e3b6107e8cc1982c2c5.png";
import imgLayer2 from "figma:asset/83b3c587fb49c69a18aca2847bb88e4100c73d20.png";
import imgLayer3 from "figma:asset/11ab4e5249d8291c26bb01aba0bc0c19fe98f2f0.png";
import { imgGroup } from "./svg-493ov";

function Logo() {
  return (
    <div className="h-[35px] relative shrink-0 w-[70px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 35">
        <g id="Logo">
          <g id="Vector">
            <path d={svgPaths.p1956d3f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p215e9e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d5e7f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d129400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p24c66400} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Ubuntu:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-full">
        <p className="leading-[15px] whitespace-pre-wrap">{`Ikan is your trusted partner in mental health and wellness. We provide evidence-based tools, professional assesments, and expert support to help you  on your journey to better mental health.`}</p>
      </div>
    </div>
  );
}

function Frame1000007609() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Logo />
      <Container />
    </div>
  );
}

function MailInboxApp1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="mail-inbox-app (1)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="mail-inbox-app (1)">
          <path d={svgPaths.p2bbe5980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkTelefonseelsorgeDe() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link - telefonseelsorge.de">
      <MailInboxApp1 />
      <p className="font-['Ubuntu:Regular',_sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">Support@ikan.health</p>
    </div>
  );
}

function Layer3() {
  return (
    <div className="absolute inset-[3.125%]" data-name="Layer 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Layer 3">
          <path d={svgPaths.p2ae7e300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PhoneCall() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="phone-call">
      <Layer3 />
    </div>
  );
}

function Link08001110111() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-end relative shrink-0" data-name="Link - 0 800 111 0 111">
      <PhoneCall />
      <div className="flex flex-col font-['Ubuntu:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-[15px] whitespace-pre">0 800 111 0 111</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkTelefonseelsorgeDe />
      <Link08001110111 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[350px]" data-name="Container">
      <Frame1000007609 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Ubuntu:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Quick Links</p>
      </div>
    </div>
  );
}

function LinkJetztStarten() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Jetzt starten">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function LinkKostenloseEinzelberatung() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Kostenlose Einzelberatung">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Assesment</p>
      </div>
    </div>
  );
}

function LinkAngst() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Angst">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Programs</p>
      </div>
    </div>
  );
}

function LinkDepressiveStimmungen() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Depressive Stimmungen">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Library</p>
      </div>
    </div>
  );
}

function LinkStress() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Stress">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Consultation</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkJetztStarten />
      <LinkKostenloseEinzelberatung />
      <LinkAngst />
      <LinkDepressiveStimmungen />
      <LinkStress />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Ubuntu:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Support</p>
      </div>
    </div>
  );
}

function LinkUberUns() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Über Uns">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">About us</p>
      </div>
    </div>
  );
}

function LinkKarriere() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Karriere">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">FAQs</p>
      </div>
    </div>
  );
}

function LinkReferenzen() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Referenzen">
      <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Contact us</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkUberUns />
      <LinkKarriere />
      <LinkReferenzen />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Frame1171277369() {
  return (
    <div className="content-stretch flex gap-[100px] items-start relative shrink-0 w-full">
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Frame1171277369 />
    </div>
  );
}

function Frame1000007614() {
  return (
    <div className="content-stretch flex gap-[16px] items-center opacity-70 relative shrink-0">
      <div className="relative shrink-0 size-[40px]" data-name="Asset 3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAsset31} />
      </div>
      <div className="h-[41px] relative shrink-0 w-[40px]" data-name="ISO-27001-Information-Security-Logo-PNG-SVG-Vector">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIso27001InformationSecurityLogoPngSvgVector} />
      </div>
      <div className="h-[31px] relative shrink-0 w-[40px]" data-name="Layer 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer1} />
      </div>
      <div className="h-[34px] relative shrink-0 w-[40px]" data-name="Layer 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer4} />
      </div>
      <div className="h-[13.088px] relative shrink-0 w-[60px]" data-name="Layer 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer2} />
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="Layer 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer3} />
      </div>
    </div>
  );
}

function Frame1000007613() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Ubuntu:Regular',_sans-serif] leading-[18px] not-italic opacity-60 relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Certifications</p>
      <Frame1000007614 />
    </div>
  );
}

function Border() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center px-0 py-[16px] relative shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#2b2b2b] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <Frame1000007613 />
    </div>
  );
}

function LinkImpressum() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Impressum">
      <div className="flex flex-col font-['Ubuntu:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-[15px] whitespace-pre">Privacy Policy</p>
      </div>
    </div>
  );
}

function LinkDatenschutz() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Datenschutz">
      <div className="flex flex-col font-['Ubuntu:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-[15px] whitespace-pre">{`Terms & Condition`}</p>
      </div>
    </div>
  );
}

function LinkAgb() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - AGB">
      <div className="flex flex-col font-['Ubuntu:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-[15px] whitespace-pre">Return Policy</p>
      </div>
    </div>
  );
}

function LinkCookieEinstellungen() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Cookie-Einstellungen">
      <div className="flex flex-col font-['Ubuntu:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-[15px] whitespace-pre">Sitemap</p>
      </div>
    </div>
  );
}

function LinkCookieEinstellungen1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Cookie-Einstellungen">
      <div className="flex flex-col font-['Ubuntu:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-[15px] whitespace-pre">Cancellation Policy</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkImpressum />
      <LinkDatenschutz />
      <LinkAgb />
      <LinkCookieEinstellungen />
      <LinkCookieEinstellungen1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-0.08%_22.24%_0.25%_22.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.115px_0.012px] mask-size-[14px_14px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute bottom-[-0.01%] left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
          <g id="Group">
            <path d={svgPaths.p3c8cd900} fill="var(--fill-0, #C6C6C6)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Component 1">
      <ClipPathGroup />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[14px]" data-name="Link">
      <Container11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[14px_14px] right-[-0.01%] top-0" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Group">
          <path d={svgPaths.p99b6d00} fill="var(--fill-0, #C6C6C6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Component 1">
      <ClipPathGroup1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Component2 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[14px]" data-name="Link">
      <Container12 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[14px_14px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Group">
          <path d={svgPaths.p24b3e700} fill="var(--fill-0, #C6C6C6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Component 1">
      <ClipPathGroup2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Component3 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[14px]" data-name="Link">
      <Container13 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-0 left-[-0.12%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.016px_0px] mask-size-[14px_14px] right-[-0.01%] top-0" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
          <g id="Group">
            <path d={svgPaths.p150e700} fill="var(--fill-0, #C6C6C6)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Component 1">
      <ClipPathGroup3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Component4 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[14px]" data-name="Link">
      <Container14 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Component 1">
          <path d={svgPaths.p728cd00} fill="var(--fill-0, #C6C6C6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Component5 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[14px]" data-name="Link">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="box-border content-stretch flex gap-[24px] items-center justify-end pl-0 pr-[8px] py-[8px] relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Frame1000007610() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[24px] items-center justify-center px-0 py-[4px] relative shrink-0">
      <p className="font-['Ubuntu:Regular',_sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">© 2025 iKan. All rights reserved.</p>
    </div>
  );
}

function WugwebLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Wugweb Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Wugweb Logo">
          <rect fill="var(--fill-0, #101010)" height="24" rx="6" width="24" />
          <g id="Vector">
            <path d={svgPaths.p34e2cf00} fill="white" />
            <path d={svgPaths.p3f18d100} fill="white" />
            <path d={svgPaths.p3ce2ae00} fill="var(--fill-0, #FFBE1A)" />
            <path d={svgPaths.p8d1430} fill="var(--fill-0, #FFBE1A)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1000007611() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['Ubuntu:Medium',_sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">Designed by</p>
      <WugwebLogo />
    </div>
  );
}

function Frame1000007612() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
      <Frame1000007610 />
      <Frame1000007611 />
    </div>
  );
}

function Container17() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container16 />
      <Frame1000007612 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Border />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

export default function Footer() {
  const handleFooterClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const linkElement = target.closest('[data-name^="Link"]');
    
    if (linkElement) {
      const linkName = linkElement.getAttribute('data-name');
      let route = '/';
      
      // Map Figma link names to routes
      switch (linkName) {
        // Quick Links
        case 'Link - Jetzt starten':
          route = '/';
          break;
        case 'Link - Kostenlose Einzelberatung':
          route = '/assessments';
          break;
        case 'Link - Angst':
          route = '/equip-programs';
          break;
        case 'Link - Depressive Stimmungen':
          route = '/library';
          break;
        case 'Link - Stress':
          route = '/consultation';
          break;
        // Support Links
        case 'Link - Über Uns':
          route = '/about';
          break;
        case 'Link - Karriere':
          route = '/faq';
          break;
        case 'Link - Referenzen':
          route = '/contact';
          break;
        // Legal Links
        case 'Link - Impressum':
          route = '/privacy';
          break;
        case 'Link - Datenschutz':
          route = '/terms';
          break;
        case 'Link - AGB':
          route = '/return-policy';
          break;
        case 'Link - Cookie-Einstellungen':
          if (linkElement.textContent?.includes('Sitemap')) {
            route = '/sitemap';
          } else {
            route = '/cancellation-policy';
          }
          break;
        default:
          console.log('Unhandled footer link:', linkName);
          return;
      }
      
      // Dispatch navigation event
      window.dispatchEvent(new CustomEvent('footerNavigate', { 
        detail: { route } 
      }));
    }
  };

  return (
    <div 
      className="bg-black relative size-full cursor-pointer" 
      data-name="Footer"
      onClick={handleFooterClick}
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[20px] py-[40px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}