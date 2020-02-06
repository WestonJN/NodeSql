describe("node sql", ()=>{
    const addNewVisitor = require('../src/script')
    
    it("save data to visitorname Column", async (done)=>{
        let addNewVisitor = await addNewVisitor("Pule")
        expect(addNewVisitor[0].visitorname).toEqual("Pule")
        // expect(addNewVisitor[0].int_col).toEqual(30)
        // expect(addNewVisitor[0].bool_col).toEqual(false)
        done()
    })

})