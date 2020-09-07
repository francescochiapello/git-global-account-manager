
const ipt = require('ipt')
const out = require('simple-output')
const { exec } = require('child_process')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const runGitAccountManager = (gam) => {
  process.stdin.on('keypress', (ch, key) => { key && key.name === 'escape' && process.exit(0) })

  const DEFAULT = { name: 'Show configuration', value: 'git config --global -l' }

  const options = gam.map((el) => ({
    name: `Set profile :: <${el.name}>`,
    value: `git config --global user.email "${el.email}" && git config --global user.name "${el.name}" && git config --global -l`
  }))

  out.success('@ Git Account Manager @')
  ipt(
    [DEFAULT, ...options],
    {
      message: 'Select Git Account to set as global',
      autocomplete: true,
      multiple: false,
      size: options.length + 1
    })
    .then(async (command) => { await executeConsoleCommand(command) })
    .catch(() => {})
}

const executeConsoleCommand = async command => {
  // out.success('launching ' + command)
  await exec(`"${command}"`, (error, stdout, stderr) => {
    error && console.log(`\n:: ERROR :: \n\n${error.message}`)
    stderr && console.log(`\n:: STDERR :: \n\n${stderr}`)
    console.log(`\n:: CURRENT GIT GLOBAL CONFIGURATION :: \n\n${stdout}`)
  })
}

rl.on('close', () => { console.log('* COMPLETED *') })

;(async () => {
  let gam = []
  try { gam = require(process.env.HOME + '/.gam.json') } catch (error) {}
  runGitAccountManager(gam)
})()
