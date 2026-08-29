var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "  Introduction  This eBook contains all of the course material for our MAT 1070 class this semester. It is NOT a substitute for attending class, participating in the activities, completing the online homework, and reading the textbook. It is meant to be a supplement to all of these, allowing you to go back and review material\/solutions that were confusing to you when you saw them the first time. This is the filled-in version of the book, which contains the details of the class notes (after that class day is complete) and solutions to activities\/homework once they are graded. The blank version of the book, available on Canvas, has the empty version of the notes that you can print to write on during class.    Course Notes  These are the notes that were covered during class time. The hand-written version of the notes that was actually presented is available directly from the course Canvas page. These notes are a typed version that covers the same content in a similar level of detail.    In-Class Activities  Copies of any in-class activities are available here. This is not a substitute for working on the activity in-class, but if you would like a blank copy to reattempt later in the semester, you can find it here.    Handouts  Any helpful handouts or notes sheets will be included here.    Homework  Any hand-in homework that does not come directly from an in-class activity will be available here. The online homework is a separate part of the course, available from our Canvas site.   "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.    "
},
{
  "id": "activities",
  "level": "1",
  "url": "activities.html",
  "type": "Chapter",
  "number": "",
  "title": "Filled In-Class Activities",
  "body": " Filled In-Class Activities    "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Filled Homework",
  "body": " Filled Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
