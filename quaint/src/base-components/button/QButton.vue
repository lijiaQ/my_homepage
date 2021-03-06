<template>
  <button
    @click="click"
    :class="['q-button-' + type, plain ? 'is-plain' : '', focus ? 'focus' : '']"
    class="q-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'QButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      focus: false,
      timer: null
    }
  },
  methods: {
    click() {
      this.$emit('click')
      clearTimeout(this.timer)
      this.focus = true
      this.timer = setTimeout(() => {
        this.focus = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
.q-button {
  padding: 5px 15px;
  color: #fff;
  border-width: 1px;
  border-style: solid;
  outline: none;
  border-radius: 2px;
  transition-duration: 0.4s;
  transition-property: box-shadow;
}

.q-button-primary {
  color: #fff;
  border-color: var(--colorLum5);
  background-color: var(--colorLum4);
  box-shadow: 0 0 0 0 var(--colorLum3);
}

.q-button-primary.is-plain {
  color: var(--content);
  border-color: #e8eaec;
  background-color: #fff;
}

.q-button-primary:focus {
  color: #fff;
  background-color: var(--colorLum4);
  border-color: var(--colorLum4);
  animation: btn-focus 1s;
}

.q-button-primary:hover {
  color: #fff;
  border-color: var(--colorLum4);
  background-color: var(--colorLum4);
}

.q-button-success {
  color: #fff;
  background-color: #67c239;
  border-color: #67c239;
  box-shadow: 0 0 0 0 #b3e09d;
}

.q-button-success.is-plain {
  color: #67c239;
  background-color: #f0f9eb;
}

.q-button-success:focus {
  color: #fff;
  background-color: #85ce61;
  border-color: #85ce61;
  animation: btn-focus 1s;
}

.q-button-success:hover {
  color: #fff;
  background-color: #85ce61;
}

.q-button-danger {
  color: #fff;
  background-color: #f46c6c;
  border-color: #f46c6c;
  box-shadow: 0 0 0 0 #fab6b6;
}

.q-button-danger.is-plain {
  color: #f46c6c;
  background-color: #fef0f0;
}

.q-button-danger:focus {
  color: #fff;
  background-color: #f78989;
  border-color: #f78989;
  animation: btn-focus 1s;
}

.q-button-danger:hover {
  color: #fff;
  background-color: #f78989;
}

.q-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  box-shadow: 0 0 0 0 #f3d19e;
}

.q-button-warning.is-plain {
  color: #e6a23c;
  background-color: #fdf6ec;
}

.q-button-warning:focus {
  color: #fff;
  background-color: #ebb563;
  border-color: #ebb563;
  animation: btn-focus 1s;
}

.q-button-warning:hover {
  color: #fff;
  background-color: #ebb563;
}

.q-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  box-shadow: 0 0 0 0 #c8c9cc;
}

.q-button-info.is-plain {
  color: #909399;
  background-color: #f4f4f5;
}

.q-button-info:focus {
  color: #fff;
  background-color: #a6a9ad;
  border-color: #a6a9ad;
  animation: btn-focus 1s;
}

.q-button-info:hover {
  color: #fff;
  background-color: #a6a9ad;
}

@keyframes btn-focus {
  100% {
    box-shadow: 0 0 0 6px transparent;
  }
}
</style>
