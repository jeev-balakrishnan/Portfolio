import PageTransition from "@/components/PageTransition";
export default function Placeholder({ title, stage }: { title: string; stage: string }) {
  return (
    <PageTransition>
      <section className="flex min-h-screen flex-col justify-center px-6 md:px-12">
        <h1 className="font-display text-6xl md:text-8xl">{title}</h1>
        <p className="mt-4 text-mute">This page is built in {stage}.</p>
      </section>
    </PageTransition>
  );
}
