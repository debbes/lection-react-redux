function* generator(i) {
  // console.log(12312321);
  yield i;
  yield 'dsakdkl';
  const value = yield i;
  return value;
}

const iterator = generator(5);

console.log(
  iterator
);

console.log(iterator.next());
console.log(iterator.next(120));
console.log(iterator.next());
console.log(iterator.next(100));
