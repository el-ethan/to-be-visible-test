# to-be-visible-test
A minimal example to reproduce issues with `toBeVisible` and styled-components

To reproduce, run `npm i && npm test`. In my opinion, the failing test should not fail.
From debugging, the reason for the failure appears to stem from JSDom's handling of css `vsibility`.
[This issue](https://github.com/jsdom/jsdom/issues/3182) seems to be related. 
