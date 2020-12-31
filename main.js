const si = require("systeminformation");

Promise.all([
  si.osInfo(),
  si.cpu(),
  si.mem(),
  si.memLayout(),
  si.graphics(),
  si.diskLayout(),
]).then(([osInfo, cpu, mem, memLayout, graphics, diskLayout]) => {
  console.table([
    {
      name: "系统信息",
      info: `${osInfo.distro} ${osInfo.kernel} ${osInfo.arch}`,
    },
    {
      name: "处理器",
      info: `${cpu.manufacturer} ${cpu.brand} ${cpu.speed}GHz ${cpu.physicalCores}核`,
    },
    {
      name: "内存",
      info: `${~~(mem.total / Math.pow(1024, 3))}GB`,
    },
    {
      name: "硬盘",
      info: `${~~(diskLayout[0].size / Math.pow(1024, 3))}GB`,
    },
  ]);
});
