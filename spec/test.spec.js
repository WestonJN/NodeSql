describe("SQL Database", ()=>{
    const {addNewVisitor} = require('../src/script')
    
    it("save data to  database", async  (done)=>{

       let NewVisitor = await addNewVisitor("Pule",30,"01/01/2020","15:30:00","Jobe", "mnandi") 
        console.log(NewVisitor)
        expect(NewVisitor[0].visitor_name).toEqual("Pule")
        expect(NewVisitor[0].visitor_age).toEqual(30)
        expect(NewVisitor[0].date_of_visit).toEqual("01/01/2020")
        expect(NewVisitor[0].time_of_visit).toEqual("15:30:00")
        expect(NewVisitor[0].assistant).toEqual("Jobe")
        expect(NewVisitor[0].comments).toEqual("mnandi")
        done()
    })

})
