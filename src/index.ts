#!/usr/bin/env node
import { execSync } from "child_process";

execSync(`pnpm list -g -P --no-optional`, { stdio: "inherit" });

console.log("\n=========================================");
console.log("Command to be executed...");
console.log("=========================================\n");

const output = JSON.parse(execSync(`pnpm list -g --json`).toString()) as Record<string, unknown>[];
const deps = Object.keys(output[0].dependencies as Record<string, Record<string, string>>);
console.log(`pnpm add -g ${deps.join(" ")}`);

console.log("\n=========================================");
console.log("Updating...");
console.log("=========================================\n");

execSync(`pnpm add -g ${deps.join(" ")}`, { stdio: "inherit" });

console.log("\n=========================================");
console.log("Done");
console.log("=========================================");
