import Image from "next/image";

export default function PageHeader({
  title,
  eyebrow,
  subtitle,
  image,
  align = "left",
  size = "md",
}) {
  const padY =
    size === "lg"
      ? "py-16 md:py-20"
      : size === "sm"
      ? "py-8 md:py-10"
      : "py-12 md:py-14";
  const textAlign =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <header className="relative bg-deev text-slate-900 border-b border-slate-200">
      {/* Background image (optional) */}
      {image && (
        <>
          <div className="absolute inset-0">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
        </>
      )}

      {/* Content */}
      <div className={`relative mx-auto max-w-7xl px-6 ${padY}`}>
        <div className={`flex flex-col gap-3 ${textAlign}`}>
          {eyebrow && (
            <p className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
              {eyebrow}
            </p>
          )}

          <h1 className="font-primary font-semibold tracking-tight text-2xl md:text-3xl">
            {title}
          </h1>

          {subtitle && (
            <p className="font-secondary text-slate-700 leading-relaxed max-w-prose">
              {subtitle}
            </p>
          )}
        </div>

        {/* bottom gradient divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </header>
  );
}
