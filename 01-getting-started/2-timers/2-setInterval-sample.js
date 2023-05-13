setInterval(
  () => console.log('Hello every 3 seconds'),
  3000
);

// setImmediate ~ timeout 0 ~ not fired
// const timerId = setTimeout... , clearTimeout(timerId), clearInterval, clearImmediate

/*
let i = 0;

const timerId = setInterval(() => {
        console.log('Hello World!');
        i++;
        if (i === 5) {
            console.log('Done');
            clearInterval(timerId);
        }
    }, 1000
);
*/