import { execSync } from "child_process"
import os from "os"
import path from "path"
import chalk from "chalk"
function colorSuccess(text) {
  return chalk.green(text)
}
function colorFailure(text) {
  return chalk.red(text)
}
function checkNode() {
  console.log(colorSuccess("Node.js version:"), process.version)
}

function checkNpm() {
  try {
    execSync("npm --version", { stdio: "ignore" })
    console.log(colorSuccess("npm detected."))
  } catch {
    console.log(colorFailure("npm not found!"))
  }
}

function findAndroidSdk() {
  let sdk = process.env.ANDROID_HOME || process.env.ANDROID_SDK_ROOT
  if (!sdk && process.platform === "win32") {
    sdk = path.join(os.homedir(), "AppData", "Local", "Android", "Sdk")
  }
  return sdk
}

function checkAndroidSdk() {
  const sdk = findAndroidSdk()
  if (sdk) console.log(colorSuccess("Android SDK detected:"), sdk)
  else console.log(colorFailure("Android SDK not found!"))
}

function checkGradle() {
  try {
    execSync("gradle -v", { stdio: "ignore" })
    console.log(colorSuccess("Gradle detected."))
  } catch {
    console.log(colorFailure("Gradle not found!"))
  }
}

function checkJava() {
  try {
    const out = execSync("java -version", { stdio: ["pipe", "pipe", "pipe"] }).toString()
    console.log(colorSuccess("Java JDK detected:"))
  } catch {
    console.log(colorFailure("Java JDK not found!"))
  }
}

export default function runDoctor() {
  console.log(colorSuccess("Doctor summary :"));
  checkNode()
  checkNpm()
  checkAndroidSdk()
  checkGradle()
  checkJava()
}


