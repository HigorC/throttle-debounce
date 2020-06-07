# Throttle & Debounce

Project to visualization throttle/debounce behavior.

You can test it [clicking here :\]](https://higorc.github.io/throttle-debounce/)

The __Throttle__ function works like a funnel, just calling the required callback one single time per n miliseconds.

The __Debaunce__ function ignore all functions, while these continue to be called at a certain time, allowing the passage just of the last one.

### Project setup & run
```bash
npm install
npm run serve
```

### Quickly overview

Every time the click function is dispatch, is called a function to change color of background. However, on the left side of application, this function call is put inside a throttle function, and on rigth side, in a debounce function.

The debounce function is also used on all application counters. If the click event don't be triggered at least 5 seconds, all conters will be reset.

![Screenshoot](/src/assets/prints/ss1.png)

