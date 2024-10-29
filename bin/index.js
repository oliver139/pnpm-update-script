"use strict";var e=require("child_process");e.execSync("pnpm list -g -P --no-optional",{stdio:"inherit"}),console.log(`
Updating...`);const n=JSON.parse(e.execSync("pnpm list -g --json").toString())[0],o=Object.keys(n.dependencies);e.execSync(`pnpm add -g ${o.join(" ")}`),console.log(`
Done`);
