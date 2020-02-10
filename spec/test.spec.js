describe("SQL Database", ()=>{
    const {addNewVisitor} = require('../src/script')
    
    it("save data to  database", async (done)=>{

       let NewVisitor = await addNewVisitor("Pule",30,"01/01/2020","15:30","Jobe", "mnandi") 

        expect(NewVisitor[0].name).toEqual("Pule")
        expect(NewVisitor[0].age).toEqual(30)
        expect(NewVisitor[0].dateofvisit).toEqual("01/01/2020")
        expect(NewVisitor[0].timeofvisit).toEqual("15:30")
        expect(NewVisitor[0].assistant).toEqual("Jobe")
        expect(NewVisitor[0].comments).toEqual("mnandi")
        done()
    })

})