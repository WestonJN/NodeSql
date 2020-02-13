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
        await addNewVisitor("Pul",31,"02/01/2020","15:10:00","Joe", "mndi");
        await addNewVisitor("Pu",32,"04/01/2020","15:20:00","Jbe", "mnandi");
        await addNewVisitor("P",33,"06/01/2020","15:40:00","Job", "mnndi");
       
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
        
        expect(list[0].visitor_name).toEqual("Pule");
        expect(list[0].visitor_id).toBeDefined();
        done();
    });

    it("Should delete a single visitor", async(done)=>{
     
        let remove= await deleteVisitor(30);
     
        expect(remove.command).toBe('DELETE');
        expect(remove.rowCount).toBe(1);
        done();
    });

    it("Should update a single visitor", async(done)=>{

        let update= await updateVisitor(45,"John",12,"06/06/2012","14:21:12","Ash","thats good");
     
        expect(update.command).toBe('UPDATE');
        expect(update.rowCount).toBe(1);
        done();

    });

    it("Should display a visitor", async(done)=>{

        let view = await viewVisitor(21);
        
        expect(view[0].visitor_name).toEqual("Pule");
        expect(view[0].visitor_age).toEqual(30);
        expect(view[0].date_of_visit).toEqual("01/01/2020");
        expect(view[0].time_of_visit).toEqual("15:30:00");
        expect(view[0].assistant).toEqual("Jobe");
        expect(view[0].comments).toEqual("mnandi");
        done();
    });

    it ("Should delete all visitors", async (done)=>{
        expect(await deleteAllVisitor()).not.toBeNull();
        
       done();
    })
});