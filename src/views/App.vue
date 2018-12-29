<template>
    <div id="page-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>

const DEFAULT_TRANSITION = 'fade';
const DEFAULT_TRANSITION_MODE = 'out-in';

export default {
    data() {
        return {
            transition: DEFAULT_TRANSITION,
            transitionMode: DEFAULT_TRANSITION_MODE,
            enterActiveClass: '',
        }
    },
    methods: {

        beforeLeave(element) {
            this.prevHeight = getComputedStyle(element).height;
            },

            enter(element) {
            const { height } = getComputedStyle(element);

            element.style.height = this.prevHeight;

            setTimeout(() => {
                element.style.height = height;
            });
        },

        afterEnter(element) {
            element.style.height = 'auto';
        },

    },

    created() {
        this.$router.beforeEach((to, from, next) => {
            let transitionName = to.meta.transition || from.meta.transition || DEFAULT_TRANSITION;
            if (transitionName === 'slide') {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
            }
            this.transitionMode = DEFAULT_TRANSITION_MODE;
            this.enterActiveClass = `${transitionName}-enter-active`;
            if (to.meta.transition === 'zoom') {
              this.transitionMode = 'in-out';
              this.enterActiveClass = 'zoom-enter-active';
              // Disable scrolling in the background.
              document.body.style.overflow = 'hidden';
            }
            if (from.meta.transition === 'zoom') {
              this.transitionMode = null;
              this.enterActiveClass = null;
              // Enable scrolling again.
              document.body.style.overflow = null;
            }
            this.transition = transitionName;
            next();
        });
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
}

</style>


