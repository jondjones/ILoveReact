# Senior React Developer Code Challenge

This coding challenge is an opportuninty for you to show us your advanced JavaScript and React skills. UI is not the goal of this challenge.

Send us a link to the github repository that we can easily clone and run.

# Problem
[Here](https://github.com/Adylic/react-coding-challenge) you can find the skeleton of the application. Clone it and use as a starting point for your application.

In the `src/back-end/server.js` you can find a `mockFetch` function that you can use as if you were fetching data from a real server. The `mockFetch` exposes two endpoints: `/variant` and `/columns`.

Each endpoint uses timeout to resolve the promise at a random time.  
15% of responses throw an internal server error.
10% of responses throw and unauthorised error.

### Variant
There is only a single variant returned by the `mockFetch` function. A variant is an object. One of its properties is `working_data`. There you can find frames objects `first`, `middle`, `last`. 
Each frame has a `frame_id` and a `content` object. The `content` object includes `key-value` pairs.

### Columns
When you `mockFetch` columns you will receive an array of objects. Every object has a `parent_frame_id` that corresponds to the `frame_id` of a frame in the `variant.working_data.frames`. 

## Task
[Here](https://www.figma.com/proto/SaRvPAf6Hltz9xe04obPEx/Untitled?node-id=15%3A0&scaling=min-zoom) is the design of the final product. 
Use the best practices to build the application that meets your 'production-ready' definition.

## Requirements
1. The server uses snake notation. Usually, the front-end uses camel-case notation. Create an universal function that will transform returned `variant` and `columns` to the camel case format.
2. Create a UI that displays a single frame from the `variant` in form of a row. Render only data that is present in the `columns` array. Hide columns that have `is_hidden` field set to `true`. Ignore columns you can find in `variant.working_data.frames` but are not present in `columns` array. User should be able to switch between frames of the `variant` by clicking the square buttons in the top-left part of the application.
3. When user clicks on the `Copy Frames` button all the variant's frames should be copied, stored in state and displayed.
4. When the application throws an 'Unauthorized' error, it should show a pop-up window with text "You are not authorised". User should be able to close the pop-up window by clicking on the "X" or by clicking away.

Good Luck!





