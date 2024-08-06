export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      {/* TODO .container does not properly apply paddings at larger breakpoints; replace "px-0 mx-auto" after it's fixed */}
      <div className="flex flex-col items-center container py-16 px-4 mx-auto">
        <section className="w-full max-w-[650px]">{children}</section>
      </div>
    </div>
  )
}
