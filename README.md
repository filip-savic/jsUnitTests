# Javascript Unit Tests

## Setup:

### What we'll be using:

- [Mocha - test framework](https://mochajs.org/)
    - describe and it blocks, before/after hooks
- [Chai - assertion library](http://chaijs.com/)
    - methods for testing claims
- [Sinon - spies, stubs and mocks](http://sinonjs.org/)
    - spying on methods (call count, call order, arguments, return value..), rewriting them for testing purposes, fake server for ajax calls
- [Karma - test runner](https://karma-runner.github.io/1.0/index.html)
    - easily set up files to include and browsers in which to test
- [Karma plugins and launchers](https://www.npmjs.com/browse/keyword/karma-plugin)
    - plugins for testing frameworks, browsers...


### Install and configuration

One line install:

```
npm install mocha chai sinon karma karma-cli karma-mocha karma-chai karma-sinon karma-phantomjs-launcher karma-chrome-launcher karma-mocha-reporter --save-dev
```


To configure karma run:

```
karma init
```

Or tweak options that can be found in [karma configuration file docs](https://karma-runner.github.io/1.0/config/configuration-file.html).

### Reporters

For output of test results, there are lots of karma reporter plugins available, here are some of them:

- [mocha reporter](https://www.npmjs.com/package/karma-mocha-reporter)
- [spec reporter](https://www.npmjs.com/package/karma-spec-reporter)
- [nyan reporter](https://www.npmjs.com/package/karma-nyan-reporter)
- [html reporter](https://www.npmjs.com/package/karma-html-reporter)
- [npm list of reporters](https://www.npmjs.com/search?q=karma+reporter)

Install reporter and add it to `karma.conf.js`:

```
reporters: ['mocha']
```

-----

## Writing tests

### Simple sum function

#### TDD and BDD test styles

    - Test Driven Development and Behaviour Driven Development
    - use whatever suits your application best

### DOM manipulation and fixtures

    - loading html fixtures

### Spying and stubbing methods with Sinon.js

    - spy on a method to see how many times it was called
    - stub a method to avoid it's side effects

### Ajax calls and fake server

    - test code that was executed after succesfull ajax call
    - a few ways to use sinon 

### Potential pitfalls


#### Test execution order https://realguess.net/2015/04/01/test-execution-order-in-mocha/

#### Ne treba testirati svaku liniju koda

Test bi trebao provjeravati rezultat ili efekt koji nastaje izvršavanjem koda. Svaki problem se može riješiti na više načina i nije potrebno provjeravati svaki korak odnosno liniju koda. Ovako napisani testovi su lomljivi (brittle). Takvo stanje je nepoželjno jer, ako se promjeni implementacija bez promjene rezultata, testovi će javiti grešku.

#### Testirati kompajlirani kod

Ako se u build procesu koristi alat koji mijenja kod (npr. babel transpiler) bolje je testirati kompajlirani kod koji će se na kraju i izvršavati na produkciji.


#### Paziti na


## Useful articles:

- Client-side testing with Mocha and Karma
https://sean.is/writing/client-side-testing-with-mocha-and-karma/
