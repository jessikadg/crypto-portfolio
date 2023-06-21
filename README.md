# Crypto Portfolio

For this assignment, the goal was to create a portfolio page, where users can see their assets and add new assets, in a clean UI/UX. Functionality was priority over design. I had a limited amount of time to start and finish this assignment, so a few things I could only point out the way with comments, but the Portfolio is functional and uses real data from Coin Gecko.

![Screenshot 2023-06-21 at 12 33 09](https://github.com/jessikadg/crypto-portfolio/assets/48770521/1a661cb5-eb30-430c-a356-0da166cbed41)


## Planning and Decision Making

Technical:
First off, I visualised a single page app, with three main sections: a full-width portolio on top, and two columns with the list of assets and the form to add new coins.

- I set up the initial project with react, tailwind css and typescript. Due to some recent changes in React, TailWind Documentation was recommending to install with with Next.js (you can check it on Tailwind CSS Docs > Getting started). I chose this stack because on previous interviews there was a mention of TailWind CSS and I'm familiar with it. Next.js is also on my day-to-day so no issues.
- Once evertyhing was installed correctly, I knew I would have to come up with at least 3 components: Main Overview, Coin List Item, and a Form.
- Besides these visible components, it would be a good practice to extract the data fetching to a separate component and only call it when needed via useEffect, to improve performance.
- An `Asset` Type was also created and re-used many times in the development process - and extracted to its own folder.
- In a real-life scenario, this data would go into a Hook, or come via React Query, to each of the components, not straight from the fetch. But for the sake of time I skipped that.
- Same with validation, login, and other important features. I tried to keep it to a minimum from the Assignment Scope.
- To limit the scope, for the sake of time, I listed a few hard-coded available coins for the Add Coin Form. In a real-life scenario, I would make another request to the API for a complete Coin List. The one from CoinGecko had more than one thousand coins, though, therefore my decision to limit it to a few main ones.

UX & styling:

- I kept the style in dark mode for that's what most exchanges / pro packages use, so it would be familiar for the user.
- An initial Portfolio was also created seperatly as a way to have something visible for the user from the get-go.
- A single page, with multiple elements was in my view the best choice here in terms of visualizing the changes, without having the need for animations or other complex implementations.
- I signaled some error and success states hangling with `useState` on the code, just as a placeholder of how I would do that in a more complete way. Some of those states are not used, but in a real project, we would complete the implementation. I did manage to implement a `inputError` for when validation fail.
- Since this is a private repo, I took the liberty to use the company's logo on the header to give it a more personalised look and feel.

## Cloning this repo and running it locally:

- clone the repo in your machine
- Run `npm i` to install node dependencies
- Run `npm run dev` to run in developer mode

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
