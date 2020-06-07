<template>
  <div class="footer">
    <p>
      Made with
      <span>
        <i class="fas fa-heart"></i>
      </span>
      by
      <a target="_blank" href="https://www.github.com/higorc">HigorC</a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  color: #ffffff;
  background-color: #000000;
  width: 100%;
  text-align: right;
  p {
    font-size: 8px;
    margin-right: 30px;
    a {
      color: #ffffff;
      text-decoration: none;
      &:hover {
        color: rgb(255, 70, 70);
      }
    }
    span {
      font-size: 12px;
    }
    svg {
      color: rgb(255, 70, 70);
    }
  }
}
</style>