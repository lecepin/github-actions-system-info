#!/usr/bin/env node
import si from "systeminformation";

// Promise.all([
//   si.osInfo(),
//   si.cpu(),
//   si.mem(),
//   si.memLayout(),
//   si.graphics(),
//   si.diskLayout(),
// ]).then(([osInfo, cpu, mem, memLayout, graphics, diskLayout]) => {
//   console.table([
//     {
//       name: "系统信息",
//       info: `${osInfo.distro} ${osInfo.kernel} ${osInfo.arch}`,
//     },
//     {
//       name: "处理器",
//       info: `${cpu.manufacturer} ${cpu.brand} ${cpu.speed}GHz ${cpu.physicalCores}核`,
//     },
//     {
//       name: "内存",
//       info: `${~~(mem.total / Math.pow(1024, 3))}GB`,
//     },
//     {
//       name: "硬盘",
//       info: `${~~((diskLayout?.[0]?.size ?? 0) / Math.pow(1024, 3))}GB`,
//     },
//   ]);
// });


Promise.all([si.osInfo(), si.cpu(), si.mem(), si.memLayout(), si.graphics(), si.diskLayout()]).then(([osInfo, cpu, mem, memLayout, graphics, diskLayout]) => {
  var _diskLayout$0$size, _diskLayout$;
  console.table([{
    name: "系统信息",
    info: `${osInfo.distro} ${osInfo.kernel} ${osInfo.arch}`
  }, {
    name: "处理器",
    info: `${cpu.manufacturer} ${cpu.brand} ${cpu.speed}GHz ${cpu.physicalCores}核`
  }, {
    name: "内存",
    info: `${~~(mem.total / Math.pow(1024, 3))}GB`
  }, {
    name: "硬盘",
    info: `${~~(((_diskLayout$0$size = diskLayout === null || diskLayout === void 0 || (_diskLayout$ = diskLayout[0]) === null || _diskLayout$ === void 0 ? void 0 : _diskLayout$.size) !== null && _diskLayout$0$size !== void 0 ? _diskLayout$0$size : 0) / Math.pow(1024, 3))}GB`
  }]);

  console.log({osInfo, cpu, mem, memLayout, graphics, diskLayout})
});