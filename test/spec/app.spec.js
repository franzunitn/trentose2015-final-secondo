/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the FlirtrModel object */

describe("Flirtr", function() {

  it("should get the score", function() {  
    expect(FlirtrModel.getScore()).toBe(0);
  });    
    
    it("Take the correct pattern matching", function() {  
        FlirtrModel.analyse("love");
    expect(FlirtrModel.getScore()).toBe(1);
  });    
 
});
