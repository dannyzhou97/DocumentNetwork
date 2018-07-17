/**
 * Sample transaction processor function.
 * @param {org.docnetwork.basic.updateComment} ct The sample transaction instance.
 * @transaction
 */
async function updateComment(ct) {  // eslint-disable-line no-unused-vars
  var oldct;
  console.log('Comment Submitted:'+ ct.comment);
  // Update the asset with the new value
    if (ct.doc.upct){
      const oldComment = ct.doc.upct[ct.doc.upct.length - 1];
      oldct = oldComment.comment;
      ct.doc.upct.push(ct);
    }else{
      ct.doc.upct = [ct];
      oldct = "none";
    }

    if (!ct.doc.version){
      var oldVersion = 0;
      ct.doc.version = 1;
    }else{
      oldVersion = ct.doc.version;
      ct.doc.version ++;
    }
    
  var estTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
  ct.doc.lastmodifiedtime = estTime;
    
  // Get the asset registry for the asset.
  const assetRegistry = await getAssetRegistry('org.docnetwork.basic.Document');
  // Update the asset in the asset registry.
  await assetRegistry.update(ct.doc);
  console.log('Comment Updated');
  console.log(estTime);

  // Emit an event for the modified asset.
  let event = getFactory().newEvent('org.docnetwork.basic', 'SampleEvent');
  event.doc = ct.doc;
  event.oldComment = oldct;
  event.newComment = ct.comment;
  event.oldVersion = oldVersion;
  event.newVersion = ct.doc.version;
  emit(event);

}
async function setupDemo(setupDemo) {  // eslint-disable-line no-unused-vars

}