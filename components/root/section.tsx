export function Section({ backgroundColor, children }: { backgroundColor?: string; children: any }) {
  return (
    <section className={`${backgroundColor}`}>
      <div className="mx-auto w-full max-w-[1200px] pb-[120px] pt-[160px]">{children}</div>
    </section>
  )
}
