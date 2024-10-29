#!/usr/bin/env node
import { execSync } from "child_process";

execSync(`pnpm list -g -P --no-optional`, { stdio: "inherit" });

console.log("\nUpdating...");
const output = JSON.parse(execSync(`pnpm list -g --json`).toString()) as Record<string, unknown>[];
const deps = Object.keys(output[0].dependencies as Record<string, Record<string, string>>);
execSync(`pnpm add -g ${deps.join(" ")}`);

console.log("\nDone");
