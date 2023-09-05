import Image from 'next/image';

export default function Home() {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="md:hidden" />
        {/* Hide on mobile if some issued happen change to max-md */}
        <span className="orange_gradient text-center">AI-Powerd Prompts</span>
      </h1>

      <p className="desc text-center">
        Promptobia is an open-source AI prompt too for modern world to discover,
        create and share AI-Powered prompts.
      </p>

      {/* Feed */}
    </section>
  );
}
