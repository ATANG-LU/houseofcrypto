import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[760px] items-center justify-center overflow-hidden px-5 pt-[124px]">
      <div className="glow-center pointer-events-none absolute inset-0" />
      <div className="relative text-center">
        <p className="text-[120px] font-bold leading-none tracking-tight text-brand lg:text-[190px]">404</p>
        <h1 className="mt-4 text-[34px] font-medium lg:text-[44px]">Page Not Found</h1>
        <p className="mx-auto mt-5 max-w-[540px] leading-8 text-white/90">
          The page you&apos;re looking for can&apos;t be found. Double-check the URL and try again, or use one of the
          buttons below.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Button href="/tokens" size="md">
            Live prices
          </Button>
          <Button href="/" variant="secondary" size="md">
            Go home
          </Button>
        </div>
      </div>
    </section>
  );
}
