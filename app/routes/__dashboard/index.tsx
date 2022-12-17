import type { ReactNode } from "react";
import Paragraph from "~/components/atomic/Paragraph";

export default function MyActualApp() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl mb-1">Hello there! 👋😄</h1>
      <h3 className="text-2xl mb-2">
        I'm As'ad, a self-taught software developer from Indonesia.
      </h3>
      <img
        src="/image/profile_squared.JPG"
        alt="Myself"
        className="w-40 rounded-full"
      />
      <div className="">
        <Paragraph>
          I started my journey as a Bachelor of Physics, but now I'm in love
          with software engineering. I started coding using Fortran in
          university, but I kickstarted my journey in computer science by taking
          a ReactJS online course. After that, I landed a job in a small
          software house in Jakarta, and have learned a lot about programming
          since then.
        </Paragraph>
        <div>
          <ul className="flex justify-start gap-8">
            <li className="bg-stone-200 hover:bg-stone-300 cursor-pointer rounded-xl px-4 py-2 w-40 flex items-center ">
              <img src="/image/logo_stackoverflow.svg" alt="stackoverflow" />
            </li>
            <li className="bg-stone-200 hover:bg-stone-300 cursor-pointer rounded-xl px-4 py-2 w-40 flex items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <img
                  src="/image/logo_gmail.png"
                  alt="stackoverflow"
                  className="w-10"
                />
                <span className="text-lg">Gmail</span>
              </div>
            </li>
            <li className="bg-stone-200 hover:bg-stone-300 cursor-pointer rounded-xl px-4 py-2 w-40 flex items-center ">
              <img src="/image/logo_linkedin.png" alt="stackoverflow" />
            </li>
          </ul>
        </div>
        <Paragraph>
          I mainly do front-end and mobile development, using ReactJS,
          ReactNative, and Flutter; but I am also interested in the backend
          technology, NodeJS, Golang, Rust, etc.
        </Paragraph>
        <Paragraph>
          Currently, my go-to stack is NextJS/Remix/CRA, TailwindCSS, React
          Query, and Prisma. All done in TypeScript.
        </Paragraph>
      </div>
    </div>
  );
}

export const LinksContainer = (props: { children: ReactNode }) => {
  return <ul className="flex justify-start gap-8">{props.children}</ul>;
};

export const Links = (props: { children: ReactNode }) => {
  return (
    <li className="bg-stone-200 rounded-xl px-4 py-2 w-40 flex items-center ">
      {props.children}
      {/* <img src="/image/logo_stackoverflow.svg" alt="stackoverflow" /> */}
    </li>
  );
};
