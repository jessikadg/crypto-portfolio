import { Asset } from "../types/Asset";
import { AVAILABLE_COINS } from "../utils/available-coins";
import { useState } from "react";

export default function AddCoin(props: { assets: Asset[]; setAssets: any }) {
  const { assets, setAssets } = props;

  const [coinInput, setCoinInput] = useState<string>("");
  const [amountInput, setAmountInput] = useState<number | string>(0);

  // some error / success handling (couldn't finish due to time constraint):
  const [inputError, setInputError] = useState<boolean>(false);
  const [inputSuccess, setInputSuccess] = useState<boolean>(false);

  function isFormInputValid() {
    if (
      AVAILABLE_COINS.includes(coinInput) &&
      Number(amountInput) > 0 &&
      Number(amountInput) < 50
    ) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e: any) {
    setInputError(false);

    e.preventDefault();

    const updateAmountOnExistingAsset = () => {
      const selectedAsset = assets.find((asset) => asset.name === coinInput);

      const updatedAssets = assets.map((asset) =>
        asset.name === selectedAsset!.name
          ? { ...asset, amount: asset.amount + Number(amountInput) }
          : asset
      );

      setAssets(updatedAssets);

      // Re-fetch the coin values in EUR here would also be necessary to keep the portfolio up to date after submitting. Due to time constraints, this couldn't be implemented.

      setAmountInput(0);
      setCoinInput("");
    };

    const addNewAsset = () => {
      let newAssetPortfolio: Asset[] = [
        ...assets,
        {
          name: coinInput,
          id: "temporaryId",
          amount: Number(amountInput),
          valueInEUR: 0,
        },
      ];

      setAssets(newAssetPortfolio);

      setAmountInput(0);
      setCoinInput("");
    };

    const submitForm = () => {
      assets.filter((asset) => asset.name === coinInput).length > 0
        ? updateAmountOnExistingAsset()
        : addNewAsset();
    };

    isFormInputValid() ? submitForm() : setInputError(true);
  }

  return (
    <div className="bg-slate-700 px-10 py-5 rounded-2xl w-full">
      <h2 className="">Add Coin</h2>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-6 mt-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Please type the coin you'd like to add:
          </label>
          <legend className="text-xs mb-2">
            Available coins: {AVAILABLE_COINS.join(", ")}
          </legend>
          <input
            type="text"
            id="coin"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={coinInput}
            onChange={(e) => setCoinInput(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Amount (in coin currency)
          </label>
          <legend className="text-xs mb-2">More than 0, less than 50</legend>
          <input
            type="number"
            id="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
            required
          />
        </div>
        {inputError && (
          <p className="text-red-500 mb-2">
            Please check your input and try again.
          </p>
        )}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ADD
        </button>
      </form>
    </div>
  );
}
