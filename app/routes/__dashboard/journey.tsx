import React from "react";

export default function Journey() {
  return (
    <main>
      <h1 className="text-3xl"># Career Journey</h1>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">A place called home</h2>
        <Paragraph>
          As a self-taught software engineer, I started my journey in RubyH.
          It's a place where I learned so much about software development
          itself. RubyH itself is a software house, so the majority of code I
          write is for a client somewhere, but there is also one internal
          product.
        </Paragraph>
        <Paragraph>
          As this is the first time I worked, I put myself as "the dumbest
          person" in the room, I asked a lot of things! And it helped me to grow
          really quickly as a software engineer.
        </Paragraph>
        <Paragraph>
          Here, I worked on React project in my first year, and React Native in
          my second year. My role at the start is just as a developer, but at
          the time I leave, I mentor 2 junior react devs and was helping to make
          decisions on front-end technology that was going to be used in
          projects.
        </Paragraph>
        <Paragraph>
          The product called Moodah --one of the products I loved the most
          here-- is a web and mobile app we sell as a SaaS which provides
          low-cost ERP for Indonesian UMKM ( SMEs). Here I worked on the React
          Native client-side app which interacts with the GraphQL backend using
          Apollo Client.
        </Paragraph>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold"> ### My second home: IDN</h2>
        <Paragraph>
          Even though I’m enjoying my time at RubyH, I’m hungry. I’m not
          learning enough. I know my potential is limitless. Then I decided that
          I need to move to a new company: IDN.
        </Paragraph>
        <Paragraph>
          I came to IDN as a mobile developer. But right now I'm happy to call
          myself just a software engineer. This is because, during my time here,
          I was switching between product teams (and technologies) several
          times.
        </Paragraph>
        <Card>
          I'll try to highlight the most important ones here, as the full
          summary of my journey is available on my CV.
        </Card>
        <Paragraph>
          At IDN, I was given a chance to lead a Flutter mobile app development
          called "Pelajar". I was always curious to try Flutter, but this is the
          first time that I really had the chance to use it. As the lead
          developer, I need to make quick decisions because the deadline is
          short. My prior knowledge from RubyH really helped me here as I
          already understand the hard concept, e.g., state managers, route
          management, and so on. Alhamdulillah, I managed to release the app to
          Google Play Store, and not only that, being a good communicator
          between Engineering, Product, and Customer Support team. The team
          consists of 3 mobile devs, 2 backend devs, a QA, and a product lead.
        </Paragraph>
        <Paragraph>
          The second role I wanted to highlight is when I was asked to help the
          Pordi team. It's a difficult decision to leave a product that I raised
          like my own child, but I also understand the impact of this product on
          IDN, thus I decided to move. Here, I meet ReactJS again, one of my
          loved frameworks, and help the team to meet the release date of the
          revamped Pordi web apps. I learned NextJS and React Query here while
          also working on a lot of features and bugs. I also started to use git
          rebase daily. At the end of the day, the web app is released.
        </Paragraph>
      </section>
    </main>
  );
}

const Card = (props: { children: React.ReactNode }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-600/20 mt-2 mb-4">
      <div className="px-6 py-4">{props.children}</div>
    </div>
  );
};

const Paragraph = (props: { children: React.ReactNode }) => {
  return <p className="mb-2">{props.children}</p>;
};
