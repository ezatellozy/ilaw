<template>
  <div class="popup-wrapper">
    <div class="inner-content" :class="mode">
      <div class="popup-header"><i class="fa-solid fa-check"></i></div>

      <div class="popup-body">
        <p class="text-center justify-content-center fw-bold">
          {{ msg }}
        </p>
        <button class="btn btn-primary d-block action" @click="closePopup">
          {{ $t('misc.Ok') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['msg', 'mode'],
  methods: {
    closePopup() {
      this.$emit('close-popup')
    },
  },
}
</script>

<style lang="scss">
.popup-wrapper {
  position: fixed;

  top: 40px;
  right: 30px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // background: #22559db6;
  z-index: 210;
  .inner-content {
    width: 270px;
    position: relative;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 8px 0 #000;
    &.success {
      .popup-header {
        background: #6fd649;
      }
      .popup-body {
        p {
          color: #6fd649;
        }
        button {
          background: #6fd649;
          border-color: #6fd649;
        }
      }
    }
    &.danger {
      .popup-header {
        background: red;
        .fa-check {
          &::before {
            content: '\f00d';
          }
        }
      }
      .popup-body {
        p {
          color: red;
        }
        button {
          background: red;
          border-color: red;
        }
      }
    }
    .popup-header {
      position: absolute;
      width: 60px;
      height: 60px;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background: #000;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 25px;
    }
    .popup-body {
      margin-top: 10px;
      display: flex;
      min-height: 150px;

      flex-direction: column;
      p {
        flex: 1;
        display: flex;
        align-items: center;
        text-align: center;
      }
      button {
        margin-top: auto !important;
        border-radius: 5px !important;
        &:hover {
          background: #22559d !important;
          border-color: #22559d;
        }
      }
    }
  }
}
</style>
