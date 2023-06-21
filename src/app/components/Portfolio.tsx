interface PortfolioProps {
  total: Number;
}

export default function Portfolio(props: PortfolioProps) {
  const { total } = props;
  return (
    <section className="bg-slate-700 w-full px-10 py-5 rounded-2xl flex justify-between mb-5">
      PORTFOLIO
      <div>Total: {new Intl.NumberFormat("nl-NL").format(Number(total))} €</div>
    </section>
  );
}
