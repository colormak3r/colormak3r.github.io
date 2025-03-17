import ImageButton from "./button-img";

import CSvg from "../../public/img/logo/c.svg";
import CppSvg from "../../public/img/logo/cpp.svg";
import CsharpSvg from "../../public/img/logo/csharp.svg";
import JavaSvg from "../../public/img/logo/java.svg";
import JavascriptSvg from "../../public/img/logo/javascript.svg";
// import HtmlSvg from "../../public/img/logo/html.svg";
// import CssSvg from "../../public/img/logo/css.svg";
import ReactSvg from "../../public/img/logo/react.svg";
import NextSvg from "../../public/img/logo/next-js.svg";
// import NodeSvg from "../../public/img/logo/node.svg";
import TypescriptSvg from "../../public/img/logo/typescript.svg";
// import TailwindSvg from "../../public/img/logo/tailwind.svg";
import UnitySvg from "../../public/img/logo/unity.svg";
import UnrealSvg from "../../public/img/logo/unreal.svg";

export default function Skills() {
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-13 gap-3">
        <ImageButton src={UnitySvg} link="https://unity.com/" alt="Unity" />
        <ImageButton
          src={UnrealSvg}
          link="https://www.unrealengine.com/"
          alt="Unreal Engine"
        />
        <ImageButton src={CSvg} link="#top" alt="" newtab={false} />
        <ImageButton src={CppSvg} link="#top" alt="" newtab={false} />
        <ImageButton src={CsharpSvg} link="#top" alt="" newtab={false} />
        <ImageButton src={JavaSvg} link="#top" alt="" newtab={false} />
        <ImageButton src={JavascriptSvg} link="#top" alt="" newtab={false} />
        <ImageButton src={JavaSvg} link="#top" alt="" newtab={false} />
        <ImageButton src={ReactSvg} link="#top" alt="" newtab={false} />
        <ImageButton src={NextSvg} link="#top" alt="" newtab={false} />
        <ImageButton src={TypescriptSvg} link="#top" alt="" newtab={false} />
      </div>
    </>
  );
}
