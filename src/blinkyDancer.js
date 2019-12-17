var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="cow.gif" class="dancer">');
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // this.oldStep()

  Dancer.prototype.step.call(this);
  this.$node.toggle();
};