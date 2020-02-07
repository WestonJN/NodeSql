describe("node sql", ()=>{
    const addNewVisitor = require('../src/script')
    beforeEach(async function() {
        await addNewVisitor();
        addNewVisitor = addNewVisitor("Pule,30,01/01/2020,15:30,Jobe, mnandi")
      });
      
    it("save data to  database", async (done)=>{
        
        expect(addNewVisitor[0].visitorname).toEqual("Pule")
        expect(addNewVisitor[0].visitorage).toEqual("30")
        expect(addNewVisitor[0].dateofvisit).toEqual("01/01/2020")
        expect(addNewVisitor[0].timeofvisit).toEqual("15:30")
        expect(addNewVisitor[0].assistant).toEqual("Jobe")
        expect(addNewVisitor[0].comments).toEqual("mnandi")
        done()
    })

})