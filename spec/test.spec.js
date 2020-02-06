describe("node sql", ()=>{
    const addNewVisitor = require('../src/script')
    
    it("save data to visitorname Column", async (done)=>{
        let addNewVisitor = addNewVisitor("Pule")
        expect(addNewVisitor[0].visitorname).toEqual("Pule")
        expect(addNewVisitor[0].visitorage).toEqual(30)
        expect(addNewVisitor[0].dateofvisit).toEqual(false)
        expect(addNewVisitor[0].timeifvisit).toEqual(false)
        expect(addNewVisitor[0].assistant).toEqual(false)
        expect(addNewVisitor[0].comments).toEqual(false)
        done()
    })

})