describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should handle numeric inputs', function() {
    set.add(0);
    expect(set.contains(0)).to.equal(true);
  });

  it('should handle weird inputs', function() {
    var obj = {a: 1};
    var fn = function () {};
    var arr = ['array'];
    set.add(obj);
    set.add(fn);
    set.add(arr);

    expect(set.contains(obj)).to.equal(true);
    expect(set.contains(fn)).to.equal(true);
    expect(set.contains(arr)).to.equal(true);
  });

});
