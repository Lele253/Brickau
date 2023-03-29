<template>
<div>
  <video id="webcam"></video>
</div>
</template>

<script>
 navigator.mediaDevices.getUserMedia({video:true}).then(stream => {
   let webcam = document.querySelector("#webcam");
   webcam.srcObject = stream; webcam.play()})
export default {
  name: "TestView"
}
</script>

<style scoped>
#webcam{
  width: 400px;
  height: 400px;
}
</style>
