////We need to sum big numbers and we require your help.

////Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

/// solution


function add(x, y) {
  // this solution was also good
  // return (BigInt(a) + BigInt(b)).toString();
  const l = Math.max(x.length, y.length);
    const r = Array(l).fill().reduce(
        (a, _, i) => [
            (a[1] + +(x[x.length - 1 - i] || '0') + +(y[y.length - 1 - i] || '0')) % 10 + a[0],
            +((a[1] + +(x[x.length - 1 - i] || '0') + +(y[y.length - 1 - i] || '0')) > 9)
        ],
        ['', 0]);
    return '' + (r[1] ? r[1] : '') + r[0]
}
