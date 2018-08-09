<template>
  <div>
    <h1>Hello {{ value }}</h1>
    <input type="text" v-bind:value="inputValue" v-on:input="handleInput($event)" />
    <button v-on:click="handleClick()" v-bind:disabled="isDisabled">button</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { mapMutations, mapState } from 'vuex';

const SET_VALUE = 'SET_VALUE';
const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

@Component({
  computed: mapState(['value', 'inputValue']),
})
export default class HelloVue extends Vue {
  /** props */
  @Prop() private val!: string;

  /** emit */
  @Emit('handle-click')
  clickButton(val: string) {}

  inputValue!: string;

  /** lifecylce hook */
  mounted() {
    console.log('mounted');
  }

  /** computed */
  get isDisabled(): boolean {
    return this.inputValue === '';
  }

  /** method */
  handleInput($event: any): void {
    this.$store.commit(SET_INPUT_VALUE, { value: $event.target.value });
  }
  handleClick(): void {
    if (this.inputValue === '') {
      return;
    }
    this.$store.commit(SET_VALUE, { value: this.inputValue });
    this.$store.commit(SET_INPUT_VALUE, { value: '' });
    this.clickButton('this.value');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
