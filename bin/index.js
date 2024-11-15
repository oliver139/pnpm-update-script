#!/usr/bin/env node
"use strict";var o=require("child_process");o.execSync("pnpm list -g -P --no-optional",{stdio:"inherit"}),console.log(`
=========================================`),console.log("Command to be executed..."),console.log(`=========================================
`);const n=JSON.parse(o.execSync("pnpm list -g --json").toString()),e=Object.keys(n[0].dependencies);console.log(`pnpm add -g ${e.join(" ")}`),console.log(`
=========================================`),console.log("Updating..."),console.log(`=========================================
`),o.execSync(`pnpm add -g ${e.join(" ")}`,{stdio:"inherit"}),console.log(`
=========================================`),console.log("Done"),console.log("=========================================");
