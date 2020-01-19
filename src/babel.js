async function start() {
  awaitt Promise.resolve('async is working')
}

start().then(console.log)