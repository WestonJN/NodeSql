describe("SQL Database", ()=>{
    const {addNewVisitor,
        listVisitors,
        deleteVisitor,
        updateVisitor,
        viewVisitor,
        deleteAllVisitor
            } = require('../src/script')
    
    it("save data to  database", async  (done)=>{

       let NewVisitor = await addNewVisitor("Pule",30,"01/01/2020","15:30:00","Jobe", "mnandi");
       
        expect(NewVisitor[0].visitor_name).toEqual("Pule");
        expect(NewVisitor[0].visitor_age).toEqual(30);
        expect(NewVisitor[0].date_of_visit).toEqual("01/01/2020");
        expect(NewVisitor[0].time_of_visit).toEqual("15:30:00");
        expect(NewVisitor[0].assistant).toEqual("Jobe");
        expect(NewVisitor[0].comments).toEqual("mnandi");
        done();
    });

    it("Should be able to list visitors",async (done)=>{

        let list= await listVisitors();
        // console.log(list)
        expect(list[0].visitor_name).toEqual("Pule");
        expect(list[0].visitor_id).toBeDefined();
        done();
    });

    it("Should delete a single visitor", async(done)=>{
     
        let remove= await deleteVisitor(20);
        // console.log(remove)
        expect(remove.command).toBe('DELETE');
        expect(remove.rowCount).toBe(1);
        done();
    });
});