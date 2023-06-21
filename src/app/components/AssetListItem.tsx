import { Asset } from "../types/Asset";

interface AssetListItemProps {
  asset: Asset;
}

export default function AssetListItem(props: AssetListItemProps) {
  const {
    asset: { name, id, amount, valueInEUR },
  } = props;

  return (
    <div
      key={id}
      className="flex w-full justify-between px-10 py-5 mb-5 bg-slate-700 rounded-xl "
    >
      <div className="justify-center flex-col flex">{name}</div>
      <div className="text-right">
        {amount?.toFixed(6)}
        <p>
          {valueInEUR &&
            new Intl.NumberFormat("nl-NL").format(
              Number(valueInEUR * amount)
            )}{" "}
          €
        </p>
      </div>
    </div>
  );
}
