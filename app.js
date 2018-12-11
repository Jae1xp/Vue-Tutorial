new Vue({
  el: '#app',
  data: {
    // name: '',
    // age: 20,
    // x: 0,
    // y: 0,
    // a: 0,
    // b: 0
    // error: false,
    // success: false
    characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
    ninjas: [
      { name: 'Ryu', age: 41},
      { name: 'Kennen', age: 15},
      { name: 'Jae', age: 25}
    ]
  },
  methods: {
    // greet: function(time) {
    //   return 'Good ' + time + ' ' + this.name;
    // },
    // addYear: function(inc) {
    //   this.age += inc;
    // },
    // subtractYear: function(dec) {
    //   this.age -= dec;
    // },
    // updateXY: function(event) {
    //   this.x = event.offsetX;
    //   this.y = event.offsetY; 
    // },
    // click: function() {
    //   alert('You clicked me!');
    // },
  },
  // computed: {
  //   addToA: function() {
  //     console.log('adding to A');
  //     return this.a + this.age;
  //   },
  //   addToB: function() {
  //     console.log('adding to B');
  //     return this.b + this.age;
  //   }
  // }
});