<template>
<n-layout
  class="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(135deg,#2d8cf01a,#2d8cf00d)] bg-[url('https://gratis.naiveadmin.com/assets/login-BJnRyGHB.svg'),radial-gradient(circle_at_10%_20%,#6495ed40,#4169e133_40%,#1e90ff1a_90%)] bg-cover bg-no-repeat h-screen w-full">
  <div class="relative w-full h-screen overflow-hidden">

  <!-- Line 1 -->
  <div class="absolute w-[300px] h-[2px] top-[15%] right-[5%] rotate-[-30deg] 
              bg-[linear-gradient(90deg,rgba(45,140,240,0.2),rgba(0,129,255,0.1))] 
              animate-pulse-line"></div>

  <!-- Line 2 -->
  <div class="absolute w-[200px] h-[2px] bottom-[20%] left-[10%] rotate-[45deg] 
              bg-[linear-gradient(90deg,rgba(45,140,240,0.2),rgba(0,129,255,0.1))] 
              animate-pulse-line"></div>

  <!-- Square 1 -->
  <div class="absolute w-[80px] h-[80px] top-[10%] left-[15%] 
              bg-[linear-gradient(45deg,rgba(45,140,240,0.15),rgba(0,129,255,0.05))] 
              rotate-[30deg] animate-rotate-shape"></div>

  <!-- Square 2 -->
  <div class="absolute w-[50px] h-[50px] bottom-[15%] right-[15%] 
              bg-[linear-gradient(45deg,rgba(45,140,240,0.15),rgba(0,129,255,0.05))] 
              rotate-[-20deg] animate-rotate-shape-reverse animate-rotate-shape"></div>

  <!-- Triangle -->
  <div class="absolute bottom-[30%] right-[20%] w-0 h-0 
              border-l-[50px] border-l-transparent
              border-r-[50px] border-r-transparent
              border-b-[80px] border-b-[rgba(45,140,240,0.08)]
              animate-float-shape"></div>

  <!-- Wave layers -->
  <div class="absolute bottom-0 left-0 w-full h-[120px] animate-[wave-move_15s_ease-in-out_0s_infinite] opacity-30 rotate-[-2deg] 
              bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0icmdiYSg0NSwgMTQwLCAyNDAsIDAuMikiIGQ9Ik0wLDMyMEMwLDI0MCA0MCwxNjAgODAsMTYwQzEyMCwxNjAgMTYwLDI0MCAyMDAsMjQwQzI0MCwyNDAgMjgwLDE2MCAzMjAsMTYwQzM2MCwxNjAgNDAwLDI0MCA0NDAsMjQwQzQ4MCwyNDAgNTIwLDE2MCA1NjAsMTYwQzYwMCwxNjAgNjQwLDI0MCA2ODAsMjQwQzcyMCwyNDAgNzYwLDE2MCA4MDAsMTYwQzg0MCwxNjAgODgwLDI0MCA5MjAsMjQwQzk2MCwyNDAgMTAwMCwxNjAgMTA0MCwxNjBDMTA4MCwxNjAgMTEyMCwyNDAgMTE2MCwyNDBDMTIwMCwyNDAgMTI0MCwxNjAgMTI4MCwxNjBDMTMyMCwxNjAgMTM2MCwyNDAgMTQwMCwyNDBDMTQ0MCwyNDAgMTQ0MCwxNjAgMTQ0MCwxNjBMMTQ0MCwzMjBMMCwzMjBaIj48L3BhdGg+PC9zdmc+)] bg-[length:100%_120px] animate-wave-1"></div>
  <div class="absolute bottom-0 left-0 w-full h-[120px] animate-[wave-move_18s_ease-in-out_-5s_infinite] opacity-20 rotate-[1deg] 
              bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0icmdiYSg0NSwgMTQwLCAyNDAsIDAuMTUpIiBkPSJNMCwzMjBDMCwyNDAgNjAsMTgwIDEyMCwxODBDMTgwLDE4MCAyNDAsMjQwIDMwMCwyNDBDMzYwLDI0MCA0MjAsMTgwIDQ4MCwxODBDNTQwLDE4MCA2MDAsMjQwIDY2MCwyNDBDNzIwLDI0MCA3ODAsMTgwIDg0MCwxODBDOTAwLDE4MCA5NjAsMjQwIDEwMjAsMjQwQzEwODAsMjQwIDExNDAsMTgwIDEyMDAsMTgwQzEyNjAsMTgwIDEzMjAsMjQwIDEzODAsMjQwQzE0NDAsMjQwIDE0NDAsMTgwIDE0NDAsMTgwTDE0NDAsMzIwTDAsMzIwWiI+PC9wYXRoPjwvc3ZnPg==)] bg-[length:100%_120px] animate-wave-2"></div>
  <div class="absolute bottom-0 left-0 w-full h-[120px] opacity-10 rotate-[-1deg] 
              bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0icmdiYSg0NSwgMTQwLCAyNDAsIDAuMSkiIGQ9Ik0wLDMyMEMwLDI2MCAzMCwyMDAgNjAsMjAwQzkwLDIwMCAxMjAsMjYwIDE1MCwyNjBDMTgwLDI2MCAyMTAsMjAwIDI0MCwyMDBDMjcwLDIwMCAzMDAsMjYwIDMzMCwyNjBDMzYwLDI2MCAzOTAsMjAwIDQyMCwyMDBDNDUwLDIwMCA0ODAsMjYwIDUxMCwyNjBDNTQwLDI2MCA1NzAsMjAwIDYwMCwyMDBDNjMwLDIwMCA2NjAsMjYwIDY5MCwyNjBDNzIwLDI2MCA3NTAsMjAwIDc4MCwyMDBDODEwLDIwMCA4NDAsMjYwIDg3MCwyNjBDOTAwLDI2MCA5MzAsMjAwIDk2MCwyMDBDOTkwLDIwMCAxMDIwLDI2MCAxMDUwLDI2MEMxMDgwLDI2MCAxMTEwLDIwMCAxMTQwLDIwMEMxMTcwLDIwMCAxMjAwLDI2MCAxMjMwLDI2MEMxMjYwLDI2MCAxMjkwLDIwMCAxMzIwLDIwMEMxMzUwLDIwMCAxMzgwLDI2MCAxNDEwLDI2MEMxNDQwLDI2MCAxNDQwLDIwMCAxNDQwLDIwMEwxNDQwLDMyMEwwLDMyMFoiPjwvcGF0aD48L3N2Zz4=)] bg-[length:100%_120px] animate-wave-3"></div>

</div>

<div class="bg-brand animate-wave-3 animate-rotate-shape animate-rotate-shape animate-float-shape">123</div>
  </n-layout>
</template>
<script>
</script>
<style lang="">
  
</style>