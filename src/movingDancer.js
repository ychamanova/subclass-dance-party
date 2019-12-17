var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="dog.gif" class="dancer rotate">');
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeSpinnyDancer.prototype = Object.create(Dancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  // this.oldStep()

  Dancer.prototype.step.call(this);
  // this.$node.slideTogSpinny
};