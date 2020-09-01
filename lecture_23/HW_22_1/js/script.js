// Создаем приложение, которое позволяет при помощи ползунков изменить высоту блока. 
// (аля эквалайзер)
// Есть 7 вертикальных блоков, высотой 100-300px. Каждый обладает уникальным цветом. 
// Под ними 7 регуляторов (input type="range") при перемещении которых меняется высота 
// соответствующего блока.

Vue.component('color-block', {
    props: ['blockColor'],
    data() {
        return {
            pointStep: 10,
            blockHeight: 100
        }
    },
    methods: {
        change() {
            this.blockHeight = this.$el.children[1].value;
        }
    },
    template: `<div class="container">
                    <transition name="changeWidth">
                        <div class="block" 
                            :style="{
                                background: blockColor, 
                                height: blockHeight + 'px'
                            }"
                        ></div>
                    </transition>
                    <input id="kiks" class="range" type="range" min="100" max="300" value="100"
                        step="pointStep"
                        v-on:input="change()" 
                    >
                </div>`
})

var app = new Vue({
    el: '#app',
})