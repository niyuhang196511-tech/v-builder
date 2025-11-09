<script setup lang="ts">
import Navigation from './Navigation.vue'
import Components from './Components.vue'
import { Plus } from '@icon-park/vue-next'
import { useDisclosure } from '@/hooks/useDisclosure'
import BlocksDrawer from './BlocksDrawer.vue'

const [isOpen, { toggle }] = useDisclosure(false)
</script>

<template>
    <div class="app-left-panel-wrapper">
        <div class="app-left-panel-drawer">
            <div class="app-left-panel-split tiny-scrollbar">
                <div class="drawer-header">
                    <div class="drawer-title">NAVIGATION</div>
                </div>
                <div class="drawer-content">
                    <Navigation />
                </div>
            </div>
            <div class="app-left-panel-split tiny-scrollbar">
                <div class="drawer-header">
                    <div class="drawer-title">COMPONENTS</div>
                    <button :class="['drawer-component-adder']" @click="toggle">
                        <Plus size="18" />
                    </button>
                </div>
                <div class="drawer-content">
                    <Components />
                </div>
            </div>
        </div>
        <Transition name="">
            <div class="app-left-sub-panel-drawer" v-show="isOpen">
                <BlocksDrawer />
            </div>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.app-left-panel-wrapper {
    position: relative;
    display: flex;
    flex-direction: nowrap;
    z-index: 4;
    height: 100%;

    .drawer-header {
        display: flex;
        position: sticky;
        justify-content: space-between;
        align-items: center;
        top: 0;
        height: 52px;
        padding: 0 10px 0 20px;
        font-weight: var(--font-weight-bolder);
        background-color: var(--color-white);

        .drawer-component-adder {
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            margin-left: 10px;
            width: 28px;
            height: 28px;
            color: var(--color-white);
            background-color: var(--color-black);
            cursor: pointer;
            box-shadow:
                rgba(62, 65, 86, 0.25) 0px 0px 1px,
                rgba(62, 65, 86, 0.1) 0px 4px 8px;
            transition: all 0.3s ease;

            &:hover {
                opacity: 0.8;
            }

            &.opened {
                background-color: var(--color-gray-300);
                color: var(--color-black);
                transform: rotate(-45deg);
                transition: all 0.3s ease;
            }
        }
    }

    .drawer-content {
        padding: 0 10px;
    }

    .app-left-panel-drawer {
        width: var(--panel-width);
        height: 100%;
        box-shadow: var(--color-gray-300) 1px 0 0;
        overflow: hidden;

        .app-left-panel-split {
            height: 50%;
            overflow: auto;
            border-bottom: 1px solid var(--color-gray-200);
            border-right: 1px solid var(--color-gray-200);
        }
    }

    .app-left-sub-panel-drawer {
        width: var(--panel-width);
        height: 100%;
        box-shadow: var(--color-gray-300) 1px 0 0;
        overflow: hidden;
    }
}
</style>
