export const FetchData = async (props: string) => {
  let response = await (
    await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&ids=${props}&locale=en`
    )
  ).json();

  return response;
};
