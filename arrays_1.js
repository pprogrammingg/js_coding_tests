// Given an array a, your task is to output an array b of the same length by applying the following transformation:
// – For each i from 0 to a.length - 1 inclusive, b[i] = a[i - 1] + a[i] + a[i + 1]
// – If an element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, use 0 in its place
// – For instance, b[0] = 0 + a[0] + a[1]

const produce_b_given_a = (a) => {
  if (a.lenght == 0) return []

  let b = []
  let prev,
    next,
    a_prev,
    a_next = 0
  a.forEach((ele, i) => {
    prev = i - 1
    next = i + 1
    b[i] = (prev < 0 ? 0 : a[prev]) + ele + (next >= a.length ? 0 : a[next])
  })

  return b
}

// Exporting the function to be used in other files
module.exports = {
  produce_b_given_a,
}
