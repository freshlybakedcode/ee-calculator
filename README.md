# Equal Experts front-end test

![image](https://user-images.githubusercontent.com/7483359/129933195-afc97fd8-9348-4eec-8af3-f0a906178bba.png)

`We’d like you to write a basic calculator with Equal Experts branding. You can use whichever approach you prefer, with or without frameworks. We expect this test to take between 60-90 minutes and suggest that it’s more important that we can see how the development would continue than for every feature to be present.
Please submit either a zip file, or a turn to a GitHub repo containing your solution, including a readme file describing how to run the solution and its tests.`

## Useage

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn coverage`

Runs the tests with a coverage report

## Approach to problem

This could definitely have been completed with a vanilla-JS approach but I opted to go with React because I'm familiar with it and felt it would be useful to demonstrate this, and I thought that the built-in state and re-rendering would make solving this type of problem easier.  I also added the Styled Components library because I've been using it quite a bit recently and I like the way it works with React components.

I started with a quick sketch on paper because for quick iteration I think it's more efficient to have _something_ laid out to work from rather than just going straight into code and thinking about it while typing:

![IMG_4516](https://user-images.githubusercontent.com/7483359/129933097-7f0e3334-1ad0-4dd9-aa19-2422b8fcb149.JPG)

Once I'd written those three components and set up state handling etc. it threw up a number of decisions which I had to make pretty quickly given the limited time available.  These included:
- How to identify the pressed key
- How to differentiate between an operator and numerical key
- How to actually evaluate a sum
- The clear and clear entry functions (and how they are actually meant to work)
- Solving the floating point issues

I also discovered a number of cases which needed guarding against, for example:
- Removing the initial zero in display
- Pressing enter without a sum to evaluate
- Pressing operator buttons multiple times

Ultimately, I'm happy with the solution I produced given the period of time I worked on it for.  Of course, in hindsight I would have made several different architectural decisions and I was itching to spend a couple of hours refactoring it; I certainly don't consider this to be production-ready code!  I'm more than happy to talk through the points I've raised above and what led me to make the decisions I did and how I would do it differently if I was to tackle this again.

Once I had a working calculator I added the tests; although I have worked in a TDD environment before, the last few years I've been BDD and I find this to work well for front-end development.  My test strategy was to take each utility function and make sure that given a variety of inputs it would return what I expected.  This did throw up a couple of bugs in the code which I resolved (`clearEntry()` and `evaluateSum()` - happy to talk through these as well).  For the component tests I like to use a snapshot test as a basic start point to make sure the styling hasn't been interfered with by developers at a later date and then add further tests.  RTL encourages you to focus on functionality as observed by the user and to avoid trying to worry about implementation details.  I added some checks to make sure that the rendered output matched what I would expect and then for the main `Calculator` test file I interacted with the component to press buttons and ensure that the results matched the expected behaviour.  I based the decision on what to test by looking through the functions in the `Calculator` component and performing operations which would trigger them.

Coverage report is provided via Jest; all files I've written are fully covered except for `fonts.js` which was added late in the day for the styling of the screen output.  The only files missing coverage are the ones created by `create-react-app`.

![image](https://user-images.githubusercontent.com/7483359/129933309-e14d9e66-888f-4f87-9235-028f422484e3.png)

Finally, I took some extra time to add some styling and make the calculator look a bit fancier.  Again, I did this using Styled Components but it certainly could be done by targeting components with classes and then using regular CSS/SASS stylesheets.  Given more time I'd certainly be making more use of SASS variables for the colours and it would be a tidier operation but I'm happy given the time constraints.
