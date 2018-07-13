async function sampleTransaction(tx) {  // eslint-disable-line no-unused-vars
    console.log('Comment Submitted:'+ tx.newComment);
    // Save the old value of the asset.
    var oldComment = "none";
    if (!tx.doc.comment){
    }else{
        oldComment = tx.doc.comment;
    }
    // Update the asset with the new value.
    tx.doc.comment = tx.newComment;
    
    if (!tx.doc.version){
        var oldVersion = 0;
        tx.doc.version = 1;
    }else{
        oldVersion = tx.doc.version;
        tx.doc.version ++;
    }
    
    var estTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
    tx.doc.lastmodifiedtime = estTime;
    
    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.basic.Document');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.doc);
    console.log('Comment Updated');
    console.log(estTime); //Gives Mon Mar 21 2016 23:00:00 GMT+0530 (IST)
    
    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.basic', 'SampleEvent');
    event.doc = tx.doc;
    event.oldComment = oldComment;
    event.newComment = tx.newComment;
    event.oldVersion = oldVersion;
    event.newVersion = tx.doc.version;
    emit(event);
}
async function setupDemo(setupDemo) {  // eslint-disable-line no-unused-vars
  
}