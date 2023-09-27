export default function isTheSameForm(iv, fv) {
  const arr = Object.keys(iv);
  let bool = true;
  arr.forEach(item => {
    if (iv[item] != fv[item]) bool = false;
  });

  return bool;
}
