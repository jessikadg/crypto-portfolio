"use client";
import { useEffect, useState } from "react";
import { Asset } from "../types/Asset";
import { CoinData } from "../types/CoinData";
import AssetListItem from "./AssetListItem";
import Portfolio from "./Portfolio";
import AddCoin from "./AddCoin";
import { initialPortfolio } from "../utils/initial-portfolio";

import { FetchData } from "../api/FetchData";

export default function MainOverview() {
  const [assets, setAssets] = useState<Asset[]>(initialPortfolio);

  const updateAssetsValue = (arrayOfPrices: number[]) => {
    const updatedAssets = assets.map((asset, index) => {
      return {
        ...asset,
        valueInEUR: arrayOfPrices[index],
      };
    });

    setAssets(updatedAssets);
  };

  useEffect(() => {
    const stringOfAssets = assets
      .map((asset: Asset) => asset.name.toString())
      .join("%2C%20");

    const getCoinData = async () => {
      try {
        const response = await FetchData(stringOfAssets).then((data) =>
          data.map((coin: CoinData) => coin.current_price)
        );

        updateAssetsValue(response);
      } catch (e) {
        console.log(e);
      }
    };

    getCoinData();
  }, [assets.length]);

  const portfolioTotal = assets
    .map((asset) => asset.amount * asset.valueInEUR)
    .reduce((partialSum, n) => partialSum + n, 0);

  return (
    // Loading Spin
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="w-3/4">
        <Portfolio total={portfolioTotal} />
        <div className="flex gap-8 w-full justify-center">
          <div className="w-1/2">
            {assets.map((asset: Asset) => (
              <AssetListItem asset={asset} key={asset.id} />
            ))}
            <legend className="mr-1 text-xs text-right">
              Real-time market prices from{" "}
              <a
                href="https://www.coingecko.com/en/api/documentation"
                className="text-blue-400 underline"
              >
                CoinGecko
              </a>
            </legend>
          </div>
          <div className="w-1/2">
            <AddCoin assets={assets} setAssets={setAssets} />
          </div>
        </div>
      </div>
    </main>
  );
}
