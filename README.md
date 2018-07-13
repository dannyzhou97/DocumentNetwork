This is the readme file for the Business Network Definition created in Playground
Document Network

This business network defines:

**Participant**
`User`

**Assets**
`Document`

**Transaction** 
`NewDoc` `Comment`

A `User` have a `Document`. Each time there is a `DocModification` with the `Document`, you are
then able to submit a `NewDoc` or `Comment` transaction.

To test this Business Network Definition in the **Test** tab:
Create `User` participants:

```
{
	"$class": "org.test.DocumentNetwork.User",
	"personId": "personId:Billy",
	"firstName": "Billy",
	"lastName": "Thompson"
}
```

Create a `Document` asset:

```
{
	"$class": "org.test.DocumentNetwork.Document",
	"docId": "docId:AAA",
	"lastmodtime": "2018-07-11 14:50:00"
}
```

Submit a `NewDoc` transaction:

```
{
	"$class": "org.test.DocumentNetwork.NewDoc",
	"docId": "docId:AAA",
	"lastmodtime": "2018-07-11 14:55:00"
}
```
Submit a `Comment` transaction:

```
{
	"$class": "org.test.DocumentNetwork.Comment",
    "commentId": "commentId:CCC"
}
```# DocumentNetwork
