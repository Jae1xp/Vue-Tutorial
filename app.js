new Vue({
  el: '#app',
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    },
    addYear: function(inc) {
      this.age += inc;
    },
    subtractYear: function(dec) {
      this.age -= dec;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY; 
    }
  }
});