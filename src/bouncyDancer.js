var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="cat.gif" class="dancer bounce">');
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeBouncyDancer.prototype = Object.create(Dancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  // this.oldStep()

  Dancer.prototype.step.call(this);
  //this.$node.toggle();
};