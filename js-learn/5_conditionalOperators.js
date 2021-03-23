const courseStatus = "pending"

if (courseStatus === "ready") {
  console.log("Курс уже готов")
} else if (courseStatus === "pending") {
  console.log("Курс в процессе")
} else {
  console.log("Курс не получился")
}

const isReady = true

// if (isReady) {
//   console.log("Готов")
// } else {
//   console.log("Не готов")
// }

isReady ? console.log('Готов') : console.log("Не готов")