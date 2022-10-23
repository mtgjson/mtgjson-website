<template lang="pug">
label.data-toggler(:class="class")
  input(
    class="input"
    type="checkbox"
    :checked="checked"
    @change="onChange")
  .data-toggler-toggle
  p.label(v-if="label") {{ label }}
</template>

<script setup lang="ts">
import type { HTMLChangeEvent } from '../types';

type Props = {
  class?: string;
  label?: string;
  checked?: boolean;
  callback?: (event: HTMLChangeEvent) => {};
};

const props = defineProps<Props>();

const onChange = (event: HTMLChangeEvent): void => {
  props.callback(event.target.checked);
};
</script>

<style lang="scss" scoped>
.data-toggler {
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  /* Visually hide the checkbox input */
  .input {
    position: absolute;
    pointer-events: none;
    z-index: -1;

    &:checked + .data-toggler-toggle {
      background-color: var(--green-color);

      &::before {
        border-color: var(--green-color);
        transform: translateX(calc(var(--toggle-container-width) - var(--toggle-size)));
      }
    }
  }

  &-toggle {
    /* Vertically center the inner circle */
    display: flex;
    align-items: center;
    position: relative;
    width: 3rem;
    height: 1.5rem;
    /* Make the container element rounded */
    border-radius: var(--toggle-size);
    background-color: var(--gray-5-color);
    /* In case the label gets really long, the toggle shouldn't shrink. */
    flex-shrink: 0;

    &::before {
      content: '';
      position: absolute;
      /* Move a little bit the inner circle to the right */
      left: 1px;
      height: calc(var(--toggle-size) - 6px);
      width: calc(var(--toggle-size) - 6px);
      /* Make the inner circle fully rounded */
      border-radius: 50%;
      background-color: var(--light-color);
      border: 2px solid var(--gray-5-color);
    }

    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      width: 1rem;
      height: 1rem;
      background-size: cover;
    }
  }

  .label {
    margin: 0 0 0 0.5rem;
    font-weight: bold;
  }

  &.theme-toggler {
    .data-toggler-toggle {
      &::after {
        right: 3px;
        left: auto;
        background-image: url('/images/icons/icon-theme-toggle-dark.svg');
      }
    }

    .input {
      &:checked + .data-toggler-toggle {
        background-color: var(--gray-5-color);

        &::before {
          border-color: var(--gray-5-color);
        }

        &::after {
          left: 3px;
          right: auto;
          background-image: url('/images/icons/icon-theme-toggle-light.svg');
        }
      }
    }
  }
}
</style>
